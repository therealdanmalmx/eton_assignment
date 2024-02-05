import axios from 'axios';

const dataFetch = axios.create({
    baseURL: 'https://staging-api.etonshirts.com/V1/Retail/Catalog/Categor'
})

export default dataFetch;