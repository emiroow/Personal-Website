import { createContext } from 'react';

export const PreloaderContext = createContext({
    Loading: false,
    SetLoading: () => { }
})