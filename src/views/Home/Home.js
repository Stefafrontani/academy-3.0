import React from "react";
import InputWithDatalist from "../../components/InputWithDatalist/InputWithDatalist.js";
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

const toast = {
    show: true,
    message: "Fuertes tormentas al Sur de la Capital Federal",
    icon: "./assets/images/warning.svg"
};

const Home = () => {
    return (
        <main className="home">
            <InputWithDatalist datalist={datalist} placeholder="Location..." />
            <WeatherCards />
            <Toast {...toast} />
        </main>
    );
};

export default Home;
