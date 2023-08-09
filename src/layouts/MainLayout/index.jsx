import React from "react";
import { Header, Footer } from "../../components";

const MainLayout = ({ children }) => {
  return (
    <div className="h-screen bg-emerald-600">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
