import React from "react";
import { Bar } from "ant-design-pro/lib/Charts";
import "./GraphCard.css";

const salesData = [];
for (let i = 0; i < 23; i += 1) {
    salesData.push({
        x: `${i + 1}A`,
        y: Math.floor(Math.random() * 1000) + 200
    });
}

const GraphCard = () => {
    return (
        <div className="graphCard">
            <h1>Humedad</h1>
            <Bar height={300} data={salesData} />
        </div>
    );
};

export default GraphCard;
