<template>
    <div class="form-container">
        <router-link :to="{name: 'login'}" >Quay lại</router-link>

        <h2 style="margin-top: 20px;">Library Registration Form</h2>
        <form id="formRegister" @submit.prevent="register" >
            <div class="form-group">
                <label for="username">Username</label>
                <input v-model="form.username" type="text" id="username" name="username" required="">
                <div data-lastpass-icon-root=""
                    style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;">
                </div>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="form.password" type="password" id="password" name="password" required="">
                <div data-lastpass-icon-root=""
                    style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;">
                </div>
            </div>
            <div class="form-group">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" required="">
                <div id="password-match-error" class="error-message"></div>
                <div data-lastpass-icon-root=""
                    style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;">
                </div>
            </div>
            <div class="form-group">
                <label for="holot">Họ lót</label>
                <input v-model="form.holot" type="text" id="holot" name="holot" required="">
            </div>
            <div class="form-group">
                <label for="ten">Tên</label>
                <input v-model="form.ten" type="text" id="ten" name="ten" required="">
            </div>
            <div class="form-group">
                <label for="birtday">Ngày sinh</label>
                <input v-model="form.ngaysinh" type="text" id="birtday" name="birtday" required="">
            </div>
            <div class="form-group">
                <label for="phai">Phái</label>
                <select v-model="form.phai" name="phai" id="phai">
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                </select>
            </div>
            <div class="form-group">
                <label for="dienthoai">SĐT</label>
                <input v-model="form.dienthoai" type="text" id="dienthoai" name="dienthoai" required="">
            </div>
        <button type="submit" class="btn btn-primary btn-auth">Sign in</button>
    </form>
</div></template>

<script setup>
import { onMounted, ref } from 'vue';
import authenService from '@/services/authen.service';

// Refs
const form = ref({
    username: '',
    password: '',
    holot: '',
    ngaysinh: '',
    phai: '',
    diachi: '',
    dienthoai: '',
})

async function register() {
    const user = await authenService.register(form.value);
    console.log(user);
}

</script>

<style scoped>
* {
    box-sizing: border-box;
}

.btn-auth {
    width: 100% !important;
    font-size: 18px !important;
    margin-bottom: 6px;
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
</style>