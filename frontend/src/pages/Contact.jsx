import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import axios from "axios";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AskQuestion from "../components/AskQuestion";

function Contact() {
    const [contactData, setContactData] = useState([]);
    const [locations, setLocations] = useState([]);


    useEffect(() => {
        const fetchContactInfo = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:5000/api/user/user_contact_info"
                );
                setContactData(res.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchContactInfo();
    }, []);


    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:5000/api/user/get_locations"
                );
                setLocations(res.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchLocations();
    }, []);

    const callNumbers = contactData.filter(
        (item) => item.contact_type === "call"
    );

    const email = contactData.find(
        (item) => item.contact_type === "email"
    );

    return (
        <>
            <Breadcrumb title="Contact" />

            <div className="px-3 xl:px-0">

                <section className="py-8 sm:py-10 md:py-12">
                    <div className="wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

                        <div className="bg-[#F5F7FA] p-6 sm:p-10 md:p-12 relative">
                            <span className="absolute left-0 top-0 h-full w-0.5 bg-blue-600" />

                            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                                Call Us
                            </h3>

                            <p className="text-sm sm:text-md text-gray-700 leading-relaxed">
                                {callNumbers.map((item, index) => (
                                    <span key={item.id}>
                                        <a
                                            href={`tel:${item.value.replace(/[^+\d]/g, "")}`}
                                            className="hover:text-[#F15A40] transition"
                                        >
                                            {item.value}
                                        </a>
                                        {index !== callNumbers.length - 1 && ", "}
                                    </span>
                                ))}
                            </p>
                        </div>

                        <div className="bg-[#F5F7FA] p-6 sm:p-10 md:p-12 relative">
                            <span className="absolute left-0 top-0 h-full w-0.5 bg-blue-600" />

                            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                                Mail Us
                            </h3>

                            <p className="text-sm sm:text-md text-gray-700">
                                <a
                                    href={
                                        email?.value
                                            ? `mailto:${email.value}?subject=${encodeURIComponent("Support Request")}`
                                            : "#"
                                    }
                                    className="flex items-center gap-2 hover:text-[#F15A40] transition"
                                >
                                    {email?.value}
                                </a>
                            </p>
                        </div>

                        <div className="bg-[#F5F7FA] p-6 sm:p-10 md:p-12 relative">
                            <span className="absolute left-0 top-0 h-full w-0.5 bg-blue-600" />

                            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                                Follow Us
                            </h3>

                            <div className="flex items-center gap-4 sm:gap-5 text-[#F15A40] text-sm sm:text-md">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
                                </a>

                                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                                    <FaXTwitter className="cursor-pointer hover:scale-110 transition" />
                                </a>

                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="cursor-pointer hover:scale-110 transition" />
                                </a>

                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn className="cursor-pointer hover:scale-110 transition" />
                                </a>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="py-8 sm:py-10 md:py-12">
                    <h1 className="text-2xl text-center sm:text-3xl md:text-4xl mb-10 md:mb-8 font-bold text-gray-900">
                        Our Locations
                    </h1>

                    <div className="bg-[#F7F7F5]">
                        <div className="wrapper px-2 lg:px-0 py-8 sm:py-10 md:py-12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                            {locations.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white p-6 sm:p-8 md:p-10 relative"
                                >
                                    <h3 className="text-lg sm:text-xl font-semibold mb-3">
                                        {item.heading}
                                    </h3>

                                    <a
                                        href={`tel:${item.phone.replace(/[^+\d]/g, "")}`}
                                        className="text-blue-600 text-sm sm:text-md block mb-5"
                                    >
                                        {item.phone}
                                    </a>

                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
                                        <p className="text-gray-700 text-sm sm:text-md leading-relaxed">
                                            {item.address_line}
                                            <br />
                                            {item.city}, <span className="font-semibold">{item.country}</span>
                                        </p>

                                        <a
                                            href={`https://www.google.com/maps?q=${item.latitude},${item.longitude}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-[#F15A40] text-sm font-semibold tracking-wider whitespace-nowrap"
                                        >
                                            FIND LOCATION →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </section>

                <AskQuestion />

            </div>
        </>
    );
}

export default Contact;