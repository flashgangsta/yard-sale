import "./styles/app.css";
import {useEffect, useState} from "react";
import Api from "./api/Api";
import {BrowserRouter} from "react-router-dom";
import Preloader from "./ui/Preloader";
import Header from "./page_sections/header";
import Router from "./Router";
import Footer from "./page_sections/footer";

function App() {
    const [localizations, setLocalizations] = useState();
    const [isLocalizationsLoading, setIsLocalizationsLoading] = useState(true);

    async function fetchLocalizations() {
        setLocalizations(await Api.get(Api.URL_LOCALIZATION));
        setIsLocalizationsLoading(false);
    }

    useEffect(() => {
        fetchLocalizations();
    }, []);

    return (
        <>
            {isLocalizationsLoading
                ? <Preloader/>
                : <BrowserRouter>
                    <Header/>
                    <main>
                        <Router/>
                    </main>
                    <Footer/>
                </BrowserRouter>
            }
        </>
    );
}

export default App;
