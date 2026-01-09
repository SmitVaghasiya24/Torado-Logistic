import { useEffect, useState } from "react";
import axios from "axios";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone, FiMail, FiTruck } from "react-icons/fi";

function Topbar() {
    const [contactInfo, setContactInfo] = useState([]);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const fetchContactInfo = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:5000/api/user/user_contact_info"
                );
                setContactInfo(res.data.data);
            } catch (err) {
                console.error("Topbar API error", err);
            }
        };

        fetchContactInfo();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setHidden(window.scrollY > 60);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const email = contactInfo.find(i => i.contact_type === "email");
    const call = contactInfo.find(i => i.contact_type === "call");

    return (
        <div
            className={`
        bg-[#0476FC] text-white
        transition-transform duration-300 ease-in-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
        >
            <div className="wrapper text-[14px] font-medium py-3">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 xl:px-3 gap-4">

                    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
                        <div className="flex gap-4 items-center">
                            <a href="https://www.facebook.com/torado" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com/torado" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter />
                            </a>
                            <a href="https://www.instagram.com/torado" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </div>

                        <span className="hidden md:block h-5 w-px bg-white/40"></span>

                        {call && (
                            <a href={`tel:${call.value}`} className="flex items-center gap-2">
                                <FiPhone />
                                {call.value}
                            </a>
                        )}

                        {email && (
                            <a
                                href={`mailto:${email.value}?subject=Support%20Query`}
                                className="flex items-center gap-2"
                            >
                                <FiMail />
                                {email.value}
                            </a>
                        )}
                    </div>

                    <div className="flex items-center justify-between gap-6">
                        <span className="flex items-center gap-2">
                            <FiTruck />
                            Track Your Shipment
                        </span>

                        <select className="bg-[#FFCC02] text-black px-3 h-8 rounded-sm text-sm font-medium outline-none cursor-pointer">
                            <option>ENG</option>
                            <option>ARB</option>
                            <option>FRS</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Topbar;
