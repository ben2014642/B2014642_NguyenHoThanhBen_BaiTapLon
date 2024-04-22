<template>
    <header>
        <h1>Thư viện trường Đại Học</h1>
        <nav>
            <ul class="nav">
                <div class="nav-left">
                    <li><router-link :to="{name: 'home'}">Trang chủ</router-link></li>
                    <li >Xin chào,<span v-if="userStore.user != null" style="color: #ff1111">{{ userStore.user.username }}</span><img class="user"
                            src=""></li>
                </div>

                <div class="nav-right">
                    <li>-1 <a href="gift.php" class="mark">Điểm,</a></li>
                    <li><router-link :to="{name: 'borrow'}">Phiếu mượn,</router-link></li>
                    <li  v-if="userStore.user != null"><router-link style="color: greenyellow" @click="logout" :to="{name: 'login'}">Đăng xuất</router-link></li>
                    <li v-else><router-link :to="{name: 'login'}">Đăng nhập</router-link></li>
                </div>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore';
const userStore = useUserStore();

// Methods
function logout() {
    // console.log(userStore);
    userStore.logout();
}


</script>