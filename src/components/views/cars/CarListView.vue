<script setup>
import CarService from '../../../services/CarService';
</script>

<script>
const carService = new CarService();

export default {
    data() {
        return { cars: [] };
    },
    mounted() {
        /*const prom = carService.getCars();
        prom.then(this.methodeDeRetour);

        console.log("fin mounted")*/

        carService.getCars().then(data => {
            //console.log(response);
            this.cars = data;
        }).catch(err => {
            alert(`Erreur: ${err}`);
        });
    }/*,
    methods: {
        methodeDeRetour(response) {
            this.cars = response.data;
        }
    }*/
}
</script>


<template>

    <h1>Liste des voitures</h1>
    <table>
        <thead>
            <tr>
                <th>Modèle</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="car in cars">
                <td>{{car.model}}</td>
                <td>{{car.price}} €</td>
            </tr>
        </tbody>
    </table>
</template>