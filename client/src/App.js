import {BrowserRouter} from "react-router-dom";
import Header from "./page_sections/header";
import Footer from "./page_sections/footer";
import Router from "./Router";
import "./styles/app.css";
import {useEffect, useState} from "react";

function App() {
    const [localizations, setLocalizations] = useState([{}]);
    console.log("App")

    useEffect(() => {
        fetch("/api/localization").then(
            response => response.json()
        ).then(
            data => {
                setLocalizations(data)
            }
        )
    }, []);

    return (
        <BrowserRouter>
            <Header/>
            <main>
                <Router/>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
