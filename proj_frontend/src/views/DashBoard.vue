<template>
    <main>
        <section>
            <div class="search-filter">
                <div>
                    <label for="search">Tìm kiếm sách:</label>
                    <input type="text" v-model="searchVal" id="search" name="search">
                </div>
                <div id="formFilter">
                    <!-- <label for="search">Lọc:</label> -->
                    <select v-on:change="sortBook()" v-model="sort" name="filter" id="filter">
                        <option selected value="0">Mới cập nhật</option>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>
                    <button type="submit">Lọc</button>
                </div>
            </div>

        </section>
        <section>
            <ul v-if="bookTableData" class="book-list">

                <li v-for="book in bookTableData" class="list-item">
                    <a class="title-book" href="abc">{{ book.tensach }}</a>
                    <p><span class="label">Author</span>: {{ book.tacgia }}</p>
                    <p><span class="label">Publisher</span>: {{ book.namxuatban }}</p>
                    <p><span class="label">Remain</span>: {{ book.soquyen }}</p>
                    <img :src="book.image" style="width: 100px">
                    <router-link class="btnMuonSach" :to="{name: 'form-borrow', params: {masach: book._id}}">Mượn Sách</router-link>

                </li>

            </ul>
        </section>
    </main>
</template>

<script setup>
import BookService from "@/services/book.service";
import { onMounted, ref, computed } from "vue";
import {removeVietnameseTones} from '../helper';


// Ref
const bookData = ref([]);
const searchVal = ref('');
const sort = ref(0);



// Method


// Hooks
const bookTableData = computed(() =>
    bookData.value.filter((data) => {
        let search = removeVietnameseTones(searchVal.value);
        return removeVietnameseTones(data.tensach.toLowerCase()).includes(search.toLowerCase())
    })
)

const sortBook = async function () {
    bookData.value = await BookService.sort({ type: sort.value });
}

const books = async function () {
    try {
        bookData.value = await BookService.getAll();
    } catch (error) {
        console.log(error);
    }
}


onMounted(() => {
    books();
})
</script>