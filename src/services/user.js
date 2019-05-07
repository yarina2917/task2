import axios from 'axios';

export const loginUser = (data) => {
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'X-Redmine-API-Key': '2fda745bb4cdd835fdf41ec1fab82a13ddc1a54c'
            // "Authorization": btoa(data.username + ":" + data.password)
        }
    };
    return axios.post('https://redmine.ekreative.com/login', data, axiosConfig)
};