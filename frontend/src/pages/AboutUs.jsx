import Breadcrumb from "../components/Breadcrumb";
import { motion } from "framer-motion";

function AboutUs() {
    return (
        <div>
            <Breadcrumb title="About Us" />

            <section className="py-14 px-4 xl:px-0">
                <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative flex flex-col lg:block gap-6">

                        <motion.img
                            src="/AboutUs/trusted1.jpg"
                            alt="Logistics"
                            className="w-112.5 object-cover"
                            initial={{ x: -80, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        />

                        <div className="lg:absolute lg:-bottom-12 lg:right-5">

                            <div className="hidden lg:flex flex-col items-center -mb-2 -mr-16">
                                <span className="w-8 h-0.5 bg-red-500"></span>
                                <span className="w-px h-56 bg-gray-200 mb-2"></span>
                            </div>

                            <motion.img
                                src="/AboutUs/trusted2.jpg"
                                alt="Warehouse"
                                className="w-full sm:w-56 rounded-2xl shadow-lg object-cover"
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
                            className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all"
                        >
                            KNOW MORE ABOUT Torado →
                        </a>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto mt-16 flex justify-end">
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
                            <span className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition">
                                ▶
                            </span>
                        </span>
                    </a>
                </div>
                <section className="py-16 px-4 xl:px-0">
                    <div className="max-w-6xl mx-auto">

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
                </section>

            </section>
        </div>
    );
}

export default AboutUs;
