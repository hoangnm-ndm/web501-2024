import React from "react";

const LayoutAdmin = ({ children }) => {
  return (
    <div>
      <header>Admin Header</header>
      <div className="admin-sidebar">Admin Sidebar</div>
      <main>{children}</main>
      <footer>Admin Footer</footer>
    </div>
  );
};

export default LayoutAdmin;
