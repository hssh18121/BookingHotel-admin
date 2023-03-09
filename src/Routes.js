import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Tables } from "./pages/Tables";
import { Hero404 } from "./pages/Hero404";
import { Profile } from "./pages/Profile";
import { Hotels } from "./pages/Hotels";
import { Rooms } from "./pages/Rooms";
import Users from "./pages/Users";
import Bookings from "./pages/Bookings";

const Routes = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Route exact path="/" render={() => <Dashboard />} />
        <Route path="/tables" component={Tables} />
        <Route path="/hero404" component={Hero404} />
        <Route path="/profile" component={Profile} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/users" component={Users} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/bookings" component={Bookings} />
      </BrowserRouter>
    </Fragment>
  );
};

export default Routes;
