import React from "react";
import Location from "../components/Location/Location.js";
import WeatherCards from "../components/WeatherCards/WeatherCards.js";

const Home = () => {
    return (
        <>
            <Location />
            <WeatherCards />
        </>
    );
};

export default Home;
