import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { FiArrowRight } from "react-icons/fi";
import GlitchButton from "../../components/GlitchButton";
import { FaPlay } from "react-icons/fa";


function Service() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/user/get_services");
                const data = await res.json();

                if (data.success) {
                    setServices(data.data);
                }
            } catch (error) {
                console.error("Failed to fetch services", error);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    return (
        <>
            <Breadcrumb title="Services" />
      <div div className="px-3 xl:px-0">
      

                <section className="pt-16">
                    <div className="wrapper">
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <h2 className="text-3xl md:text-4xl max-w-md mx-auto font-bold text-gray-900 leading-tight">
                                Services That We Provide For Your Logistics
                            </h2>
                        </div>

                        {loading && (
                            <div className="text-center text-gray-500">
                                Loading services...
                            </div>
                        )}

                        {!loading && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {services.map((service) => (
                                    <div
                                        key={service.id}
                                        className="bg-[#faf8f3] p-8 rounded-lg"
                                    >
                                        <div className="mb-6 flex items-center justify-between">
                                            <img
                                                src={service.thumbnail}
                                                alt={service.title}
                                                className="h-14 w-14"
                                            />
                                        </div>

                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                            {service.short_description}
                                        </p>

                                        <Link
                                            to={`/services/${service.slug}`}
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FB695E] hover:gap-3 transition-all"
                                        >
                                            LEARN MORE
                                            <span className="text-lg"><FiArrowRight /></span>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                <section className="relative overflow-hidden bg-white py-16">
                    <div className="wrapper relative z-10">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">

                            <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl">
                                <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                    Transform Your Supply <br className="hidden sm:block" />
                                    Chains Into a Resilient, Agile, <br className="hidden sm:block" />
                                    &amp; Flexible Environment
                                </h2>
                            </div>

                            <div className="w-full lg:w-auto">
                                <Link to="/request-quote">
                                    <GlitchButton
                                        type="button"
                                        className="w-full sm:w-autopx-6 py-3.5 sm:px-8 text-white sm:py-4text-sm sm:text-base bg-[#0476FC] text-whiteshadow-[0_4px_20px_rgba(4,118,252,0.35)]transition-colors duration-300 hover:bg-[#3CB879]"
                                    >
                                        Request A Quote
                                    </GlitchButton>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <h1 className=" text-[64px] sm:text-[100px] md:text-[140px] lg:text-[160px] font-extrabold text-gray-200/30 whitespace-nowrap ">
                            TORADO Logistics
                        </h1>
                    </div>
                </section>

                <section className="py-16">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

                        <div className="relative rounded-2xl overflow-hidden">
                            <img
                                src="/Service/ser.avif"
                                alt="Logistics Video"
                                className="w-full h-65 sm:h-90 lg:h-full object-cover"
                            />

                            <button
                                onClick={() => setOpen(true)}
                                className=" absolute inset-0 flex items-center justify-center  bg-black/20 hover:bg-black/30 transition-colors duration-300"
                            >
                                <span
                                    className=" w-16 h-16 sm:w-20 sm:h-20 rounded-full  bg-[#FB695E] hover:bg-[#0476FC] flex items-center justify-center shadow-[0_10px_30px_rgba(251,105,94,0.4)] transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0_14px_40px_rgba(4,118,252,0.45)]"
                                >
                                    <FaPlay className="text-white text-lg sm:text-xl ml-1" />
                                </span>
                            </button>
                        </div>

                        <div className="relative h-full">
                            <div className="absolute inset-0 bg-[#F3F5F6] rounded-2xl"></div>


                            <img
                                src="/Shapes/hero-shape6.png"
                                alt=""
                                className=" hidden lg:block absolute top-12 right-[16%] w-8 z-50 pointer-events-none animate-float-vertical"

                            />

                            <img
                                src="/Shapes/hero-shape5.png"
                                alt=""

                                className=" hidden lg:block absolute bottom-20 right-[38%] w-8 z-50 pointer-events-none animate-float-horizontal"
                            />


                            <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-14">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-xl text-gray-900 leading-tight mb-4 sm:mb-5">
                                    Watch how our global team of experts goes above and
                                    beyond to solve any challenge.
                                </h2>

                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-lg">
                                    Solving supply chain challenges hand in hand. Avoid
                                    unexpected costs that come with the changing freight
                                    market and the complexities of a global supply chain.
                                    Our global reach, and deep industry knowledge.
                                </p>

                                <GlitchButton
                                    type="button"
                                    className=" px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base bg-[#3B6EF5] text-white rounded-md shadow-[0_10px_30px_rgba(59,110,245,0.35)] transition-colors duration-300  hover:bg-[#3CB879]"
                                >
                                    Discover More
                                </GlitchButton>
                            </div>
                        </div>

                    </div>

                </section>

                {open && (
                    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
                        <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">

                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-3 right-3 cursor-pointer text-white text-2xl z-10"
                            >
                                ✕
                            </button>

                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/3nQNiWdeH2Q?autoplay=1"
                                title="YouTube video"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}

            </div>
        </>
    );
}

export default Service;
