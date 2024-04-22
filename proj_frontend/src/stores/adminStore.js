import { defineStore } from 'pinia'
import { ref } from 'vue';


export const useAdminStore = defineStore('admin', () => {
  const admin = ref({})

  function addAdmin(adminObj) {
    admin.value = adminObj;
  }

  function logout() {
    window.localStorage.removeItem('admin')
    admin.value = {}
  }

  function getAdmin() {
    return admin.value;
  }

  return { admin, addAdmin, logout, getAdmin }
})