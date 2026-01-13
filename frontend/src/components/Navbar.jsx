import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GlitchButton from "../components/GlitchButton";
import Navitems from "./Navitems";

function Navbar() {
    const [showSticky, setShowSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setShowSticky(true);
            } else {
                setShowSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);




    return (
        <header
            className={`w-full bg-white z-50 transition-transform duration-300 ease-in-out
        ${showSticky
                    ? "fixed top-0 translate-y-0 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                    : "relative translate-y-0 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
                }`
            }
        >

            <div className="wrapper flex items-center justify-between h-20">

                <div className="flex items-center gap-3">
                    <img src="/black-logo.svg" alt="Torado" className="h-12" />
                </div>

                <Navitems />

                <div className="hidden lg:block">
                    <NavLink to="/request-quote">
                        <GlitchButton className="px-6 py-4 text-base bg-[#FB695E] text-white hover:bg-[#3CB879] shadow-[0_4px_15px_rgba(251,105,94,0.35)] transition-colors duration-300 ease-in-out">
                            Request A Quote
                        </GlitchButton>
                    </NavLink>
                </div>

            </div>
        </header>
    );
}

export default Navbar;
