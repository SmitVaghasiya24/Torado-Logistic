import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { FiChevronDown } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import AskQuestion from "../../components/AskQuestion";

function Faq() {
    const [faqs, setFaqs] = useState([]);
    const [activeId, setActiveId] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const getFaqs = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/user/get_faqs");

                if (res.data.success) {
                    setFaqs(res.data.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        getFaqs();
    }, []);


    const filteredFaqs = faqs.filter(item =>
        item.question.toLowerCase().includes(search.toLowerCase())
    );

    const leftFaqs = filteredFaqs.filter((_, i) => i % 2 === 0);
    const rightFaqs = filteredFaqs.filter((_, i) => i % 2 !== 0);

    const renderFaqItem = (item) => {
        const isOpen = activeId === item.id;

        return (
            <div
                key={item.id}
                className="bg-[#F3F5F6] rounded-xl transition"
            >
                <button
                    onClick={() => setActiveId(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between text-left px-6 py-5 font-medium text-gray-900"
                >
                    {item.question}
                    <FiChevronDown
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                </button>

                {isOpen && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {item.answer}
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            <Breadcrumb title="Frequently Asked Question" />
                  <div div className="px-3 xl:px-0">
            <section className="py-16">
                <div className="wrapper">

                    <div className="mb-14">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Find your question here"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full input placeholder-animate border border-gray-200 rounded-xl py-4 pl-12 pr-4"
                            />
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <FiSearch size={20} />
                            </span>

                        </div>
                    </div>

                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl max-w-xl mx-auto font-bold text-gray-900">
                            Have Question? We Have Answers.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            {leftFaqs.map(renderFaqItem)}
                        </div>

                        <div className="space-y-6">
                            {rightFaqs.map(renderFaqItem)}
                        </div>
                    </div>

                </div>
            </section>
            <AskQuestion/>
            </div>
        </>
    );
}

export default Faq;
