import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "../../components/Breadcrumb";

function TermsCondition() {
    const [page, setPage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTerms = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:5000/api/user/get_pages/terms-and-conditions"
                );

                if (res.data.success) {
                    setPage(res.data.data);
                }
            } catch (error) {
                console.error("Error fetching terms & conditions:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTerms();
    }, []);

    if (loading) {
        return (
            <>
                <Breadcrumb title="Terms & Conditions" />
                <div className="wrapper py-20 text-center text-gray-500">
                    Loading...
                </div>
            </>
        );
    }

    return (
        <>
            <Breadcrumb title={page?.title || "Terms & Conditions"} />

            <section className="py-16 px-3 xl:px-0">
                <div className="wrapper">
                    <div
                        className="
                            max-w-none
                            [&_p]:text-gray-600
                            [&_p]:leading-relaxed
                            [&_p]:mb-4
                            [&_h3]:text-xl
                            [&_h3]:font-semibold
                            [&_h3]:mt-8
                            [&_h3]:mb-2
                            [&_ul]:list-disc
                            [&_ul]:pl-6
                            [&_ul]:mb-4
                            [&_li]:mb-2
                        "
                        dangerouslySetInnerHTML={{ __html: page?.content }}
                    />
                </div>
            </section>
        </>
    );
}

export default TermsCondition;
