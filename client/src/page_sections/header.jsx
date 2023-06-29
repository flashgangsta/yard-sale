import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import "./../styles/header.css";
import LngSelect from "../ui/LngSelect";
import {LngContext} from "../context";

const Header = () => {
    const {translations} = useContext(LngContext);

    console.log("Header:", translations);

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">{translations.products}</Link>
                    </li>

                    <li>
                        <Link to="/about">{translations.about}</Link>
                    </li>

                    <li>
                        <Link to="/contacts">{translations.contacts}</Link>
                    </li>
                </ul>
            </nav>

            <LngSelect />
        </header>
    );
};

export default Header;