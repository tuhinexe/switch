import { BACKEND_URL } from "./constants";
import axios_ from "axios";

const axios = axios_.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
        window.location.href = "/login";
        }
        return Promise.reject(error);
    }
    );

export default axios;