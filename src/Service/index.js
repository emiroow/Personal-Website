import axios from "axios";
import { appAxios } from "./axiosConfig";
const Endpoint = process.env.REACT_APP_BASE_URL;
const FileBaseEndpoint = process.env.REACT_APP_FILE_BASE_URL;

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
  return axios.post(Url, Body).then(function (response) {
    return response;
  });
};

// Get Ip
export const GetIp = () => {
  const Url = `https://api.ipify.org?format=json`;
  return axios.get(Url);
};

// Auth
export const AuthLogin = (Data) => {
  const Url = `${Endpoint}/api/Auth`;
  return appAxios["post"](Url, Data);
};

// Admin Setting
export const GetAdminSetting = () => {
  const Url = `${Endpoint}/api/admin/setting`;
  return appAxios["get"](Url);
};
export const SetAdminSetting = (Data) => {
  const Url = `${Endpoint}/api/admin/setting/Setsetting`;
  return appAxios["post"](Url, Data);
};

// Admin Counters
export const GetAdminStatistics = () => {
  const Url = `${Endpoint}/api/admin/Statistics`;
  return appAxios["get"](Url);
};

// Admin Get
export const GetAdminAbout = () => {
  const Url = `${Endpoint}/api/admin/Abouts`;
  return appAxios["get"](Url);
};
export const GetAdminAnalysis = () => {
  const Url = `${Endpoint}/api/admin/Analysis`;
  return appAxios["get"](Url);
};
export const GetAdminEducations = () => {
  const Url = `${Endpoint}/api/admin/Educations`;
  return appAxios["get"](Url);
};
export const GetAdminHistories = () => {
  const Url = `${Endpoint}/api/admin/Histories`;
  return appAxios["get"](Url);
};
export const GetAdminService = () => {
  const Url = `${Endpoint}/api/admin/services`;
  return appAxios["get"](Url);
};
export const getAdminSocials = () => {
  const Url = `${Endpoint}/api/admin/Socials `;
  return appAxios["get"](Url);
};
export const getAdminSkills = () => {
  const Url = `${Endpoint}/api/admin/Skills `;
  return appAxios["get"](Url);
};
export const getAdminCircleSkills = () => {
  const Url = `${Endpoint}/api/admin/CircleSkills `;
  return appAxios["get"](Url);
};
export const getAdminContactUsMessages = (data) => {
  if (data.page && data.lang) {
    const Url = `${Endpoint}/api/admin/ContactUsMessages?page=${data.page}&countOfPage=${data.countOfPage}&lang=${data.lang}`;
    return appAxios["get"](Url);
  } else {
    const Url = `${Endpoint}/api/admin/ContactUsMessages?countOfPage=${data.countOfPage}`;
    return appAxios["get"](Url);
  }
};
export const getAdminComments = () => {
  const Url = `${Endpoint}/api/admin/comments `;
  return appAxios["get"](Url);
};
export const getAdminCertificate = () => {
  const Url = `${Endpoint}/api/admin/Certificates `;
  return appAxios["get"](Url);
};
export const getAdminPortfolios = () => {
  const Url = `${Endpoint}/api/admin/portfolios `;
  return appAxios["get"](Url);
};
export const getAdminPortfoliosCatagories = () => {
  const Url = `${Endpoint}/api/admin/portfolioCatagories `;
  return appAxios["get"](Url);
};
export const getAdminUploads = () => {
  const Url = `${FileBaseEndpoint}/api/File/GetAllLink`;
  return appAxios["get"](Url);
};

// Admin Edit
export const EditAdminAnalysis = (Data) => {
  const Url = `${Endpoint}/api/admin/edit/EditAnalysis`;
  return appAxios["put"](Url, Data);
};
export const EditAdminEducation = (Data) => {
  const Url = `${Endpoint}/api/admin/edit/EditEducation`;
  return appAxios["put"](Url, Data);
};
export const EditAdminHistory = (Data) => {
  const Url = `${Endpoint}/api/admin/edit/EditHistory`;
  return appAxios["put"](Url, Data);
};
export const EditAdminService = (Data) => {
  const Url = `${Endpoint}/api/admin/edit/editservice`;
  return appAxios["put"](Url, Data);
};
export const EditAdminComment = (Data) => {
  const Url = `${Endpoint}/api/admin/edit/editcomment`;
  return appAxios["put"](Url, Data);
};
export const EditAdminCertificate = (Data) => {
  const Url = `${Endpoint}/api/admin/edit/editCertificate`;
  return appAxios["put"](Url, Data);
};
export const EditAdminPortfolio = (Data) => {
  const Url = `${Endpoint}/api/admin/edit/editportfolio`;
  return appAxios["put"](Url, Data);
};

// Admin Delete
export const DeleteAdminAnalysis = (Id) => {
  const Url = `${Endpoint}/api/admin/delete/DeleteAnalysis/${Id}`;
  return appAxios["delete"](Url);
};
export const DeleteAdminEducation = (Id) => {
  const Url = `${Endpoint}/api/admin/delete/DeleteEducation/${Id}`;
  return appAxios["delete"](Url);
};
export const DeleteAdminHistory = (Id) => {
  const Url = `${Endpoint}/api/admin/delete/DeleteHistory/${Id}`;
  return appAxios["delete"](Url);
};
export const DeleteAdminService = (Id) => {
  const Url = `${Endpoint}/api/admin/delete/deleteService/${Id}`;
  return appAxios["delete"](Url);
};
export const DeleteAdminSocial = (Id) => {
  const Url = `${Endpoint}/api/admin/delete/deleteSocial/${Id}`;
  return appAxios["delete"](Url);
};
export const DeleteAdminSkill = (Id) => {
  const Url = `${Endpoint}/api/admin/delete/deleteSkill/${Id}`;
  return appAxios["delete"](Url);
};
export const DeleteAdminCircleSkill = (Id) => {
  const Url = `${Endpoint}/api/admin/delete/deleteCircleSkill/${Id}`;
  return appAxios["delete"](Url);
};
export const DeleteAdminDeleteComment = (Id) => {
  const Url = `${Endpoint}/api/admin/delete/deletecomment/${Id}`;
  return appAxios["delete"](Url);
};
export const DeleteAdminCertificate = (Id) => {
  const Url = `${Endpoint}/api/admin/delete/deleteCertificate/${Id}`;
  return appAxios["delete"](Url);
};
export const DeleteAdminCatagory = (Id) => {
  const Url = `${Endpoint}/api/admin/delete/DeletePortfolioCatagory/${Id}`;
  return appAxios["delete"](Url);
};
export const DeleteAdminPortfolio = (Id) => {
  const Url = `${Endpoint}/api/admin/delete/DeletePortfolio/${Id}`;
  return appAxios["delete"](Url);
};
export const DeleteAdminFile = (Id) => {
  const Url = `${Endpoint}/api/File/DeleteLink/${Id}`;
  return appAxios["delete"](Url);
};

// Admin Add
export const SetAbout = (Data) => {
  const Url = `${Endpoint}/api/admin/add/SetAbout`;
  return appAxios["post"](Url, Data);
};
export const SetAdminAnalysis = (Data) => {
  const Url = `${Endpoint}/api/admin/add/AddAnalysis`;
  return appAxios["post"](Url, Data);
};
export const SetAdminEducation = (Data) => {
  const Url = `${Endpoint}/api/admin/add/AddEducation`;
  return appAxios["post"](Url, Data);
};
export const SetAdminHistories = (Data) => {
  const Url = `${Endpoint}/api/admin/add/AddHistory`;
  return appAxios["post"](Url, Data);
};
export const SetAdminService = (Data) => {
  const Url = `${Endpoint}/api/admin/add/AddService`;
  return appAxios["post"](Url, Data);
};
export const SetAdminSocials = (Data) => {
  const Url = `${Endpoint}/api/admin/add/AddSocial`;
  return appAxios["post"](Url, Data);
};
export const SetAdminSkill = (Data) => {
  const Url = `${Endpoint}/api/admin/add/AddSkill`;
  return appAxios["post"](Url, Data);
};
export const SetAdminCircleSkill = (Data) => {
  const Url = `${Endpoint}/api/admin/add/AddCircleSkill`;
  return appAxios["post"](Url, Data);
};
export const SetAdminAddComment = (Data) => {
  const Url = `${Endpoint}/api/admin/add/addcomment`;
  return appAxios["post"](Url, Data);
};
export const SetAdminAddCertificate = (Data) => {
  const Url = `${Endpoint}/api/admin/add/addCertificate`;
  return appAxios["post"](Url, Data);
};
export const SetAdminPortfoliosCatagories = (Data) => {
  const Url = `${Endpoint}/api/admin/add/addPortfolioCatagory`;
  return appAxios["post"](Url, Data);
};
export const SetAdminPortfolio = (Data) => {
  const Url = `${Endpoint}/api/admin/add/addPortfolio`;
  return appAxios["post"](Url, Data);
};
export const SetAdminUpload = (Data) => {
  const Url = `${Endpoint}/api/File/Upload/${Data.title}`;
  return appAxios["post"](Url, Data.formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
