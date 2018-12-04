import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <a href="#Home" class="title">
                SMT
            </a>
            <nav>
                <ul>
                    <li>
                        <a href="#Home">Home</a>
                    </li>
                    <li>
                        <a href="#Analytics">Analytics</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
