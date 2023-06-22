import React from 'react';
import {Link} from "react-router-dom";
import "./../styles/header.css";
import LngSelect from "../ui/LngSelect";

const Header = () => {
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