import React, {useContext} from 'react';
import {LngContext} from "../context";

const PageAbout = () => {
    const {translations} = useContext(LngContext);
    return (
        <div id="pageAbout" className="page">
            <h1>{translations.about}</h1>
        </div>
    );
};

export default PageAbout;