import React from "react";
import "./Home.css";
import Location from "../../components/Location/Location.js";
import WeatherCards from "../../components/WeatherCards/WeatherCards.js";

const Home = () => {
    return (
        <main>
            <Location />
            <WeatherCards />
        </main>
    );
};

export default Home;
