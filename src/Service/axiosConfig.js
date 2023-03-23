import axios from "axios";
import { toast } from 'react-toastify';

export const appAxios = axios.create();

appAxios.interceptors.request.use(
    async config => {
        config.headers = {
            'authorization': !!localStorage.getItem("Token") ? "Bearer " + localStorage.getItem("Token") : "",
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
            toast.error('problm !!!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else if (err) {
            toast.error('Problem var, yenidən cəhd edin !', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            toast.error('Problem var, yenidən cəhd edin !', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        return err.response
    }
);

