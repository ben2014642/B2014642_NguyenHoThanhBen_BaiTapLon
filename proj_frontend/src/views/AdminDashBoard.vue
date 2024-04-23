<template>
    <div class="borrowed-books">
        <div class="">
            <router-link :to="{ name: 'admin.create.book' }" class="btn btnSuccess">Thêm</router-link>
            <div class="search-filter">
                <div>
                    <label for="search">Tìm kiếm sách:</label>
                    <input type="text" v-model="searchVal" id="search" name="search">
                </div>

            </div>
            <!-- <a href="export.php?page=infoBook" class="btn btnSuccess">Xuất Excel</a> -->
        </div>
        <h2>List Books</h2>
        <table style="width: 100%">
            <thead>
                <tr>
                    <th>Book Name</th>
                    <th>Thumbnail</th>
                    <th>Remain</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <!-- <th>Status</th> -->
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in bookTableData">
                    <td>{{ book.tensach }}</td>
                    <td><img :src="book.image" style="width: 100px"></td>
                    <td>0</td>
                    <td>{{ book.tacgia }}</td>
                    <td>{{ book.manxb.tennxb ? book.manxb.tennxb : '' }}</td>
                    <!-- <td><button class="btn btnSuccess">Public</button></td> -->
                    <td>
                        <router-link class="btn btnEdit"
                            :to="{ name: 'admin.edit.book', params: { masach: book._id } }">EDIT</router-link>
                        <a @click.prevent="deleteBook(book._id)" type="submit" class="btn btnDelete">DELETE</a>
                    </td>

                </tr>

            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import BookService from '@/services/book.service';
import { removeVietnameseTones } from '@/helper';

// Refs
const books = ref([]);
const searchVal = ref('');


// Methods
async function deleteBook(masach) {
    const confirmDel = confirm("Bạn có chắc chắn muốn xóa ?");
    if (!confirmDel) {
        return;
    }
    const book = await BookService.delete(masach);

}


// Hooks
const bookTableData = computed(() =>
    books.value.filter((data) => {
        let search = removeVietnameseTones(searchVal.value)
        return removeVietnameseTones(data.tensach).toLowerCase().includes(search.toLowerCase())
    }
    )
)


onMounted(async () => {
    books.value = await BookService.getAll();
    console.log(books.value);
})

</script>
