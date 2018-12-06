import React, { Component } from "react";
import { getAlerts } from '../../redux/actions'
import { withRouter } from 'react-router-dom';
import { connect } from'react-redux';
import Header from "../Header/Header.js";
import Routing from "../../routing.jsx";
import "./App.css";

class App extends Component {

  componentWillMount() {
    this.props.getAlerts();
    setInterval(()=>this.props.getAlerts(),300000);
  }

  render() {
      return (
          <div className="App">
              <Header />
              <Routing />
          </div>
      );
  }
}

const mapDispatchToProps = {
  getAlerts
}

export default withRouter(connect(null, mapDispatchToProps)(App));
