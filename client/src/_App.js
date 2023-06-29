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
    /*const languages = {
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
    const [isLocalizationsLoading, setIsLocalizationsLoading] = useState(false);

    async function onLanguageChanged(lng){
        console.log("onLanguageChanged");
        setSelectedLng(lng);
        localStorage.setItem("lang", lng);
        console.log(lng, selectedLng);
        //await fetchLocalizations();
    }

    async function fetchLocalizations() {
        console.log("fetchLocalizations");
        const data = await Api.get(Api.URL_LOCALIZATION + selectedLng);
        //setLocalizations(data);
        setIsLocalizationsLoading(false);
        return data;
    }

    useEffect(() => {
        fetchLocalizations();
    }, [fetchLocalizations]);

    console.log("Hi")*/


    const [translates, setTranslates] = useState();
    async function fetchTranslates() {
        const json = await Api.get(Api.URL_LOCALIZATION + "en");
        console.log(json);
        setTranslates(json);
        return json;
    }

    console.log("hi")

    useEffect(() => {
        fetchTranslates();
    }, []);

    return (
        /*<>
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
        </>*/
        <>Соси</>
    );
}

export default App;
