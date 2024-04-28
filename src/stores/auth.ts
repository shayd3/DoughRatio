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

    function logout(): Promise<boolean> {
      return new Promise ((resolve, reject) => {
        auth.signOut().then(() => {
          resolve(true);
        }).catch((error) => {
          reject(error);
        });
      });
    }

    return { user, setUser, getUser, logout }
})
