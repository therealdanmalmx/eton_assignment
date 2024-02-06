import axios from 'axios';

const dataFetch = axios.create({
    baseURL: 'https://staging-api.etonshirts.com'
})

export default dataFetch;