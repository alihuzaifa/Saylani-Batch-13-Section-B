import axios from "axios";
import useAppStore from "./store";

const api = axios.create({
    baseURL: "http://localhost:4000/api/",
});

api.interceptors.request.use((config) => {
    const token = useAppStore.getState().token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const apiRequest = async (
    method = "POST",
    url = "users/signup",
    data = {},
    params = {}
) => {
    const res = await api({ method, url, data, params });
    return res;
};