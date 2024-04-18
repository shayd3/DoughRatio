import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)

    function setUser(newUser: any) {
      user.value = newUser
    }

    function getUser() {
      return user.value
    }

    return { user, setUser, getUser }
})
