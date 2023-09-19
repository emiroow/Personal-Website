import axios from "axios";
import { toast } from 'react-toastify';
export const appAxios = axios.create();

appAxios.interceptors.request.use(
    async config => {
        config.headers = {
            'authorization': !!localStorage.getItem("PrjTk") ? "Bearer " + localStorage.getItem("PrjTk") : "",
            'accept': 'application/json',
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });

appAxios.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        if (err.response.status === 401) {
            toast.error('', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            localStorage.clear()
            // window.location.reload()
        } else {
            toast.error(err.response.data.title, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        return err.response
    }
);

