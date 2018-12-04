import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./views/Home.js";
import Analytics from "./views/Analytics.js";

const Routing = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/analytics" exact component={Analytics} />
    </Switch>
);

export default Routing;
