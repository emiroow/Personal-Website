import axios from "axios";
const Endpoint = process.env.REACT_APP_BASE_URL

// Home
export const GetPerspnalData = (Lang) => {
    const Url = `${Endpoint}/api/personal/${Lang}`;
    return axios.get(Url);
};
export const GetSetting = () => {
    const Url = `${Endpoint}/api/admin/setting`;
    return axios.get(Url);
};
export const AddContactMessage = (Body) => {
    const Url = `${Endpoint}/api/AddContactMessage`;
    return axios.post(Url, Body)
        .then(function (response) {
            return response
        })
};


// Get Ip
export const GetIp = () => {
    const Url = `https://api.ipify.org?format=json`;
    return axios.get(Url);
};

// Auth
export const AuthLogin = (User, Password) => {
    const Url = `${Endpoint}/api/Auth`;
    let Data = {
        userName: User,
        password: Password,
    }
    return axios.post(Url, Data);
};

// Admin Setting


// Admin Get
export const GetAdminAbout = () => {
    const Url = `${Endpoint}/api/admin/Abouts`;
    return axios.get(Url);
};
export const GetAdminAnalysis = () => {
    const Url = `${Endpoint}/api/admin/Analysis`;
    return axios.get(Url);
};
export const GetAdminEducations = () => {
    const Url = `${Endpoint}/api/admin/Educations`;
    return axios.get(Url);
};


// Admin Edit
export const EditAdminAnalysis = (Data) => {
    const Url = `${Endpoint}/api/admin/edit/EditAnalysis`;
    return axios.post(Url, Data);
};
export const EditAdminEducation = (Data) => {
    const Url = `${Endpoint}/api/admin/edit/EditEducation`;
    return axios.post(Url, Data);
};


// Admin Delete
export const DeleteAdminAnalysis = (Id) => {
    const Url = `${Endpoint}/api/admin/delete/DeleteAnalysis/${Id}`;
    return axios.post(Url);
};
export const DeleteAdminEducation = (Id) => {
    const Url = `${Endpoint}/api/admin/delete/DeleteEducation/${Id}`;
    return axios.post(Url);
};


// Admin Add
export const SetAbout = (UpdateDate) => {
    const Url = `${Endpoint}/api/admin/add/SetAbout`;
    return axios.post(Url, UpdateDate)
};
export const SetAdminAnalysis = (Data) => {
    const Url = `${Endpoint}/api/admin/add/AddAnalysis`;
    return axios.post(Url, Data);
};
export const SetAdminEducation = (Data) => {
    const Url = `${Endpoint}/api/admin/add/AddEducation`;
    return axios.post(Url, Data);
};