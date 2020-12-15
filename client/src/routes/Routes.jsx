import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Discover from "../pages/Discover/Discover";
import Add from "../pages/Add/Add";
import {useSelector} from "react-redux";

const Routes = () => {

  const isLogin = useSelector(state => state.auth.login);

  const PublicRoute = ({ auth, component: Component, render, ...rest }) => {
    if (isLogin) {
      return <Redirect to='/home' />;
    }
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  };

  const PrivateRoute = ({ auth, component: Component, render, ...rest }) => {
    if (!isLogin) {
      return <Redirect to='/login' />;
    }
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  };

  return (
    <Switch>
      <PublicRoute path='/login' component={Login}/>
      <PublicRoute path='/register' component={Register}/>
      <PrivateRoute path='/discover' component={Discover}/>
      <PrivateRoute path='/add' component={Add}/>
    </Switch>
  )
};

export default Routes;