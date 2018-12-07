import React from "react";
import { Bar } from "ant-design-pro/lib/Charts";
import "./GraphCard.css";
import { Loader } from "../../commons/components";
import { propertyMapToDescription } from "../../commons/functions";

const GraphCard = ({ dataset, title }) => {
    return dataset.length === 0 ? (
        <div className="container">
            <Loader />
        </div>
    ) : (
        <div className="graphCard">
            <h1>{title}</h1>
            <Bar height={300} data={dataset} />
            <p className="graphCard__description">
                {propertyMapToDescription(title)}
            </p>
        </div>
    );
};

export default GraphCard;
