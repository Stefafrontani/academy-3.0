import React from "react";
import InputWithDatalist from "../../components/InputWithDatalist/InputWithDatalist.js";
import WeatherCards from "../../components/WeatherCards/WeatherCards.js";
import "./Home.css";

const datalist = [
    "Buenos Aires",
    "Tucuman",
    "Formosa",
    "La Pampa",
    "Entre Rios"
];

const Home = () => {
    return (
        <main className="home">
            <InputWithDatalist datalist={datalist} placeholder="Location..." />
            <WeatherCards />
        </main>
    );
};

export default Home;
