import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)

    function setUser(newUser: any) {
      user.value = newUser
    }

    function getUser() {
      return user.value
    }

    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      setUser(user);
    });

    function logout() {
      auth.signOut().then(() => {
        setUser(null);
      });
    }

    return { user, setUser, getUser, logout }
})
