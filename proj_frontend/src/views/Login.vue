<template>
    <div class="form-container">
        <h2>Library Login Form</h2>
        <form @submit.prevent="login" id="formLogin" method="POST">
            <div class="form-group">
                <label for="username">Username: </label>
                <input v-model="username" type="text" id="username" name="username" required="">
                <div data-lastpass-icon-root=""
                    style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;">
                </div>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" id="password" name="password" required="">
                <div data-lastpass-icon-root=""
                    style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;">
                </div>
            </div>
            <button type="submit" class="btn btn-primary btn-auth">Login</button>
        </form>
        <a style="text-decoration: dashed;" href="register.php" class="btn btn-primary btn-auth">Register</a>
    </div>
</template>

<script setup>
// Import
import { useUserStore } from '@/stores/userStore';
import {ref} from 'vue';
import AuthService from "@/services/authen.service";
import router from '@/router';

// Refs
const username = ref('');
const password = ref('');

// Store
const userStore = useUserStore();

async function login() {
    const user = await AuthService.login({username: username.value,password: password.value});

    userStore.addUser(user[0]);
    router.push({name: 'home'})
    window.localStorage.setItem('user', JSON.stringify(user[0]));
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
