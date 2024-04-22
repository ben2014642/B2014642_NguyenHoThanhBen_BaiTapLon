<template>
    <div class="edit-borrow-form">
        <h2>Chỉnh sửa thông tin mượn sách</h2>
        <form v-if="borrow" id="formUpdateBorrow" method="POST">
            <div class="form-group">
                {{ borrow.ngaymuon }}
                <label for="borrow-date">Ngày mượn:</label>
                <input type="date" id="borrow-date" v-model="borrow.ngaymuon" name="borrow_date" required="">
            </div>
            <div class="form-group">
                <label for="return-date">Ngày trả:</label>
                <input type="date" id="return-date" v-model="borrow.ngaytra" name="return_date" required="">
            </div>
            <div class="form-group">
                <label for="book-id">Trạng thái:</label>
                <select name="status" id="status">
                    <option value="0">Chờ</option>
                    <option selected="" value="1">Đã mượn</option>
                </select>
            </div>
            <button name="updateBorrow" type="submit">Lưu</button>
        </form>
    </div>
</template>

<script setup>
import AdminBorrowService from '@/services/borrow.service';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import moment from 'moment';

// Ref
const borrow = ref(null);
const route = useRoute();

// Methods
async function onSubmitEditBook() {
    const bookEdited = await AdminBorrowService.edit(book.value);
    console.log(bookEdited);
}

function formatDate(date) {
    return `${moment(date).year()}-${moment(date).month()}-${moment(date).date()}`;
}

// Hooks
onMounted(async () => {
    const id_borrow = route.params.id_borrow;
    borrow.value = await AdminBorrowService.getOneByIdBorrow(id_borrow);
    borrow.value.ngaymuon = formatDate(borrow.value.ngaymuon)
    borrow.value.ngaytra = formatDate(borrow.value.ngaytra)
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