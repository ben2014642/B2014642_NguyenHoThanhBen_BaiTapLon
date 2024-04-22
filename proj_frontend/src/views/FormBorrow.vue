<template>
    <form id="formBorrow" @submit.prevent="onSubmitBorrow">
        <h2>Thông tin mượn sách</h2>
        <div>
            <input type="text" value="1" hidden="" id="student_id" name="student_id" required>
        </div>

        <div>
            <input type="text" id="book_id" value="2" name="book_id" hidden="">
        </div>
        <div>
            <label for="book_title">Book Title</label>
            <input v-if="book" type="text" id="book_title" v-model="book.tensach" name="book_title" disabled>
        </div>
        <div>
            <label for="borrow_date">Ngày mượn:</label>
            <input type="date" id="borrow_date" v-model="now" readonly name="borrow_date" required>
        </div>
        <div>
            <label for="return_date">Ngày trả:</label>
            <input type="date" id="return_date" v-model="return_date" name="return_date" required>
        </div>
        <button name="submitBorrow" type="submit">Mượn sách</button>
    </form>
</template>

<script setup>
// Import
import { useRoute } from 'vue-router';
import { onMounted,computed, ref } from 'vue';
import BorrowService from '@/services/borrow.service';
import BookService from '@/services/book.service';
import moment from 'moment';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

// Refs
const book = ref(null);
const return_date = ref(null);


// Hooks
const now = computed(() => {
    let date = moment().date();
    let month = moment().month() + 1;
    if (month < 10) {
        month = `0${month}`
    }
    let year = moment().year();
    return `${year}-${month}-${date}`;
})

// console.log(now.value);

async function onSubmitBorrow() {
    console.log('123');
    const borrow = await BorrowService.create({
        masach: book.value._id,
        madocgia: userStore.user._id,
        ngaymuon: now.value,
        ngaytra: return_date.value,
        status: 0
    });
    alert("Mượn sách thành công !")
    router.push({name: 'borrow'})

}

onMounted(async () => {
    const masach = route.params.masach;
    book.value = await BookService.getOne(masach);

})

</script>