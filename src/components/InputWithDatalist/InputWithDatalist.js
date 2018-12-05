import React from "react";
import "./InputWithDatalist.css";

const InputWithDatalist = ({ placeholder, datalist, getWeatherCards }) => {

    const handleInput = (e) => {
      const location = e.target.value;
      getWeatherCards(location);
    }
    return (
        <div className="input-container">
            <input
                onChange={handleInput}
                type="text"
                id="input-location"
                list="json-datalist"
                placeholder={placeholder}
                className="input-with-datalist"
            />
            <datalist id="json-datalist">
                {datalist.map((element, index) => (
                    <option key={index}>{element}</option>
                ))}
            </datalist>
        </div>
    );
};

export default InputWithDatalist;
