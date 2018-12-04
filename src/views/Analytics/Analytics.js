import React from "react";
import { Bar } from "ant-design-pro/lib/Charts";
import "./Analytics.css";

const salesData = [];
for (let i = 0; i < 23; i += 1) {
    salesData.push({
        x: `${i + 1}A`,
        y: Math.floor(Math.random() * 1000) + 200
    });
}

const Analytics = () => {
    return (
        <main className="analytics">
            <Bar height={200} title="Humedad" data={salesData} />
        </main>
    );
};

export default Analytics;
