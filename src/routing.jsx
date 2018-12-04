import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./views/Home/Home.js";
import Analytics from "./views/Analytics/Analytics.js";
import Error404 from "./views/Error404/Error404.js";

const Routing = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/analytics" exact component={Analytics} />
        <Route path="/" component={Error404} />
    </Switch>
);

export default Routing;
