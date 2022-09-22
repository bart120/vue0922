import axios from 'axios';

const url = 'https://formation.inow.fr/demo/api/v1/cars';

export default class {
    getCars() {
        /*console.log('getcars');

        let p = axios.get(url).then(this.methodeDeRetour); //NO

        console.log('fin getcars')
        return p;*/
        //return axios.get(url);

        /*const p1 = axios.get(url);
        const p2 = p1.then(this.methodeDeChainage);
        return p2;*/
        return axios.get(url).then(this.methodeDeChainage);
    }

    methodeDeChainage(response) {
        if (response.status == 404) {
            return Promise.reject("C'est pas bon!");
        }
        return Promise.resolve(response.data);
    }

    /*methodeDeRetour(response) { //NO
        return response.data;
    }*/

    getCarById(id) {
        return axios.get(`${url}/${id}`).then(this.methodeDeChainage);
    }

    addCar(car) {
        car.price = +car.price;
        return axios.post(url, car).then(this.methodeDeChainage);
    }

    updateCar(car) {
        return axios.put(`${url}/${car.id}`, car);
    }

    deleteCar(id) {
        return axios.delete(`${url}/${id}`);
    }



}