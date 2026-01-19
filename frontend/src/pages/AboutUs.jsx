import Breadcrumb from "../components/Breadcrumb";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { FaTruck, FaGlobe, FaIndustry, FaSearch, FaShip, FaStar } from "react-icons/fa";
import Challange from "../components/Challange";

function AboutUs() {
    return (
        <div>
            <Breadcrumb title="About Us" />

            <section className="wrapper py-16 px-4 xl:px-0">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative flex flex-col lg:block gap-6">

                        <motion.img
                            src="/AboutUs/trusted1.jpg"
                            alt="Logistics"
                            className="w-120 object-cover"
                            initial={{ x: -80, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        />

                        <div className="lg:absolute lg:-bottom-36 lg:right-5">

                            <div className="hidden xl:flex flex-col items-center -mb-2 -mr-40">
                                <span className="w-8 h-0.5 bg-red-500"></span>
                                <span className="w-px h-70 bg-gray-200 mb-2"></span>
                            </div>

                            <motion.img
                                src="/AboutUs/trusted2.jpg"
                                alt="Warehouse"
                                className="w-full sm:w-72 rounded-2xl shadow-lg object-cover"
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                                viewport={{ once: true }}
                            />
                        </div>
                    </div>

                    <div>

                        <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
                            Global System Integrator Trusted by Fortune 500 Companies
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            Torado is a leading logistics company dedicated to providing
                            comprehensive and efficient solutions for businesses of all sizes.
                            With our extensive industry experience and commitment to excellence.
                        </p>

                        <ul className="space-y-3 mb-8">
                            {[
                                "Optimizing supply chains",
                                "Streamlining operations to ensure seamless transportation",
                                "Extensive industry-level experience",
                                "A commitment to excellence",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-700">
                                    <span className="text-blue-600">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#"
                            className="inline-flex items-center gap-2 leading-snugtext-green-600 font-semibold tracking-wide transition-all duration-600 text-[#3CB879] hover:text-[#FA6B60] hover:tracking-normal"
                        >
                            KNOW MORE ABOUT Torado
                            <span>→</span>
                        </a>

                    </div>
                </div>

                <div className="mt-4 lg:mt-0 flex justify-end">
                    <a
                        href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                        target="_blank"
                        rel="noreferrer"
                        className="relative w-72 rounded-2xl overflow-hidden shadow-lg group"
                    >
                        <img
                            src="/AboutUs/trusted3.jpg"
                            alt="Video"
                            className="w-full h-full object-cover"
                        />

                        <span className="absolute inset-0 flex items-center justify-center">
                            <span
                                className=" w-16 h-16 sm:w-14 sm:h-14 rounded-full  bg-[#0476FC] hover:bg-[#FB695E] flex items-center justify-center shadow-[0_10px_30px_rgba(251,105,94,0.4)] transition-all duration-600 ease-out hover:shadow-[0_14px_40px_rgba(4,118,252,0.45)]"
                            >
                                <FaPlay className="text-white text-lg sm:text-xl ml-1" />
                            </span>
                        </span>
                    </a>
                </div>

                <div className="py-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
                        Why Choose Torado For Logistics
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                        <div>
                            <div className="w-full h-[2.5px] bg-red-400 mb-8"></div>

                            <div className="flex items-start justify-between mb-6">
                                <h3 className="text-5xl font-bold">23+</h3>
                                <span className="text-3xl text-gray-500">↗</span>
                            </div>

                            <p className="text-gray-600 leading-relaxed">
                                With 23 years of experience, we've earned hundreds of awards and
                                certificates.
                            </p>
                        </div>

                        <div>
                            <div className="w-full h-[2.5px] bg-blue-500 mb-8"></div>

                            <div className="flex items-start justify-between mb-6">
                                <h3 className="text-5xl font-bold">10</h3>
                                <span className="text-3xl text-gray-500">↗</span>
                            </div>

                            <p className="text-gray-600 leading-relaxed">
                                Offices in 4 countries around the world – The United States of America,
                                Germany, Poland, and Canada.
                            </p>
                        </div>

                        <div>
                            <div className="w-full h-[2.5px] bg-green-500 mb-8"></div>

                            <div className="flex items-start justify-between mb-6">
                                <h3 className="text-5xl font-bold">3500+</h3>
                                <span className="text-3xl text-gray-500">↗</span>
                            </div>

                            <p className="text-gray-600 leading-relaxed">
                                More than 3,500 successfully implemented projects with 23 years of
                                experience.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full ">
                    <a
                        href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                        target="_blank"
                        rel="noreferrer"
                        className="relative block w-full overflow-hidden rounded-xl"
                    >
                        <img
                            src="/AboutUs/choose-video2.jpg"
                            alt="Logistics Video"
                            className=" w-full object-cover h-45 sm:h-70 md:h-90 lg:h-105 xl:h-120"
                        />

                        <div className="absolute inset-0 bg-black/10"></div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="flex items-center justify-center rounded-full bg-[#2F6FED] transition-all duration-600 shadow-[0_15px_40px_rgba(47,111,237,0.45)] hover:bg-[#FB695E] w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20"

                            >
                                <FaPlay className="text-white text-lg sm:text-xl md:text-2xl ml-1" />
                            </div>
                        </div>
                    </a>
                </div>

                <div className="py-14 relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">

                        <div className="hidden lg:flex flex-col items-center absolute left-1/2 top-0 -translate-x-1/2">
                            <span className="w-7 h-0.75 bg-red-500"></span>
                            <span className="w-px h-48 bg-gray-200"></span>
                        </div>

                        <div className="space-y-5 md:pr-12">
                            <h3 className="text-2xl font-semibold">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our objective is to develop a profitable and effective solution that
                                helps clients expand their businesses and overcome financial constraints.
                            </p>
                            <p className="text-gray-500 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Pellentesque ullamcorper enim
                                blandit viverra enim aliquam erat pellentesque.
                            </p>
                        </div>

                        <div className="space-y-5 md:pl-12">
                            <h3 className="text-2xl font-semibold">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Creating a revolutionized process for efficient transporting of
                                freight across the nation.
                            </p>
                            <p className="text-gray-500 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Pellentesque ullamcorper enim
                                blandit viverra enim aliquam erat pellentesque.
                            </p>
                        </div>

                    </div>
                </div>


            </section>

            <section className="bg-[#F6F1F0] py-20 px-4 xl:px-0 mb-4">
                <div className="wrapper">

                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
                                6 Steps To A More Profitable <br className="hidden sm:block" />
                                Supply Chain
                            </h2>

                            <p className="text-gray-600 max-w-xl leading-relaxed mb-10 lg:mb-24">
                                Our objective is to develop a profitable and effective solution that
                                helps clients expand their businesses and overcome financial
                                constraints. We are committed to exceptional service.
                            </p>

                            <div className="hidden lg:flex absolute mt-2 xl:mt-8 left-0 right-0 gap-6">
                                {[
                                    { icon: <FaTruck />, title: "Feasibility of Product" },
                                    { icon: <FaGlobe />, title: "Sourcing Network" },
                                    { icon: <FaIndustry />, title: "Manufacturing Monitoring" },
                                    { icon: <FaSearch />, title: "Inspect Goods" },
                                    { icon: <FaShip />, title: "Shipping from China" },
                                    { icon: <FaStar />, title: "Improving R.O.I" },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl p-5 text-center shadow-md w-36 xl:w-40 shrink-0"
                                    >
                                        <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gray-100
                              flex items-center justify-center text-2xl text-[#3CB879]">
                                            {item.icon}
                                        </div>
                                        <h4 className="font-semibold text-gray-900 text-sm">
                                            {item.title}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="/Shapes/hero-shape4.png"
                                alt=""
                                className=" hidden lg:block absolute top-12 -left-10 w-14 z-10 pointer-events-none animate-float-vertical"

                            />

                            <img
                                src="/Shapes/hero-shape2.png"
                                alt=""

                                className=" hidden lg:block absolute -bottom-10 right-[3%] w-8 z-10 pointer-events-none animate-float-horizontal"
                            />
                            <img
                                src="/AboutUs/choose-img.jpg"
                                alt="Supply Chain"
                                className="w-full object-cover rounded-3xl h-65 sm:h-90 md:h-105"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 lg:hidden">
                        {[
                            { icon: <FaTruck />, title: "Feasibility of Product" },
                            { icon: <FaGlobe />, title: "Sourcing Network" },
                            { icon: <FaIndustry />, title: "Manufacturing Monitoring" },
                            { icon: <FaSearch />, title: "Inspect Goods" },
                            { icon: <FaShip />, title: "Shipping from China" },
                            { icon: <FaStar />, title: "Improving R.O.I" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-5 text-center shadow-md"
                            >
                                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gray-100
                          flex items-center justify-center text-2xl text-[#3CB879]">
                                    {item.icon}
                                </div>
                                <h4 className="font-semibold text-gray-900 text-sm">
                                    {item.title}
                                </h4>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#F6F1F0] pt-28 px-4">
                        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                            <div className="relative">
                                <img
                                    src="/AboutUs/product-image2.jpg"
                                    alt="Quality Inspection"
                                    className="w-full h-105 md:h-120 object-cover rounded-3xl relative z-10"
                                />

                                <img
                                    src="/Shapes/hero-shape7.png"
                                    alt=""
                                    className="hidden lg:block absolute bottom-8 -right-[6%] w-20 z-0"
                                />

                                <img
                                    src="/Shapes/product-shape8.png"
                                    alt=""
                                    className=" hidden lg:block absolute top-12 -right-10 w-18 z-10 pointer-events-none animate-float-vertical"

                                />

                            </div>

                            <div className="relative">

                                <div className="hidden xl:flex flex-col items-center absolute -left-4 top-">
                                    <span className="w-8 h-0.5 bg-red-500"></span>
                                    <span className="w-px h-62 bg-white"></span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6 ml-0 xl:ml-8">
                                    We Maintain Quality Standard
                                    For All Your Products
                                </h2>

                                <p className="text-gray-600 leading-relaxed max-w-xl mb-12 ml-0 xl:ml-8">
                                    Our objective is to develop a profitable and effective solution that
                                    helps clients expand their businesses and overcome financial constraints.
                                    We are committed to exceptional service.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-white">

                                    <div className="relative py-8 pr-6 border-b border-l border-white">
                                        <span className="absolute -left-px top-8 w-0.75 h-10 bg-[#FA6B60]"></span>
                                        <h4 className="pl-6 font-semibold text-lg">
                                            Pre-shipment Inspection Service
                                        </h4>
                                    </div>

                                    <div className="relative py-8 pl-6 border-b border-white sm:border-l">
                                        <span className="absolute -left-px top-8 w-0.75 h-10 bg-[#FA6B60]"></span>
                                        <h4 className="pl-6 font-semibold text-lg">
                                            CE Marked Products Assessments
                                        </h4>
                                    </div>

                                    <div className="relative py-8 pr-6 border-l border-white">
                                        <span className="absolute -left-px top-8 w-0.75 h-10 bg-[#FA6B60]"></span>
                                        <h4 className="pl-6 font-semibold text-lg">
                                            ISO 9001 Factories Certifications
                                        </h4>
                                    </div>

                                    <div className="relative py-8 pl-6 border-white sm:border-l">
                                        <span className="absolute -left-px top-8 w-0.75 h-10 bg-[#FA6B60]"></span>
                                        <h4 className="pl-6 font-semibold text-lg">
                                            UL Certified Products Assessments
                                        </h4>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>


            <section className="wrapper py-12 sm:py-16 px-4 xl:px-0">
                <div className="bg-white border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">

                        <div className="flex items-center justify-center py-8 sm:py-12 border-b sm:border-b-0 border-r border-gray-200">
                            <img
                                src="/Company/partner-logo1.png"
                                alt="Partner"
                                className="h-6 sm:h-8 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
                            />
                        </div>

                        <div className="flex items-center justify-center py-8 sm:py-12 border-b sm:border-b-0 sm:border-r border-gray-200">
                            <img
                                src="/Company/partner-logo2.png"
                                alt="Partner"
                                className="h-6 sm:h-8 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
                            />
                        </div>

                        <div className="hidden sm:flex items-center justify-center py-8 sm:py-12 border-b sm:border-b-0 md:border-r border-gray-200">
                            <img
                                src="/Company/partner-logo3.png"
                                alt="Partner"
                                className="h-5 sm:h-7 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
                            />
                        </div>

                        <div className="hidden md:flex items-center justify-center py-8 sm:py-12 border-r border-gray-200">
                            <img
                                src="/Company/partner-logo4.png"
                                alt="Partner"
                                className="h-6 sm:h-8 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
                            />
                        </div>

                        <div className="hidden md:flex items-center justify-center py-8 sm:py-12">
                            <img
                                src="/Company/partner-logo5.png"
                                alt="Partner"
                                className="h-5 sm:h-7 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
                            />
                        </div>

                    </div>
                </div>
            </section>

            <Challange/>

        </div>
    );
}

export default AboutUs;
