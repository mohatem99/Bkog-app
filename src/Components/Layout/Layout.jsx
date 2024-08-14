import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
function Layout() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
