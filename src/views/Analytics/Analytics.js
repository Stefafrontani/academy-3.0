import React from "react";
import GraphCard from "../../components/GraphCard/GraphCard.js";
import { connect } from "react-redux";
import "./Analytics.css";
import SelectWithDatalist from "../../components/SelectWithDatalist/SelectWithDatalist.js";
import { PROPERTIES } from "../../commons/constants";

function propertyMap(prop) {
    switch (prop) {
        case "Humedad":
            return "humidity";
        case "Visibilidad":
            return "visibility";
        case "Sensación Térmica":
            return "thermalSensation";
        case "Temperatura":
            return "temp";
        case "Presión":
            return "pressure";
        default:
            break;
    }
}

class Analytics extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = { property: "Humedad" };
    }
    handleOnChange(ev) {
        this.setState({ property: ev.target.value });
    }
    render() {
        const dataset = [];
        for (let province of this.props.provinces) {
            dataset.push({
                x: province.province.slice(0, 10),
                y: province[propertyMap(this.state.property)]
            });
        }
        return (
            <main className="analytics">
                <SelectWithDatalist
                    datalist={PROPERTIES}
                    placeholder="Property..."
                    onChange={this.handleOnChange}
                />
                <GraphCard dataset={dataset} title={this.state.property} />
            </main>
        );
    }
}

function mapStateToProps(state) {
    return {
        provinces: state.provinces.provinces
    };
}

export default connect(mapStateToProps)(Analytics);
