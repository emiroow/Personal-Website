import { createContext } from 'react';

export const PreloaderContext = createContext({
    Loading: null,
    SetLoading: () => { },
    authorizing: null,
    Setauthorizing: () => { }
})