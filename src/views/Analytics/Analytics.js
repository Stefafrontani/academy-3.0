import React from "react";
import GraphCard from "../../components/GraphCard/GraphCard.js";
import { connect } from "react-redux";
import "./Analytics.css";
import SelectWithDatalist from "../../components/SelectWithDatalist/SelectWithDatalist.js";
import { PROPERTIES } from "../../commons/constants";
import { propertyMap } from "../../commons/functions";
import { getProvinces } from "../../redux/actions/";

class Analytics extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = { property: "Humedad" };
    }
    handleOnChange(ev) {
        this.setState({ property: ev.target.value });
    }

    componentWillMount() {
        this.props.getProvinces();
    }

    render() {
        const { provinces } = this.props;
        const { property } = this.state;
        const dataset = [];
        for (let province of provinces) {
            dataset.push({
                x: province.province.slice(0, 10),
                y: province[propertyMap(property)]
            });
        }
        return (
            <main className="analytics">
                <SelectWithDatalist
                    datalist={PROPERTIES}
                    placeholder="Property..."
                    onChange={this.handleOnChange}
                />
                <GraphCard dataset={dataset} title={property} />
            </main>
        );
    }
}

const mapDispatchToProps = {
    getProvinces
};
function mapStateToProps(state) {
    return {
        provinces: state.provinces.provinces
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Analytics);
