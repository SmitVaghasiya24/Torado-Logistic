import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import GlitchButton from "../components/GlitchButton";

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

    const navLinkClass = ({ isActive }) =>
        `flex items-center gap-1 transition ${isActive ? "text-[#F15A40]" : "text-gray-800 hover:text-[#F15A40]"
        }`;


    return (
        <header
            className={`
        w-full bg-white z-50 shadow-md
        transition-transform duration-300 ease-in-out
        ${showSticky ? "fixed top-0 shadow-md translate-y-0" : "relative translate-y-0"}
      `}
        >
            <div className="wrapper flex items-center justify-between h-20">

                <div className="flex items-center gap-3">
                    <img src="/black-logo.svg" alt="Torado" className="h-12" />
                </div>

                <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium">

                    <NavLink to="/" className={navLinkClass}>
                        Home 
                    </NavLink>

                    <NavLink to="/about" className={navLinkClass}>
                        About Us
                    </NavLink>

                    <NavLink to="/services" className={navLinkClass}>
                        Services <FiChevronDown size={14} />
                    </NavLink>

                    <NavLink to="/pages" className={navLinkClass}>
                        Pages <FiChevronDown size={14} />
                    </NavLink>

                    <NavLink to="/our-blog" className={navLinkClass}>
                        Blog <FiChevronDown size={14} />
                    </NavLink>

                    <NavLink to="/contact" className={navLinkClass}>
                        Contact Us
                    </NavLink>

                </nav>


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
