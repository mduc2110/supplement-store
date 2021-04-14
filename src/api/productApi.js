import axiosClient from "./axiosClient";

const productApi = {
    getAll() {
        const url = '/api/products';
        return axiosClient.get(url);
    },
    get(id) {
        const url = `api/products/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/api/products';
        return axiosClient.post(url, data, {headers: {'Content-Type': 'multipart/form-data'}});
    },
    update(data) {
        const url = `/api/products/${data._id}`;
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `/api/products/${id}`;
        return axiosClient.patch(url);
    }
};
export default productApi;