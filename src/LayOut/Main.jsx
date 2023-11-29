import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/NavbarPage/Navbar";
import Footer from "../Pages/Shared/FooterPage/Footer";

const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto font-josefinSans my-5">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;