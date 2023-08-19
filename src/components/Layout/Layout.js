import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-screen  min-h-screen flex flex-col overflow-x-hidden">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
