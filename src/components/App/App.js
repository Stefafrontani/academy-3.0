import React, { Component } from "react";
import Header from "../Header/Header.js";
import Home from "../../views/Home/Home.js";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Home />
            </div>
        );
    }
}

export default App;
