import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({
    day,
    date,
    icon,
    tempMin,
    tempMax,
    morningDesc,
    afternoonDesc
}) => {
    return (
        <article className="opened">
            {day} <span className="hidden date">{date}</span>
            <img height="100" width="100" src={icon} alt={icon} />
            <div className="temperature">
                <span className="min">{tempMin}</span>
                <span className="max">{tempMax}</span>
            </div>
            <span className="hidden">Mañana</span>
            <span className="hidden description">{morningDesc}</span>
            <span className="hidden">Tarde</span>
            <span className="hidden description">{afternoonDesc}</span>
        </article>
    );
};

export default WeatherCard;
