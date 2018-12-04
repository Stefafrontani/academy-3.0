import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <Link to="/" className="title">
                SMT
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Analytics">Analytics</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
