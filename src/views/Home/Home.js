import React from "react";
import InputWithDatalist from "../../components/InputWithDatalist/InputWithDatalist.js";
import WeatherCards from "../../components/WeatherCards/WeatherCards.js";
import "./Home.css";

const Home = () => {
    return (
        <main className="home">
            <InputWithDatalist />
            <WeatherCards />
        </main>
    );
};

export default Home;
