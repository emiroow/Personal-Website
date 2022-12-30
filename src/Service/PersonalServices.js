import axios from "axios";
const Endpoint = "https://resume.cryptosiginal.com";

const TOKEN = localStorage.getItem("TK")

export const GetPerspnalData = (Lang) => {
    const Url = `${Endpoint}/api/personal/${Lang}`;
    return axios.get(Url);
};

export const AuthLogin = (User, Password) => {
    const Url = `${Endpoint}/api/Auth`;
    let Data = {
        userName: User,
        password: Password,
    }
    return axios.post(Url, Data);
};

