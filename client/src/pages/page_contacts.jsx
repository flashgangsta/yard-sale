import React, {useContext} from 'react';
import {LngContext} from "../context";

const PageContacts = () => {

    const {translations} = useContext(LngContext);

    return (
        <div id="pageContacts" className="page">
            <h1>{translations.contacts}</h1>
        </div>
    );
};

export default PageContacts;