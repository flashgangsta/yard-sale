import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "../page_sections/header";
import Router from "../Router";
import Footer from "../page_sections/footer";

const LoadedApp = () => {
    console.log("Loaded App")
    return (
        <BrowserRouter>
            <Header/>
            <main>
                <Router/>
            </main>
            <Footer/>
        </BrowserRouter>
    );
};

export default LoadedApp;