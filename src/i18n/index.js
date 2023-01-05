import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import en from "./en";
import fa from "./fa";

const resources = {
    en: {
        translation: en
    },
    fa: {
        translation: fa
    }
};

const GetLocalStorageLangOrDefualt = () => {
    const LocalstorageLang = localStorage.getItem("i18nextLng")
    const DefaultLang = "fa"
    if (LocalstorageLang) {
        return LocalstorageLang
    } else {
        return DefaultLang
    }
}

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        lng: GetLocalStorageLangOrDefualt(),
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;