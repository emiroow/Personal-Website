import { createContext } from 'react';

export const DashboardContext = createContext({
    TabsInfo: null,
    SetTabsInfo: () => { },
    TabState: null,
    SetTabState: () => { }
})