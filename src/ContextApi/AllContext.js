import { createContext } from 'react';

export const AllContext = createContext({
    Loading: null,
    SetLoading: () => { },
    authorizing: null,
    Setauthorizing: () => { },
    GetPersonal: null,
    SetPersonal: () => { },
    LoadingSecond: null,
    SetLoadingSecond: () => { },
    DashboardLoader: null,
    SetDashboardLoader: () => { },
})