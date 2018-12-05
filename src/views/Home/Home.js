import React from "react";
import InputWithDatalist from "../../components/InputWithDatalist/index.js";
import WeatherCards from "../../components/WeatherCards/WeatherCards.js";
import Toast from "../../components/Toast/Toast.js";
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
            <Toast />
        </main>
    );
};

export default Home;