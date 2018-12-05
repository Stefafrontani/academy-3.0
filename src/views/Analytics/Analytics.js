import React from "react";
import GraphCard from "../../components/GraphCard/GraphCard.js";
import { connect } from "react-redux";
import "./Analytics.css";
import SelectWithDatalist from "../../components/SelectWithDatalist/SelectWithDatalist.js";

const datalist = [
    "Humedad",
    "Visibilidad",
    "Sensación Térmica",
    "Temperatura",
    "Presión"
];

const Analytics = ({ provinces }) => {
    const dataset = [];
    const property = "humidity";
    for (let province of provinces) {
        dataset.push({
            x: province.province.slice(0, 10),
            y: province[property]
        });
    }
    return (
        <main className="analytics">
            <SelectWithDatalist datalist={datalist} placeholder="Property..." />
            <GraphCard dataset={dataset} title={property} />
        </main>
    );
};

function mapStateToProps(state) {
    return {
        provinces: state.provinces.provinces
    };
}

export default connect(mapStateToProps)(Analytics);
