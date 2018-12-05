import React from "react";
import "./SelectWithDatalist.css";

const SelectWithDatalist = ({ placeholder, datalist }) => {
    return (
        <div className="input-container">
            <select
                type="text"
                id="input-location"
                placeholder={placeholder}
                className="input-with-datalist"
            >
                {datalist.map((element, index) => (
                    <option key={index}>{element}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectWithDatalist;
