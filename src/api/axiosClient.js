import axios from 'axios';
import { getToken } from '../utils/Common';

const axiosClient = axios.create({
    baseURL: 'https://supplements-soa.herokuapp.com/',
    headers: {
        // "content-type": "application/json",
        'access-token' : getToken()
    },
});


axiosClient.interceptors.request.use(async (config) => {
    return config;
});

axiosClient.interceptors.response.use(
    
);

export default axiosClient;