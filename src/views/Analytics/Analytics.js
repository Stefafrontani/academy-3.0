import React from "react";
import GraphCard from "../../components/GraphCard/GraphCard.js";
import InputWithDatalist from "../../components/InputWithDatalist/InputWithDatalist.js";
import "./Analytics.css";

const Analytics = () => {
    return (
        <main className="analytics">
            <InputWithDatalist />
            <GraphCard />
        </main>
    );
};

export default Analytics;
