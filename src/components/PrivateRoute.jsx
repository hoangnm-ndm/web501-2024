// PrivateRoute.js

import React from "react";
import { Route, useNavigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAdmin, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAdmin ? (
          <AdminLayout>
            <Component {...props} />
          </AdminLayout>
        ) : (
          navigate("/login")
        )
      }
    />
  );
};

export default PrivateRoute;
