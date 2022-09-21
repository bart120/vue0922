<script setup>
import Menubar from 'primevue/menubar';
</script>

<script>
export default {

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
    }
}
</script>

<template>
    <Menubar :model="items">
        <template #end>
            <router-link to="/login">Se connecter</router-link>
        </template>
    </Menubar>

</template>