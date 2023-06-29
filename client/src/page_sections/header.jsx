import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import "./../styles/header.css";
import LngSelect from "../ui/LngSelect";
import {LngContext} from "../context";

const Header = () => {
    const {localizations} = useContext(LngContext);

    console.log(localizations);

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Main</Link>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>

            <LngSelect />
        </header>
    );
};

export default Header;