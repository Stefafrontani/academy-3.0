import React from "react";
import { Link, NavLink } from "react-router-dom";
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
                        <NavLink activeClassName="selected" exact to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeClassName="selected"
                            exact
                            to="/analytics"
                        >
                            Analytics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
