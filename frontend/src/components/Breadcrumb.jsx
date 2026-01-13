import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb({ title }) {
    const location = useLocation();
    const pathParts = location.pathname.split("/").filter(Boolean);

    return (
        <section className="relative w-full h-60 sm:h-70 md:h-80 z-0 overflow-hidden bg-[#F0EFEA]">

            <img
                src="/Shapes/hero-shape5.png"
                alt=""
                className="hidden lg:block absolute top-20 z-50 left-[45%] w-6 pointer-events-none"
            />

            <img
                src="/Shapes/hero-shape6.png"
                alt=""
                className="hidden lg:block absolute bottom-20 z-50 right-[38%] w-8 pointer-events-none"
            />

            <img
                src="/Shapes/hero-shape3.png"
                alt=""
                className="hidden lg:block absolute bottom-0 z-50 right-[16%] w-8 pointer-events-none"
            />


            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-[#F6F5F2] h-22.5 sm:h-25 md:h-27.5 z-10" />

            <div className="relative z-20 h-full flex items-center">
                <div className="w-full wrapper px-4 xl:px-0">

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            {title}
                        </h1>

                        <nav
                            className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-gray-600 mt-1 sm:mt-0 "
                        >
                            <Link to="/" className="hover:text-blue-600 font-medium">
                                HOME
                            </Link>

                            {pathParts.map((part, index) => {
                                const label =
                                    part.charAt(0).toUpperCase() +
                                    part.slice(1).replace("-", " ");

                                return (
                                    <span key={index} className="flex items-center gap-2">
                                        <span className="text-gray-400">&gt;</span>
                                        <span className="font-semibold text-gray-900">
                                            {label}
                                        </span>
                                    </span>
                                );
                            })}
                        </nav>
                    </div>

                </div>
            </div>
        </section>
    );
}

