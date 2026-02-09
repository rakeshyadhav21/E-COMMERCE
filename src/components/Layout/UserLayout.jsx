import Footer from "../Common/Footer";
import Header from "../Common/Header"
import { Outlet } from "react-router-dom";
const UserLayout = () => {
    return (
        <div>
            { /* Header */}
            <Header />
            { /* Main Content */}
            <Outlet />
            { /* Footer */}
            <Footer />
        </div>
    )
};

export default UserLayout;