import React from 'react';
import {Link} from "react-router-dom";

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
        </header>
    );
};

export default Header;