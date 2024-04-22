<template>
    <div class="edit-borrow-form">
        <h2>Chỉnh sửa thông tin mượn sách</h2>
        <form id="formUpdateBook" @submit.prevent="onSubmitEditBook" v-if="book">
            <div class="form-group">
                <input type="text" id="book_id" hidden="" value="1" name="book_id">
            </div>
            <div class="form-group">
                <label for="book_name">Book name:</label>
                <input type="text" v-model="book.tensach" id="book_name" value="KỸ NĂNG LÀM VIỆC NHÓM CỦA NGƯỜI NHẬT"
                    name="title" required>
            </div>
            <div class="form-group">
                <label for="thumbnail">Thumbnail:</label>
                <input type="text" id="thumbnail" v-model="book.image" name=" thumbnail" required>
            </div>
            <div class="form-group">
                <label for="quantity">Remain:</label>
                <input type="text" id="quantity" v-model="book.soquyen" name="quantity" required>
            </div>
            <div class="form-group">
                <label for="author">Author</label>
                <input type="text" id="author" v-model="book.tacgia" name="author" required>
            </div>
            <div class="form-group">
                <label for="publisher">Publisher</label>
                <input type="text" id="publisher" name="publisher" required>
            </div>
            <div class="form-group">
                <label for="publish_year">Publish Year</label>
                <input type="text" id="publish_year" v-model="book.namxuatban" name="publish_year" required>
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="text" id="price" name="price" v-model="book.dongia" required>
            </div>

            <div class="wrap-btn">
                <button name="updateBook" type="submit">Lưu</button>
                <button class="btnBack" @click="$router.push({name: 'admin.home'})" name="back" type="button">Quay lại</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import BookService from '@/services/book.service';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

// Ref
const book = ref(null);
const route = useRoute();

// Methods
async function onSubmitEditBook() {
    const bookEdited = await BookService.edit(book.value);
    console.log(bookEdited);
}

// Hooks
onMounted(async () => {
    const masach = route.params.masach;
    book.value = await BookService.getOne(masach);
})

</script>

<style scoped>
.wrap-btn {
    display: flex;
}
.btnBack {
    width: max-content;
    padding: 10px;
    height: max-content;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    border: none;
    margin-left: 10px;
}
</style>