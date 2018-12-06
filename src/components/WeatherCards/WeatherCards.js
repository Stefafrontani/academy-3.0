import React from "react";
import "./WeatherCards.css";
import WeatherCard from "./WeatherCard/WeatherCard.js";
import { Loader } from '../../commons/components'
import { connect } from "react-redux";

const WeatherCards = ({ weatherCards, isFetching, handleError }) => {
  return (isFetching)
    ? (
      <div className="container">
        <Loader />
        <h1> Loading... </h1>
      </div>
    )
    : ( handleError.status ? ( 
        <div className="container">
          <h1 style={{color: 'red', fontWeight: '900'}}> {handleError.message} </h1>
        </div>
        ) :
        <div className="container">
            <WeatherCard {...weatherCards[0]} />
            <WeatherCard {...weatherCards[1]} />
            <WeatherCard {...weatherCards[2]} />
        </div>
    );
};

function mapStateToProps(state) {
    return {
      isFetching: state.weatherCards.isFetching,
      handleError: state.weatherCards.handleError,
      weatherCards: state.weatherCards.weatherCards
    };
}

export default connect(mapStateToProps)(WeatherCards);
