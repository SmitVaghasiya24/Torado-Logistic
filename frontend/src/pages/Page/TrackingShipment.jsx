import Breadcrumb from "../../components/Breadcrumb";
import { useState } from "react";
import GlitchButton from "../../components/GlitchButton";

function TrackingShipment() {
    const [trackingId, setTrackingId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!trackingId.trim()) return;

        console.log("Tracking ID:", trackingId);
    };

    return (
        <>
            <Breadcrumb title="Tracking Shipment" />

            <section className="py-20">
                <div className="wrapper">

                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl max-w-md mx-auto font-bold text-gray-900">
                            All-In-One Package Tracking
                        </h2>
                    </div>

                    <div className="bg-gray-100 rounded-2xl px-8 md:px-18 py-12">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col lg:flex-row items-start lg:items-end gap-6"
                        >
                            <div className="w-full">
                                <label className="block font-semibold text-gray-900 mb-3">
                                    Enter Tracking ID
                                </label>

                                <input
                                    type="text"
                                    placeholder="Place your tracking ID here"
                                    value={trackingId}
                                    onChange={(e) => setTrackingId(e.target.value)}
                                    className="w-full h-14 px-5 rounded-md input placeholder-animate"
                                />
                            </div>

                            <GlitchButton
                                type="submit"
                                className=" w-full lg:w-auto h-14 px-10 bg-[#FB695E] text-white font-semibold whitespace-nowrap shadow-[0_10px_30px_rgba(251,105,94,0.35)]  hover:bg-[#3CB879] transition-colors duration-300"
                            >
                                Track Your Shipment
                            </GlitchButton>

                        </form>
                    </div>

                    <p className="text-center text-gray-600 mt-12 max-w-3xl mx-auto">
                        Torado is the place for Businesses and entrepreneurs that operate and sell
                        physical goods, typically through online channels.
                    </p>

                </div>
            </section>
        </>
    );
}

export default TrackingShipment;
