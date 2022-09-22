import axios from 'axios';

const url = 'https://formation.inow.fr/demo/api/v1/cars';

export default class {
    getCars() {
        /*console.log('getcars');

        let p = axios.get(url).then(this.methodeDeRetour); //NO

        console.log('fin getcars')
        return p;*/
        return axios.get(url);
    }


    /*methodeDeRetour(response) { //NO
        console.log("resultat", response);
        console.log("fin methodeRetour");
        return response.data;
    }*/
}