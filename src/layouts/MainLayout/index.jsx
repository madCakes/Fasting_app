import React from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "../../components";

const MainLayout = () => {
  return (
    <div className="h-screen bg-emerald-600 relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
