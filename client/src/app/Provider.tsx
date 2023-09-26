"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import {ThemeProvider} from 'next-themes'

interface ProvidersProps {
    children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        
        <ThemeProvider attribute='class' defaultTheme="dark">
        <Provider store={store}>
                {children}
        </Provider>
        </ThemeProvider>

    );
}

export default Providers;