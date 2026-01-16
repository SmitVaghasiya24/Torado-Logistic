import Breadcrumb from "../../components/Breadcrumb"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LetUsKnow from "../../components/LetUsKnow";
import GlitchButton from "../../components/GlitchButton";
import { Link } from "react-router-dom";
import axios from "axios";
function ServiceDetails() {
    const { slug } = useParams();
    const [service, setService] = useState(null);
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/user/get_service/${slug}`)
            .then((res) => {
                if (res.data.success) {
                    setService(res.data.data);
                }
            });
    }, [slug]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/user/get_services")
            .then((res) => {
                if (res.data.success) {
                    setServices(res.data.data);
                }
            });
    }, []);

    if (!service) return null;
    return (
        <div>
            <Breadcrumb title="Service Details" />
            <div className="wrapper px-3 xl:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">

                    {/* right */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#F3F5F6] rounded-xl overflow-hidden">
                            <ul className="divide-y divide-gray-300">
                                {services.map((service) => {
                                    const isActive = service.slug === slug;

                                    return (
                                        <li key={service.id}>
                                            <Link
                                                to={`/services/${service.slug}`}
                                                className={`block px-6 py-4 text-xl transition 
                                                    ${isActive
                                                        ? "font-semibold text-black"
                                                        : "text-gray-600 hover:text-black"
                                                    }`}
                                            >
                                                {service.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <LetUsKnow />
                        </div>
                    </div>

                    {/* left */}
                    <div className="lg:col-span-2">
                        <h1 className="text-3xl font-bold mb-4">
                            {service.title}
                        </h1>
                        <img
                            src={service.banner_image}
                            alt={service.title}
                            className="w-full h-105 object-cover rounded-md mb-8"
                        />

                        <div className="text-gray-700 leading-6 space-y-4">
                            {service.description.split("\n\n").map((para, index) => (
                                <p key={index}>{para}</p>
                            ))}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold my-4">
                            How It Works
                        </h3>

                        <p className="text-gray-600 text-base leading-relaxed mb-6">
                            {service.description.split("\n\n")[0]}
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Optimizing supply chains",
                                "Streamlining operations to ensure seamless transportation",
                                "Extensive industry-level experience",
                                "A commitment to excellence",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-blue-600 text-lg">✓</span>
                                    <span className="text-gray-800 text-base">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-gray-600 text-base leading-relaxed">
                            {service.description.split("\n\n")[2]}
                        </p>

                        <div className="max-w-3xl mb-14">
                            <h2 className="text-2xl sm:text-3xl font-bold my-4">
                                Why Us?
                            </h2>

                            <p className="text-gray-600 leading-relaxed">
                                Logistics services require a myriad of detailed planning driven by time, cost,
                                and quality. At Torado we have a highly organized team with superior technology
                                to complete the required task with ease and deliver KPIs for serving clients,
                                we have a proven track record of clearing and collecting airport cargo within
                                four hours of STAT 1 clearance.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                            <div>
                                <div className="h-0.5 w-full bg-green-500 mb-6"></div>

                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-4xl font-bold">3500+</h3>
                                    <span className="text-2xl text-gray-400">↗</span>
                                </div>

                                <p className="text-gray-600">
                                    More than 3,500 successfully implemented projects with 23 years of experience.
                                </p>
                            </div>

                            <div>
                                <div className="h-0.5 w-full bg-blue-500 mb-6"></div>

                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-4xl font-bold">10+</h3>
                                    <span className="text-2xl text-gray-400">↗</span>
                                </div>

                                <p className="text-gray-600">
                                    Offices in 4 countries around the world – The United States of America,
                                    Germany, Poland & Canada.
                                </p>
                            </div>

                            <div>
                                <div className="h-0.5 w-full bg-yellow-500 mb-6"></div>

                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-4xl font-bold">350+</h3>
                                    <span className="text-2xl text-gray-400">↗</span>
                                </div>

                                <p className="text-gray-600">
                                    Offices in 4 countries around the world – The United States of America,
                                    Germany, Poland & Canada.
                                </p>
                            </div>

                        </div>

                        <p className="text-gray-600 mt-8 leading-relaxed">
                            Torado is a leading logistics company dedicated to providing comprehensive and efficient
                            solutions for businesses of all sizes. With our extensive industry experience and
                            commitment to excellence.
                        </p>

                        <Link to="/request-quote" className="block w-full sm:w-auto">
                            <GlitchButton type="submit"
                             className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-[#135DFB] my-6 text-white shadow-lg shadow-blue-500/30 hover:bg-[#3CB879] hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 text-center">
                                Request A Quote For This Service
                            </GlitchButton>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ServiceDetails