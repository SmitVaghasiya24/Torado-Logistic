import { Outlet } from "react-router-dom";
// import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import Topbar from "../components/Topbar";

function Layout() {

  return (
    <>
      
      <Topbar/>
      <Navbar />

      <div className="">
        <Outlet />
      </div>
      <Footer />
    </> 
  );
}

export default Layout;
