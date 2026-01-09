import { Outlet, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
// import Loader from "../components/Topbar";
// import Footer from "./Footer";
import Topbar from "../components/Topbar";

function Layout() {
  // const location = useLocation();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);

  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 600);

  //   return () => clearTimeout(timer);
  // }, [location.pathname]);

  return (
    <>
      {/* {loading && <Loader />} */}
      <Topbar/>
      <Navbar />

      <div className="">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </> 
  );
}

export default Layout;
