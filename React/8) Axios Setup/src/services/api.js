import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err.response?.status === 401) {
//       console.warn("Unauthorized!");
//     }
//     return Promise.reject(err);
//   }
// );

// Simple reusable function
export const apiRequest = async (
  method = "POST",
  url = "users/signup",
  data = {},
  params = {}
) => {
  const res = await api({ method, url, data, params });
  return res;
};
