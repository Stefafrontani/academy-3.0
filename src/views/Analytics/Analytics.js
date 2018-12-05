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
    const dataset = [];
    for (let i = 0; i < 23; i += 1) {
        dataset.push({
            x: `${i + 1}A`,
            y: Math.floor(Math.random() * 1000) + 200
        });
    }
    return (
        <main className="analytics">
            <InputWithDatalist datalist={datalist} placeholder="Property..." />
            <GraphCard dataset={dataset} />
        </main>
    );
};

export default Analytics;
