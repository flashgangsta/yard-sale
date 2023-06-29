import "./styles/app.css";
import {useEffect, useState} from "react";
import Api from "./api/Api";

function App() {
    const [translates, setTranslates] = useState();
    async function fetchTranslates() {
        const json = await Api.get(Api.URL_LOCALIZATION + "en");
        setTranslates(json);
        return json;
    }

    useEffect(() => {
        fetchTranslates();
    }, []);

    console.log("Hi!")

    return (
        <>Соси</>
    );
}

export default App;
