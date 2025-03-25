import axios, { InternalAxiosRequestConfig, AxiosRequestHeaders, AxiosHeaders } from "axios";
import { useAuthStore } from "../store";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL as string,
});

// 요청 인터셉터
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken) {
        config.headers = new AxiosHeaders({
            ...(config.headers as AxiosRequestHeaders),
            Authorization: `Bearer ${accessToken}`,
        }) as AxiosRequestHeaders;
    }
    return config;
});

// 응답 인터셉터
// axiosInstance.interceptors.response.use(
//     (response: AxiosResponse) => response,
//     async (error) => {
//         const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

//         return Promise.reject(error);
//     },
// );

export default axiosInstance;
