<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

//composition
/*function submit() {

}*/
</script>

<script>

export default {
    data() {
        return { user: { login: '', password: '' } }
    },
    methods: {
        submit(/*event*/) {
            //event.preventDefault();
            //console.log("test");
            console.log("user:", this.user);
            //this.user.login = 'bob';
        }
    }
}
</script>


<template>
    <h1>Authentification</h1>

    <form @submit.prevent="submit" novalidate>
        <div>
            <label>Login</label>
            <InputText type="email" v-model="user.login" />
        </div>
        <div>
            <label>Mot de passe</label>
            <InputText type="password" v-model="user.password" />
        </div>
        <div>
            <Button type="submit">Connexion</Button>
        </div>
    </form>
</template>