import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Tables } from "./pages/Tables";
import { Hero404 } from "./pages/Hero404";
import { Profile } from "./pages/Profile";
import { Hotels } from "./pages/Hotels";
import { Rooms } from "./pages/Rooms";

const Routes = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Route exact path="/" render={() => <Dashboard />} />
        <Route path="/tables" component={Tables} />
        <Route path="/hero404" component={Hero404} />
        <Route path="/profile" component={Profile} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/rooms" component={Rooms} />
      </BrowserRouter>
    </Fragment>
  );
};

export default Routes;
