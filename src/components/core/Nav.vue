<script setup>
import Menubar from 'primevue/menubar';
import { useAuthenticationStore } from '../../store/authenticationStore';
import { storeToRefs } from 'pinia';
import Button from 'primevue/button';

//vue3 option
const { user, isConnected } = storeToRefs(useAuthenticationStore());
const { logout } = useAuthenticationStore();
</script>

<script>
export default {
    //vue2 composition
    /*setup(){
        const store = useAuthenticationStore();
        return {isConnected: store.isConnected, user: store.user};
    },*/
    data() {
        return {
            items: [
                {
                    label: 'Accueil',
                    icon: 'pi pi-fw pi-file',
                    to: '/'
                },
                {
                    label: 'Voiture',
                    icon: 'pi pi-fw pi-file',
                    items: [
                        { label: 'Ajouter', to: '/cars/add' },
                        { label: 'Lister', to: '/cars/list' }
                    ]

                }
            ]
        }
    },
    methods: {
        onLogout(event) {
            this.logout();
        }
    },
    mounted() {
        //console.log(this.user);
    }
}
</script>

<template>
    <Menubar :model="items">
        <template #end>
            <div v-if="this.isConnected">
                Bonjour {{this.user.name}}
                <Button @click="onLogout">Se déconnecter</Button>
            </div>
            <div v-else>
                <router-link to="/login">Se connecter</router-link>
            </div>
        </template>
    </Menubar>

</template>