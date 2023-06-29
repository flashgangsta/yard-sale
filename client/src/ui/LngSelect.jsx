import React, {useContext} from 'react';
import Select from "./Select";
import "./../styles/lng_select.css";
import {LngContext} from "../context";

const LngSelect = () => {

    const {selectedLng, languages, onLanguageChanged} = useContext(LngContext);

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