import axios from 'axios';

const axiosConfig = {
    baseURL: 'https://redmine.ekreative.com/',
    headers: {
        'Content-Type': 'application/json',
        'X-Redmine-API-Key': '2fda745bb4cdd835fdf41ec1fab82a13ddc1a54c',
    }
};

export const getProjects = () => {
    return axios.get('projects.json', axiosConfig)
};

export const getIssues = (projectId) => {
    return axios.get(`issues.json?project_id=${projectId}`, axiosConfig)
};

export const logTime = (body, projectId) => {
    return axios.post(`time_entries.json?project_id=${projectId}`, body, axiosConfig)
};