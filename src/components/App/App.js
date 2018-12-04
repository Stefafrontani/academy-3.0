import React, { Component } from "react";
import Header from "../Header/Header.js";
import Routing from "../../routing.jsx";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <main>
                    <Routing />
                </main>
            </div>
        );
    }
}

export default App;
