import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <ScrollRestoration />
        </div>
    )
}

export default Layout