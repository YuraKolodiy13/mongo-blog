import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Discover from "../pages/Discover/Discover";
import Add from "../pages/Add/Add";
import {useSelector} from "react-redux";
import People from "../pages/People/People";
import Profile from "../pages/Profile/Profile";

const Routes = () => {

  const userId = useSelector(state => state.auth.userId);

  const PublicRoute = ({ auth, component: Component, render, ...rest }) => {
    if (userId) {
      return <Redirect to='/home' />;
    }
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  };

  const PrivateRoute = ({ auth, component: Component, render, ...rest }) => {
    if (!userId) {
      return <Redirect to='/login' />;
    }
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  };

  return (
    <Switch>
      <PublicRoute path='/login' component={Login}/>
      <PublicRoute path='/register' component={Register}/>
      <PrivateRoute path='/discover' component={Discover}/>
      <PrivateRoute path='/people' component={People}/>
      <PrivateRoute path='/add' component={Add}/>
      <PrivateRoute path='/profile/:id' component={Profile}/>
    </Switch>
  )
};

export default Routes;