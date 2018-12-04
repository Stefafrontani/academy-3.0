import React, { Component } from "react";
import Location from "../Location/Location.js";
import Header from "../Header/Header.js";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Location />
            </div>
        );
    }
}

export default App;
