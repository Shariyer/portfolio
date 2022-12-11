/** @format */

import React from "react";
import Header from "../Components/Home/Header/Header";
import Footer from "../Components/Home/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
