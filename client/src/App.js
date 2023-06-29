import "./styles/app.css";
import {useEffect, useState} from "react";
import Api from "./api/Api";
import {BrowserRouter} from "react-router-dom";
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
    const getSystemLng = () => {
        const navigatorLng = navigator.language.substring(0, 2).toLowerCase();
        if(!languages.hasOwnProperty(navigatorLng)) {
            return "en";
        }
        return navigatorLng;
    }
    const defaultLng = localStorage.getItem("lang") || getSystemLng() || "en";

    const [selectedLng, setSelectedLng] = useState(defaultLng);
    const [localizations, setLocalizations] = useState();
    const [isLocalizationsLoading, setIsLocalizationsLoading] = useState(true);

    const onLanguageChanged = (lng) => {
        setSelectedLng(lng);
        localStorage.setItem("lang", lng);
        console.log(lng, selectedLng);
        fetchLocalizations();
    }

    async function fetchLocalizations() {
        setLocalizations(await Api.get(Api.URL_LOCALIZATION + selectedLng));
        setIsLocalizationsLoading(false);
    }

    useEffect(() => {
        onLanguageChanged(defaultLng);
    }, []);

    return (
        <>
            {isLocalizationsLoading
                ? <Preloader/>
                : <LngContext.Provider value={{
                    selectedLng,
                    languages,
                    localizations,
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
            }
        </>
    );
}

export default App;
