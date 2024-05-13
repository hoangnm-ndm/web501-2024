// App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const isAdmin = true; // Xác định xem người dùng có phải là admin hay không

  return (
    <Router>
      <Switch>
        <LayoutClient path="/" exact component={HomePage} />
        <PrivateRoute path="/admin" component={AdminPage} isAdmin={isAdmin} />
      </Switch>
    </Router>
  );
};

export default App;
