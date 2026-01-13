import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

function Navitems() {
    const location = useLocation();

    const [isBlogOpen, setIsBlogOpen] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);


    const servicesMenu = [
        {
            label: "Our Services",
            path: "/services",
            isActive: (pathname) => pathname === "/services",
        },
        {
            label: "Service Details",
            path: "/services/details",
            isActive: (pathname) => pathname.startsWith("/services/"),
        },
    ];

    const isServicesActive = servicesMenu.some((item) =>
        item.isActive(location.pathname)
    );


    const pagesMenu = [
        { label: "Our Projects", path: "/projects", match: "/projects" },
        { label: "Project Details", path: "/projects/details", match: "/projects" },
        { label: "FAQ", path: "/faq", match: "/faq" },
        { label: "Testimonials", path: "/testimonials", match: "/testimonials" },
        { label: "Get A Quote", path: "/request-quote", match: "/request-quote" },
        { label: "Tracking Shipment", path: "/tracking-shipment", match: "/tracking-shipment" },
        { label: "Terms & Conditions", path: "/terms-conditions", match: "/terms-conditions" },
        { label: "Privacy Policy", path: "/privacy-policy", match: "/privacy-policy" },
        { label: "404 Error Page", path: "/404", match: "/404" },
    ];

    const isPagesActive = pagesMenu.some((item) =>
        location.pathname.startsWith(item.match)
    );


    const isBlogGridActive = location.pathname === "/our-blog";
    const isBlogDetailsActive = location.pathname.startsWith("/blog/");
    const isBlogActive = isBlogGridActive || isBlogDetailsActive;


    const baseItem =
        "relative flex items-center gap-1 transition cursor-pointer";

    const underline =
        "after:content-[''] after:absolute after:left-0 after:-bottom-[29px] after:h-[2px] after:w-full after:bg-[#F15A40] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100";

    const linkClass = (path) =>
        `${baseItem} ${underline} ${
            location.pathname === path
                ? "text-[#F15A40] after:scale-x-100"
                : "text-gray-800 hover:text-[#F15A40]"
        }`;

    const menuClass = (isActive = false) =>
        `${baseItem} ${underline} ${
            isActive
                ? "text-[#F15A40] after:scale-x-100"
                : "text-gray-800 hover:text-[#F15A40]"
        }`;


    return (
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium">

            <Link to="/" className={linkClass("/")}>Home</Link>
            <Link to="/about" className={linkClass("/about")}>About Us</Link>

            <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
            >
                <button type="button" className={menuClass(isServicesActive)}>
                    Services <FiChevronDown size={14} />
                </button>

                <div
                    className={`
                        absolute left-0 top-full mt-7 w-60
                        bg-white shadow-xl border border-gray-100
                        transition-all duration-300 ease-out
                        ${isServicesOpen
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2"
                        }
                    `}
                >
                    <ul className="text-sm">
                        {servicesMenu.map((item, index) => {
                            const isActive = item.isActive(location.pathname);
                            return (
                                <li
                                    key={item.path}
                                    className={`border-b border-gray-200 ${
                                        index === servicesMenu.length - 1 ? "border-b-0" : ""
                                    }`}
                                >
                                    <Link
                                        to={item.path}
                                        onClick={() => setIsServicesOpen(false)}
                                        className={`block px-6 py-3 ${
                                            isActive
                                                ? "bg-black text-white hover:bg-black"
                                                : "hover:bg-black hover:text-white"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <div
                className="relative"
                onMouseEnter={() => setIsPagesOpen(true)}
                onMouseLeave={() => setIsPagesOpen(false)}
            >
                <button type="button" className={menuClass(isPagesActive)}>
                    Pages <FiChevronDown size={14} />
                </button>

                <div
                    className={`
                        absolute left-0 top-full mt-7 w-72
                        bg-white shadow-xl border border-gray-100
                        transition-all duration-300 ease-out
                        ${isPagesOpen
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2"
                        }
                    `}
                >
                    <ul className="text-sm">
                        {pagesMenu.map((item, index) => {
                            const isActive = location.pathname.startsWith(item.match);
                            return (
                                <li
                                    key={item.path}
                                    className={`border-b border-gray-200 ${
                                        index === pagesMenu.length - 1 ? "border-b-0" : ""
                                    }`}
                                >
                                    <Link
                                        to={item.path}
                                        onClick={() => setIsPagesOpen(false)}
                                        className={`block px-6 py-3 ${
                                            isActive
                                                ? "bg-black text-white hover:bg-black"
                                                : "hover:bg-black hover:text-white"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <div
                className="relative"
                onMouseEnter={() => setIsBlogOpen(true)}
                onMouseLeave={() => setIsBlogOpen(false)}
            >
                <button type="button" className={menuClass(isBlogActive)}>
                    Blog <FiChevronDown size={14} />
                </button>

                <div
                    className={`
                        absolute left-0 top-full mt-7 w-60
                        bg-white shadow-xl border border-gray-100
                        transition-all duration-300 ease-out
                        ${isBlogOpen
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2"
                        }
                    `}
                >
                    <ul className="text-sm">
                        {[
                            { label: "Blog Grid", path: "/our-blog", active: isBlogGridActive },
                            {
                                label: "Blog Details",
                                path: "/blog/demystifying-robotic-process-automation-in-sap-btp",
                                active: isBlogDetailsActive,
                            },
                        ].map((item, index, arr) => (
                            <li
                                key={item.path}
                                className={`border-b border-gray-200 ${
                                    index === arr.length - 1 ? "border-b-0" : ""
                                }`}
                            >
                                <Link
                                    to={item.path}
                                    onClick={() => setIsBlogOpen(false)}
                                    className={`block px-6 py-3 ${
                                        item.active
                                            ? "bg-black text-white hover:bg-black"
                                            : "hover:bg-black hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <Link to="/contact" className={linkClass("/contact")}>
                Contact Us
            </Link>
        </nav>
    );
}

export default Navitems;
