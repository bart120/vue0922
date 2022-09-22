<script setup>
import InputPink from './InputPink.vue'

</script>

<script>
const regMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {

    data() {
        return { value: '', valid: false };
    },
    watch: {
        value(newVal, oldVal) {
            if (regMail.test(newVal)) {
                this.valid = true;
                this.$emit('statusChange', { state: this.valid, msg: '' });
                return;
            }
            this.valid = false;
            this.$emit('statusChange', { state: this.valid, msg: 'Mail invalide' });
        }
    },
    updated() {
        console.log("updated");
    },
    emits: ['statusChange']
}
</script>


<template>
    <InputPink type="email" v-model="value" v-bind="this.$attrs" />
    <p v-if="!valid" style="color:red">
        Adresse mail invalide
    </p>
</template>