import axios from 'axios';

export const fetchPrice = () => {
    return axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => response.data.bpi.USD.rate_float)
        .catch(error => {
            console.error('Error fetching Bitcoin price:', error);
            throw error;
        });
 };