import { useState } from "react";
import axios from "axios";
import GlitchButton from "../components/GlitchButton";
import { toast } from "sonner";
import { FiChevronDown } from "react-icons/fi";
import Breadcrumb from "../components/Breadcrumb";

function GetQuote() {
    const initialFormData = {
        name: "",
        email: "",
        phone_no: "",
        parcels_per_day: "",
        country_of_origin: "",
        delivery_country: "",
        customs_clearance: "Yes",
        airport_collections: "No",
        final_mile_required: "No",
        avg_weight: "",
        avg_height: "",
        avg_width: "",
    };

    const [formData, setFormData] = useState(initialFormData);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                "http://localhost:5000/api/user/quote",
                formData
            );

            toast.success("Quote request submitted successfully");

            setFormData(initialFormData);

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };


    return (
        <>
            <Breadcrumb title="Get A Quote" />
            <div className="wrapper py-16">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Request A Quote
                </h1>

                <form onSubmit={handleSubmit} className="space-y-10 px-4 xl:px-0">

                    <section
                        className="bg-gray-100 rounded-md px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-20 xl:px-24"
                    >
                        <h2 className="font-semibold text-lg md:text-xl mb-6 md:mb-8">
                            Personal Data
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input placeholder-animate text-base"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input placeholder-animate text-base"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                name="phone_no"
                                placeholder="Phone no"
                                className="input placeholder-animate text-base"
                                value={formData.phone_no}
                                onChange={handleChange}
                            />
                        </div>
                    </section>

                    <section className="bg-gray-100 rounded-md px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-20 xl:px-24">
                        <h2 className="font-semibold text-lg md:text-xl mb-6 md:mb-8">
                            Shipment Data
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-6 md:mb-8">
                            <div>
                                <label className="block mb-2 text-sm md:text-base font-medium">
                                    Number of Parcels Per day <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="parcels_per_day"
                                    placeholder="minimum 500 items"
                                    className="input placeholder-animate text-base"
                                    value={formData.parcels_per_day}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm md:text-base font-medium">
                                    Country of Origin <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="country_of_origin"
                                    placeholder="e.g China"
                                    className="input placeholder-animate text-base"
                                    value={formData.country_of_origin}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm md:text-base font-medium">
                                    Delivery Country <span className="text-red-500">*</span>
                                </label>

                                <div className="relative">
                                    <select
                                        name="delivery_country"
                                        className="input text-base appearance-none pr-10"
                                        value={formData.delivery_country}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select country</option>
                                        <option value="United States">United States</option>
                                        <option value="India">India</option>
                                        <option value="China">China</option>
                                    </select>

                                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                                        <FiChevronDown size={18} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                            <div>
                                <label className="block mb-2 text-sm md:text-base font-medium">
                                    Customs Clearance <span className="text-red-500">*</span>
                                </label>

                                <div className="relative">
                                    <select
                                        name="customs_clearance"
                                        className="input text-base appearance-none pr-10"
                                        value={formData.customs_clearance}
                                        onChange={handleChange}
                                    >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>

                                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                                        <FiChevronDown size={18} />
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label className="block mb-2 text-sm md:text-base font-medium">
                                    Airport Collections <span className="text-red-500">*</span>
                                </label>

                                <div className="relative">
                                    <select
                                        name="airport_collections"
                                        className="input text-base appearance-none pr-10"
                                        value={formData.airport_collections}
                                        onChange={handleChange}
                                    >
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>
                                    </select>

                                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                                        <FiChevronDown size={18} />
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label className="block mb-2 text-sm md:text-base font-medium">
                                    Final Mile Required <span className="text-red-500">*</span>
                                </label>

                                <div className="relative">
                                    <select
                                        name="final_mile_required"
                                        className="input text-base appearance-none pr-10"
                                        value={formData.final_mile_required}
                                        onChange={handleChange}
                                    >
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>
                                    </select>

                                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                                        <FiChevronDown size={18} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section className="bg-gray-100 rounded-md px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-20 xl:px-24">
                        <h2 className="font-semibold text-[17.5px] md:text-xl mb-6 md:mb-8">
                            Average Parcels Dimensions <span className="text-red-500">*</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                            <div>
                                <label className="block mb-2 text-sm md:text-base font-medium">
                                    Average Weight <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="avg_weight"
                                    placeholder="e.g 500gm"
                                    className="input placeholder-animate text-base"
                                    value={formData.avg_weight}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm md:text-base font-medium">
                                    Average Height <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="avg_height"
                                    placeholder="e.g 20m"
                                    className="input placeholder-animate text-base"
                                    value={formData.avg_height}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm md:text-base font-medium">
                                    Average Width <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="avg_width"
                                    placeholder="e.g 20m"
                                    className="input placeholder-animate text-base"
                                    value={formData.avg_width}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </section>


                    <div className="text-center">
                        <GlitchButton type="submit" className="w-full sm:w-auto px-6 py-4.5 sm:px-8 sm:py-4 text-sm sm:text-base bg-[#FB695E] text-white shadow-[0_4px_20px_rgba(251,105,94,0.35)] transition-colors duration-300 hover:bg-[#3CB879]">
                            Send A Quote Request
                        </GlitchButton>
                    </div>

                </form>
            </div>
        </>
    );
}

export default GetQuote;

