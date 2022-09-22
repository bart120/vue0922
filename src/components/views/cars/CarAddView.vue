<script setup>
import InputPink from '../../core/input/InputPink.vue';
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';
</script>

<script>
export default {
    data() {
        return { car: {} };
    },
    methods: {
        submit() {

        }
    }
}
</script>

<template>
    <h1>Ajouter une voiture</h1>
    <form @submit.prevent="submit" novalidate>
        <div>
            <InputPink type="text" label="Modèle" v-model="car.model" />
        </div>
        <div>
            <InputPink type="number" label="Prix" v-model="car.price" />
        </div>
        <div>
            <label>Mise en circulation</label>
            <br />
            <Calendar v-model="car.dateOfCirculation" />
        </div>
        <div>

        </div>
        <div>
            <Button type="submit">Enregistrer</Button>
        </div>
    </form>
</template>