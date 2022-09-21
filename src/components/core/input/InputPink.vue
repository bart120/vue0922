<script setup>
import InputText from 'primevue/inputtext';
</script>

<script>

export default {

    /*data() {
        console.log("data");
        return {
            displayColor: this.$attrs.modelValue == '' ? 'background-color: pink' : ''
        }
    },*///NO
    props: {
        label: String
    },

    mounted() {
        //console.log("props", this.$props);
        //console.log("attrs", this.$attrs);
    },
    updated() {
        //console.log("updated");
        //this.displayColor = this.$attrs.modelValue == '' ? 'background-color: pink' : '';//NO
    },
    computed: {
        displayColor() {
            return this.$attrs.modelValue == '' ? 'background-color: pink' : '';
        }
    }

}
</script>


<template>
    <label>{{label}}</label>
    <InputText v-bind="this.$attrs" :style="displayColor" />

</template>