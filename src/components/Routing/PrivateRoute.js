import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isLogin, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLogin ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
