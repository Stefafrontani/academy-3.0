import React from "react";
import "./WeatherCards.css";
import WeatherCard from "./WeatherCard/WeatherCard.js";
import { connect } from "react-redux";

const WeatherCards = ({ weatherCards }) => {
    return (
        <div className="container">
            <WeatherCard {...weatherCards[0]} />
            <WeatherCard {...weatherCards[1]} />
            <WeatherCard {...weatherCards[2]} />
        </div>
    );
};

function mapStateToProps(state) {
    return {
        weatherCards: state.weatherCards.weatherCards
    };
}

export default connect(mapStateToProps)(WeatherCards);
