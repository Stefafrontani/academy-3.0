import React from "react";
import "./WeatherCards.css";
import WeatherCard from "./WeatherCard/WeatherCard.js";

const day1 = {
    day: "Lunes",
    date: "11-12-18",
    icon: "./assets/images/sunny.svg",
    tempMin: "20 °C",
    tempMax: "24 °C",
    morningDesc:
        "Cielo nublado a parcialmente nublado. Probabilidad de lloviznas aisladas. Vientos leves del sector este.",
    afternoonDesc: "Nubosidad variable. Vientos leves o moderados del noreste."
};

const day2 = {
    day: "Martes",
    date: "12-12-18",
    icon: "./assets/images/cloud.svg",
    tempMin: "12 °C",
    tempMax: "18 °C",
    morningDesc:
        "Cielo nublado a parcialmente nublado. Probabilidad de lloviznas aisladas. Vientos leves del sector este.",
    afternoonDesc: "Nubosidad variable. Vientos leves o moderados del noreste."
};

const day3 = {
    day: "Miércoles",
    date: "13-12-18",
    icon: "./assets/images/drop.svg",
    tempMin: "8 °C",
    tempMax: "12 °C",
    morningDesc:
        "Cielo nublado a parcialmente nublado. Probabilidad de lloviznas aisladas. Vientos leves del sector este.",
    afternoonDesc: "Nubosidad variable. Vientos leves o moderados del noreste."
};

const WeatherCards = () => {
    return (
        <div className="container">
            <WeatherCard {...day1} />
            <WeatherCard {...day2} />
            <WeatherCard {...day3} />
        </div>
    );
};

export default WeatherCards;
