import "./styles/app.css";
import {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Api from "./api/Api";
import Preloader from "./ui/Preloader";
import Header from "./page_sections/header";
import Router from "./Router";
import Footer from "./page_sections/footer";
import {LngContext} from "./context";

function App() {
    const languages = {
        en: "English",
        ru: "Русский",
        uk: "Українська",
        sr: "Crnogorski"
    };

    const initialLng = localStorage.getItem("lang") || getSystemLng() || "en";

    const [isLoading, setIsLoading] = useState(true);
    const [translations, setTranslations] = useState(null);
    const [selectedLng, setSelectedLng] = useState(initialLng);


    function getSystemLng() {
        const navigatorLng = navigator.language.substring(0, 2).toLowerCase();
        if(!languages.hasOwnProperty(navigatorLng)) {
            return "en";
        }
        return navigatorLng;
    }

    async function fetchTranslates(lng) {
        const json = await Api.get(Api.URL_LOCALIZATION + lng);
        setTranslations(json);
        setSelectedLng(lng);
        if(isLoading) {
            setIsLoading(false);
        }
    }

    function onLanguageChanged(lng) {
        console.log("onLanguageChanged to " + lng);
        fetchTranslates(lng);
    }


    useEffect(() => {
        console.log("useEffect");
        fetchTranslates(initialLng);
        // eslint-disable-next-line
    }, []);

    console.log("App");

    return (
        <>
            {isLoading
                ? <Preloader/>
                : <LngContext.Provider value={{
                    selectedLng,
                    languages,
                    translations,
                    onLanguageChanged
                }}>
                    <BrowserRouter>
                        <Header/>
                        <main>
                            <Router/>
                        </main>
                        <Footer/>
                    </BrowserRouter>
                </LngContext.Provider>
            }</>
    );
}

export default App;
