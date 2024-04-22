import { defineStore } from 'pinia'
import { ref } from 'vue';


export const useUserStore = defineStore('user', () => {
  const user = ref({})

  function addUser(userObj) {
    user.value = userObj;
  }

  function logout() {
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('admin')
    user.value = {}
  }

  function getUser() {
    return user.value;
  }

  return { user, addUser, logout, getUser }
})