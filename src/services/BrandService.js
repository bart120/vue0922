import axios from 'axios';

const url = 'https://formation.inow.fr/demo/api/v1/brands';

export default class {
    getBrands() {
        return axios.get(url).then(resp => resp.data);
    }
}