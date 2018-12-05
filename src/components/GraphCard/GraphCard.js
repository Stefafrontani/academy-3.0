import React from "react";
import { Bar } from "ant-design-pro/lib/Charts";
import "./GraphCard.css";

const GraphCard = ({ dataset, title }) => {
    return (
        <div className="graphCard">
            <h1>{title}</h1>
            <Bar height={300} data={dataset} />
        </div>
    );
};

export default GraphCard;
