import axios from 'axios';

const axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'X-Redmine-API-Key': '2fda745bb4cdd835fdf41ec1fab82a13ddc1a54c',
    }
};

export const getProjects = () => {
    return axios.get('https://redmine.ekreative.com/projects.json', axiosConfig)
};

export const getIssues = (projectId) => {
    return axios.get(`https://redmine.ekreative.com/issues.json?project_id=${projectId}`, axiosConfig)
};

export const logTime = (body) => {
    return axios.post('https://redmine.ekreative.com/time_entries.json', body, axiosConfig)
};