import { defineStore } from 'pinia';


export const useAuthenticationStore = defineStore({
    id: 'authStore',
    //data
    state: () => {
        return { user: null };
    },
    //computed
    getters: {
        isConnected: (state) => {
            return state.user != null;
        }
    },
    //methods
    actions: {
        login(login, password) {
            //call server
            this.user = { name: 'Bob', mail: login, token: 'GSFDGg55dfgfdsgFDG' };
        },
        logout() {
            this.user = null;
        }
    }
});