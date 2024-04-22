<template>
    <div id="app">
        <AppHeader />
        <div class="container mt-3">
            <router-view />
        </div>
        <AppFooter />
    </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from '@/components/AppFooter.vue';

import { useUserStore } from '../stores/userStore';
import { onMounted } from 'vue';
import router from '../router';

const userStore = useUserStore();

// Hooks
onMounted(() => {
    const user = window.localStorage.getItem('user');
    userStore.addUser(JSON.parse(user));
    if (userStore.user == null) {
        router.push({ name: 'login' })
    }
})

</script>