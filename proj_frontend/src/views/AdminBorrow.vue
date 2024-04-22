<template>
    <div class="content">
        <div class="search-filter">
            <div>
                <label for="search">Tìm kiếm sách:</label>
                <input type="text" v-model="searchVal" id="search" name="search">
            </div>

        </div>

        <div class="borrowed-books">
            <div class="">
                <a href="add-borrow.php" class="btn btnSuccess">Thêm</a>
            </div>
            <h2>Borrow Books</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Book Name</th>
                        <th>Borrower Name</th>
                        <th>Borrow Date</th>
                        <th>Return Date</th>
                        <th>Action</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="borrow in borrowTableData">
                        <td>8</td>
                        <td>{{ borrow.masach.tensach }}</td>
                        <td>{{ borrow.madocgia.holot + borrow.madocgia.ten }}</td>
                        <td>{{ moment(borrow.ngaymuon).format("L") }}</td>
                        <td>{{ moment(borrow.ngaytra).format("L") }}</td>
                        <td>
                            <a class="btn btnEdit" href="edit-borrow.php?borrow_id=8">EDIT</a><a>
                                <input type="text" name="borrow_id" value="8" hidden="" id="">
                                <button class="btn btnDelete" type="submit" onclick="deleteBorrow(8,3)">DELETE</button>
                            </a>
                        </td>
                        <td>
                            <select v-model="borrow.trangthai" @change="onChangeSelectStatus(borrow)" name="trangthai"
                                id="trangthai">
                                <option value="Đang chờ">Đang chờ</option>
                                <option value="Đã mượn">Đã mượn</option>
                                <option value="Đã trả">Đã trả</option>
                            </select>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import BorrowService from '@/services/borrow.service.js';
import moment from 'moment';
import {removeVietnameseTones} from '../helper';

// Ref
const borrows = ref([]);
const searchVal = ref('');

// Method
async function onChangeSelectStatus(borrow) {
    await BorrowService.updateStatusBorrow(borrow);
    alert("Cập nhật trạng thái thành công !")
}

// Hooks
const borrowTableData = computed(() =>
    borrows.value.filter((data) => {
        let search = removeVietnameseTones(searchVal.value);
        return removeVietnameseTones(data.masach.tensach).toLowerCase().includes(search.toLowerCase())
    }

    )
)

onMounted(async () => {
    borrows.value = await BorrowService.getAll();
    console.log(borrows.value);
})
</script>