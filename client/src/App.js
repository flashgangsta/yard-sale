import "./styles/app.css";
import {useEffect, useState} from "react";
import Api from "./api/Api";
import LoadedApp from "./components/LoadedApp";

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
                ? <div>Loading</div>
                : <LoadedApp/>
            }
        </>
    );
}

export default App;
