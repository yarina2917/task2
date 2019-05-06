import axios from 'axios';

const axiosConfig = {
    baseURL: 'https://redmine.ekreative.com/',
    headers: {
        'Content-Type': 'application/json',
    }
};

export const loginUser = (data) => {
    return axios.post('login', data, axiosConfig)
};