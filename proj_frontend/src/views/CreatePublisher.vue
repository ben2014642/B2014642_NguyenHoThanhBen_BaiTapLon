<template>
    <div class="form-container">
        <a href="javascript:history.back(1);" class="btn btnDanger">Quay lại</a>
        <h2>Add Book</h2>
        <form @submit.prevent="onSubmitCreatePublisher" id="formAddBook">
            <div class="form-group">
                <label for="username">Publisher ID</label>
                <input type="text" id="publisher_id" v-model="publisher.manxb" name="publisher_id" required="">
            </div>
            <div class="form-group">
                <label for="publisher_name">Publisher Name</label>
                <input type="text" id="publisher_name" v-model="publisher.tennxb" name="publisher_name" required="">
            </div>
            <div class="form-group">
                <label for="username">Publisher Address</label>
                <input type="text" id="address" v-model="publisher.diachi" name="address" required="">
            </div>

            <button type="submit" class="btn btn-primary">Lưu</button>
        </form>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import PublisherService from '@/services/publisher.service';
import { ref } from 'vue';


const router = useRouter();
// Refs
const publisher = ref({
    manxb: '',
    tennxb: '',
    diachi: '',
})

// Methods

async function onSubmitCreatePublisher() {
    const publisherSubmitted = await PublisherService.create(publisher.value)
    router.go(-1);
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