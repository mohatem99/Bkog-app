import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
function Layout() {
  return (
    <div className=" ">
      <Navbar />
      <div
        className="max-w-7xl  mx-auto "
        style={{ minHeight: "calc(100vh - 64px)" }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
