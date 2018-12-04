import React from "react";
import Location from "../../components/Location/Location.js";
import WeatherCards from "../../components/WeatherCards/WeatherCards.js";
import "./Home.css";

const Home = () => {
    return (
        <main className="home">
            <Location />
            <WeatherCards />
        </main>
    );
};

export default Home;
