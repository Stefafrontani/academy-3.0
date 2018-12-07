import React from "react";
import { Bar } from "ant-design-pro/lib/Charts";
import "./GraphCard.css";
import { Loader } from "../../commons/components";
import { propertyMapToDescription } from "../../commons/functions";
import { connect } from "react-redux";

const GraphCard = ({ dataset, title, isFetching }) => {
    return isFetching ? (
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

function mapStateToProps(state) {
    return {
        isFetching: state.provinces.isFetching
    };
}

export default connect(mapStateToProps)(GraphCard);
