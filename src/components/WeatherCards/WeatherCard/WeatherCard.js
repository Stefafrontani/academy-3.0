import React from "react";
import "./WeatherCard.css";

const WeatherCard = () => {
    return (
        <article className="opened">
            Lunes <span className="hidden date">11-12-18</span>
            <img
                height="100"
                width="100"
                src="./assets/images/sunny.svg"
                alt="Sun Weather"
            />
            <div className="temperature">
                <span className="min">20 °C</span>
                <span className="max">24 °C</span>
            </div>
            <span className="hidden">Mañana</span>
            <span className="hidden description">
                Cielo nublado a parcialmente nublado. Probabilidad de lloviznas
                aisladas. Vientos leves del sector este.
            </span>
            <span className="hidden">Tarde</span>
            <span className="hidden description">
                Nubosidad variable. Vientos leves o moderados del noreste.
            </span>
        </article>
    );
};

export default WeatherCard;
