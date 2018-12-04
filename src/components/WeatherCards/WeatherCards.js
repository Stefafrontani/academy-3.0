import React from "react";
import "./WeatherCards.css";
import WeatherCard from "./WeatherCard/WeatherCard.js";

const WeatherCards = () => {
    return (
        <div class="container">
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
        </div>
    );
};

export default WeatherCards;
