import React from "react";
import { Outlet } from "react-router";
import NavBar from "../pages/shared/NavBar";
import Footer from "../pages/shared/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <NavBar />
      </div>
      <hr />
      <div className="min-h-screen mb-4 md:mb-8 mt-4 md:mt-8">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
