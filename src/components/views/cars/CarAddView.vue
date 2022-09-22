<script setup>
import InputPink from '../../core/input/InputPink.vue';
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import BrandService from '../../../services/BrandService';
import CarService from '../../../services/CarService';
</script>

<script>
const brandService = new BrandService();
const carService = new CarService();

export default {
    data() {
        return { car: {}, brands: [] };
    },
    methods: {
        submit() {
            carService.addCar(this.car).then(data => {
                alert(`La voiture est ajoutée avec l'id ${data.id}`);
            }).catch(err => {
                alert(`Erreur: ${err}`);
            });
        }
    },
    mounted() {
        brandService.getBrands().then(data => {
            this.brands = data;
        }).catch(err => {
            alert('Erreur lors de la récupération des marques.');
        });
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
            <label>Marque</label>
            <br />
            <Dropdown :options="brands" option-label="name" option-value="id" v-model="car.brandID"
                placeholder="Sélectionner une marque" />
        </div>
        <div>
            <Button type="submit">Enregistrer</Button>
        </div>
    </form>
</template>