<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import InputPink from '../../core/input/InputPink.vue'
import InputMail from '../../core/input/InputMail.vue';
import { useAuthenticationStore } from '../../../store/authenticationStore';

//composition
/*function submit() {

}*/

//store vue 3 composition
const { login } = useAuthenticationStore();
</script>

<script>

export default {
    //store vue2 option
    /*setup(){
        const store = useAuthenticationStore();
        return {login = store.login};
    },*/


    data() {
        return { user: { login: '', password: '' }, validView: false }
    },
    methods: {
        submit(/*event*/) {
            //event.preventDefault();
            //console.log("test");
            //console.log("user:", this.user);
            //this.user.login = 'bob';
            //call server
            //const u = { mail: this.user.login, name: 'Bob', token: 'GSFDGg55dfgfdsgFDG' };
            this.login(this.user.login, this.user.password);

        },
        statusChangeFnt(obj) {
            //console.log("state:", obj.state);
            this.validView = obj.state;
        }
    }
}
</script>


<template>
    <h1>Authentification</h1>

    <form @submit.prevent="submit" novalidate>
        <div>
            <!--<label>Login</label>
            <InputText type="email" v-model="user.login" />-->

            <!--<InputPink label="Login" type="email" v-model="user.login" />-->
            <InputMail label="Login" v-model="user.login" @status-change="statusChangeFnt" />
        </div>
        <div>
            <!--<label>Mot de passe</label>
            <InputText type="password" v-model="user.password" />-->
            <InputPink label="Mot de passe" type="password" v-model="user.password" />
        </div>
        <div>
            <Button type="submit" :disabled="!this.validView">Connexion</Button>
        </div>
    </form>
</template>