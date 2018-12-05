import React from "react";
import "./SelectWithDatalist.css";

const SelectWithDatalist = ({ placeholder, datalist, onChange }) => {
    return (
        <div className="input-container">
            <select
                type="text"
                placeholder={placeholder}
                className="input-with-datalist"
                onChange={onChange}
            >
                {datalist.map((element, index) => (
                    <option key={index}>{element}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectWithDatalist;
