import { useState } from "react";
import { FiCheck, FiHeadphones } from "react-icons/fi";

const TABS = [
    {
        key: "cost",
        label: "COST & BUDGET",
        title: "Better manage your freight and logistics expenses",
        image: "/AboutUs/expert-service1.jpg",
        points: [
            "Determine if savings opportunities are realistic.",
            "Get real-time market rates directly in your TMS or ERP",
            "Reduce safety stock with more reliable delivery performance",
        ],
    },
    {
        key: "service",
        label: "SERVICE AND RELIABILITY",
        title: "Improve service quality and delivery reliability",
        image: "/AboutUs/expert-service2.jpg",
        points: [
            "Minimize service disruptions",
            "Improve on-time delivery rate",
            "Increase customer satisfaction",
        ],
    },
    {
        key: "agility",
        label: "SUPPLY CHAIN AGILITY",
        title: "Build a more agile supply chain",
        image: "/AboutUs/expert-service3.jpg",
        points: [
            "Respond faster to market changes",
            "Improve operational flexibility",
            "Reduce dependency risks",
        ],
    },
    {
        key: "tracking",
        label: "TRACKING AND VISIBILITY",
        title: "Get full visibility across your supply chain",
        image: "/AboutUs/expert-service4.jpg",
        points: [
            "Real-time shipment tracking",
            "Better forecasting accuracy",
            "Proactive issue resolution",
        ],
    },
];

function Challange() {
    const [activeTab, setActiveTab] = useState(TABS[0]);

    return (
        <section className="py-20 px-4 bg-white">
            <div className="wrapper">

                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                    We Can Help You Solve Your <br /> Biggest Challenges
                </h2>



                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-start">

                    <div className="relative">

                        <div
                            className="hidden lg:flex absolute top-4 left-1/2 -translate-x-1/2 bg-[#F6F1F0] rounded-xl px-8 py-6 gap-8 whitespace-nowrap z-20 shadow-sm"
                        >
                            {TABS.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab)}
                                    className={`text-xs font-semibold tracking-wide uppercase transition ${activeTab.key === tab.key
                                        ? "text-[#FA6B60]"
                                        : "text-black hover:text-[#FA6B60]"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-col lg:flex-row gap-10 items-start">

                            <div className="flex-1 mt-26">
                                <h3 className="text-xl font-semibold mb-4">
                                    {activeTab.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Avoid unexpected costs that come with the changing freight market
                                    and the complexities of a global supply chain.
                                </p>

                                <ul className="space-y-4 mb-8">
                                    {activeTab.points.map((point, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-700">
                                            <FiCheck className="text-blue-500 mt-1" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="w-full bg-[#3B6EF5] rounded-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex items-center gap-3 text-white">
                                        <FiHeadphones className="text-2xl shrink-0" />
                                        <span>Call Anytime To Discuss Your Business</span>
                                    </div>
                                    <div className="text-white font-bold text-lg">
                                        +44 0203059368
                                    </div>
                                </div>

                            </div>

                            <div className="shrink-0">
                                <img
                                    src={activeTab.image}
                                    alt="Challenge"
                                    className="w-full max-w-sm rounded-2xl object-cover"
                                />
                            </div>

                        </div>
                    </div>

                    <div className="bg-[#FAD14B] rounded-2xl p-8">
                        <h4 className="text-xl font-bold mb-6 text-center">
                            Connect With An Expert
                        </h4>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-3 rounded-md bg-[#FDE48C] outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded-md bg-[#FDE48C] outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Phone No"
                                className="w-full px-4 py-3 rounded-md bg-[#FDE48C] outline-none"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                className="w-full px-4 py-3 rounded-md bg-[#FDE48C] outline-none"
                            />

                            <label className="flex items-center gap-2 text-sm">
                                <input type="checkbox" />
                                I agree to all Terms & Conditions
                            </label>

                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 rounded-md font-semibold"
                            >
                                Send Message Now
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Challange;
