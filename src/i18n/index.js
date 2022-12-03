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

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
        resources,
        lng: "fa",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;