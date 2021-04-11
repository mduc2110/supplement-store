import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:3333/api',
    headers: {
        "content-type": "application/json",
    },
});


axiosClient.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }

        return response;
    },
    (error) => {
        // Handle errors
        if (error?.response?.status === 401) {
            console.log("Unauthorized")
            const token = localStorage.getItem('token')
            if(token){
                const { exp } = jwt.decode(token);
                if(Date.now() - exp < 0){
                    console.log('remove token')
                    localStorage.removeItem("token");
                    window.location = "/login";
                    alert("Access denied... Please login again!")
                    return
                }
                window.location = "/"
                alert("Access denied");
            }
        }
        throw error;
    }
);

export default axiosClient;