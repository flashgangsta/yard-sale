import React, {useState} from 'react';
import Select from "./Select";
import "./../styles/lng_select.css";

const LngSelect = () => {
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

    const onLanguageChanged = (lng) => {
        setSelectedLng(lng);
        localStorage.setItem("lang", lng);
    }

    const defaultLng = localStorage.getItem("lang") || getSystemLng() || "en";


    const [selectedLng, setSelectedLng] = useState(defaultLng);

    return (
        <div className="lng-select">
            <img className="lng-flag" src={`${process.env.PUBLIC_URL}/images/flags/${selectedLng}.svg`} alt={languages[selectedLng]} />
            <Select id="lng-select"
                    value={selectedLng}
                    onChange={onLanguageChanged}
                    options={Object.keys(languages).map(key => {
                        return {
                            value: key,
                            contents: languages[key]
                        }
                    })}
            />
        </div>
    );
};

export default LngSelect;