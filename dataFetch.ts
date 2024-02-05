import axios from 'axios';

const dataFetch = axios.create({
    baseURL: 'https://staging-api.etonshirts.com/V1/Retail/Catalog/Category?MarketId=9&PriceListId=19&LanguageCode=en&Skip=0&Where.IncludeFacets=false&Take=10&CategorySlug=all'
})