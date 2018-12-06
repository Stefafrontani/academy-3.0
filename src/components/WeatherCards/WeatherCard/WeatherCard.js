import React, { Component } from "react";
import "./WeatherCard.css";

class WeatherCard extends Component {
  
  animateOn = (e) => {
    const tempRight = e.currentTarget.getElementsByClassName('temperature-two')[0];
    const tempBottom = e.currentTarget.getElementsByClassName('temperature')[0];
    tempBottom.classList.remove('out');
    tempBottom.classList.add('on');
    tempRight.classList.remove('out-right');
    tempRight.classList.add('on-right');
    e.currentTarget.removeEventListener('mouseenter', function(){});
  }

  animateOut = (e) => {
    const tempRight = e.currentTarget.getElementsByClassName('temperature-two')[0];
    const tempBottom = e.currentTarget.getElementsByClassName('temperature')[0];
    tempBottom.classList.add('out');
    tempBottom.classList.remove('on');
    tempRight.classList.add('out-right');
    tempRight.classList.remove('on-right');
    e.currentTarget.removeEventListener('mouseleave', function(){});
  }

  render() {
    const {
        day,
        date,
        icon,
        tempMin,
        tempMax,
        morningDesc,
        afternoonDesc
    } = this.props
      return (
        <article onMouseEnter={this.animateOn} onMouseLeave={this.animateOut} className="article" id="article">
        <h2 className="day"> {day}</h2>
        
        <p className="date"> {date} </p>
        <div className="img-cont">
          <img
              src={icon} 
              alt={icon}
          />
          <div className="temperature-two" id="temperature-right">
            <span className="min">{tempMin}°C</span>
            <span className="max">{tempMax}°C</span>
          </div>
        </div>
        <div className="temperature" id="temperature-bottom">
          <span className="min">{tempMin}°C</span>
          <span className="max">{tempMax}°C</span>
        </div>
        <div className="description-cont">
          <div className="description-cont-one">
            <p className="description-title description-title-one">Mañana</p>
            <p className="description-text description-text-one">
              {morningDesc}
            </p>
          </div>
          <div className="description-cont-two">
            <p className="description-title description-title-two">Tarde</p>
            <p className="description-text description-text-two">
              {afternoonDesc}
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default WeatherCard;
