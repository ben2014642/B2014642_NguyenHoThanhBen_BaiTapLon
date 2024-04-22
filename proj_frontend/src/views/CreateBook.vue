<template>
    <div class="form-container">
        <a href="javascript:history.back(1);" class="btn btnDanger">Quay lại</a>
        <h2>Add Book</h2>
        <form @submit.prevent="onSubmitCreateBook" id="formAddBook">
            <div class="form-group">
                <label for="username">Title</label>
                <input type="text" id="title" v-model="book.tensach" name="title" required="">
            </div>
            <div class="form-group">
                <label for="thumbnail">Thumbnail</label>
                <input type="text" id="thumbnail" v-model="book.image" name="thumbnail" required="">
            </div>
            <div class="form-group">
                <label for="author">Author</label>
                <input type="text" id="author" v-model="book.tacgia" name="author" required="">
                <div id="password-match-error" class="error-message"></div>
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="text" id="price" v-model="book.dongia" name="price" required="">
                <div id="password-match-error" class="error-message"></div>
            </div>
            <div class="form-group">
                <label for="publisher">Publisher</label>
                <input type="text" id="publisher" name="publisher" required="">
            </div>
            <div class="form-group">
                <label for="publication_date">Publish Year</label>
                <input type="text" id="publication_date" v-model="book.namxuatban" name="publication_date" required="">
            </div>
            <div class="form-group">
                <label for="quantity">Quantity</label>
                <input type="text" id="quantity" v-model="book.soquyen" name="quantity" required="">
            </div>

            <button type="submit" class="btn btn-primary">Lưu</button>
        </form>
    </div>
</template>

<script setup>
import BookService from '@/services/book.service';
import { ref } from 'vue';

// Refs
const book = ref({
    tensach: '',
    dongia: '',
    soquyen: '',
    namxuatban: '',
    tacgia: '',
    image: '',
})

// Methods

async function onSubmitCreateBook() {
    const bookSubmitted = await BookService.create(book.value)
    console.log(bookSubmitted);
}

// Hooks

</script>

<style scoped>
@import url('../assets/myStyle.css');


* {
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f1f1f1;
}

.form-container {
    background-color: #ffffff;
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h2 {
    text-align: center;
}

input[type=text],
input[type=password],
input[type=date],
select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button[type=submit] {
    background-color: #4CAF50;
    color: #ffffff;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
}

button[type=submit]:hover {
    background-color: #45a049;
}

.cancel-btn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    margin-top: 10px;
}

.cancel-btn:hover {
    background-color: #da190b;
}

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

label {
    font-weight: bold;
    margin-bottom: 10px;
}

.error-message {
    color: red;
    margin-bottom: 10px;
}

.btn {
    width: 85px;
    padding: 8px;
    text-decoration: none;
    border-radius: 5px;
    color: white;
}

.btnDanger {
    background-color: orange;
}
</style>