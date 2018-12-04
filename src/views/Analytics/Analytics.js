import React from "react";
import GraphCard from "../../components/GraphCard/GraphCard.js";
import InputWithDatalist from "../../components/InputWithDatalist/InputWithDatalist.js";
import "./Analytics.css";

const datalist = [
    "Humedad",
    "Visibilidad",
    "Sensación Térmica",
    "Temperatura Promedio",
    "Temperatura Máxima",
    "Temperatura Mínima"
];

const Analytics = () => {
    return (
        <main className="analytics">
            <InputWithDatalist datalist={datalist} placeholder="Property..." />
            <GraphCard />
        </main>
    );
};

export default Analytics;
