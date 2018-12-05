import React from "react";
import GraphCard from "../../components/GraphCard/GraphCard.js";
import InputWithDatalist from "../../components/InputWithDatalist/InputWithDatalist.js";
import { connect } from "react-redux";
import "./Analytics.css";

const datalist = [
    "Humedad",
    "Visibilidad",
    "Sensación Térmica",
    "Temperatura Promedio",
    "Temperatura Máxima",
    "Temperatura Mínima"
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
            <InputWithDatalist datalist={datalist} placeholder="Property..." />
            <GraphCard dataset={dataset} />
        </main>
    );
};

function mapStateToProps(state) {
    return {
        provinces: state.provinces.provinces
    };
}

export default connect(mapStateToProps)(Analytics);
