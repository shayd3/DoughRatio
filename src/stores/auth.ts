import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';


export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)

    function setUser(newUser: User | null) {
      user.value = newUser
    }

    function getUser(): User | null {
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
