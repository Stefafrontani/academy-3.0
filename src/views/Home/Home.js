import React from "react";
import InputWithDatalist from "../../components/InputWithDatalist/index.js";
import WeatherCards from "../../components/WeatherCards/WeatherCards.js";
import Toast from "../../components/Toast/Toast.js";
import { ZONES } from "../../commons/constants/";
import "./Home.css";

const Home = () => {
    return (
        <main className="home">
            <InputWithDatalist datalist={ZONES} placeholder="Location..." />
            <WeatherCards />
            <Toast />
        </main>
    );
};

export default Home;
