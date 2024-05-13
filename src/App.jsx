// App.js

import React from "react";
import { Routes } from "./routes";

const App = () => {
  const isAdmin = true; // Xác định xem người dùng có phải là admin hay không

  return <Routes isAuthorized={true} />;
};

export default App;
