<template>
    <div class="container">
        <h1>Quản lý thư viện</h1>
        <div class="menu">
            <ul>
                <li><router-link :to="{ name: 'admin.home' }">Thông tin sách</router-link></li>
                <li><router-link :to="{name: 'admin.index.borrow'}">Mượn sách</router-link></li>
                <li><router-link :to="{ name: 'admin.index.publisher' }">Nhà Xuất Bản</router-link></li>
                <!-- <li><a href="/admin/login.php">Đăng nhập</a></li> -->
            </ul>
        </div>
        <div class="content">
            <router-view />

        </div>

    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAdminStore } from '../stores/adminStore';

const adminStore = useAdminStore();
const router = useRouter();
// Hooks
onMounted(() => {
    const admin = window.localStorage.getItem('admin');
    adminStore.addAdmin(JSON.parse(admin));
    if (adminStore.admin == null) {
        router.push({ name: 'admin.login' })
    }
})


</script>

<style>
@import url('../assets/myStyle.css');
</style>