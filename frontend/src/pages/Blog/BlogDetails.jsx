import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "../../components/Breadcrumb";
import { FiCalendar, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import BlogCommentForm from "./BlogCommentForm";
import BlogSidebar from "./BlogSidebar";

function BlogDetails() {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5000/api/user/get_blog/${slug}`
                );
                setBlog(res.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBlogDetails();
    }, [slug]);

    if (!blog) {
        return null;
    }

    return (
        <>
            <Breadcrumb title="Blog Details" />

            <div className="px-3 xl:px-0">
                <section className="py-14">
                    <div className="wrapper">

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                            {/* right */}
                            <div className="lg:col-span-1">
                                <BlogSidebar currentSlug={slug} />
                            </div>


                            {/* left */}
                            <div className="lg:col-span-2">

                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                    {blog.title}
                                </h1>

                                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                                    <span className="flex items-center gap-2">
                                        <FiCalendar />
                                        {new Date(blog.published_date).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </span>

                                    <span className="flex items-center gap-2">
                                        <FiUser />
                                        {blog.author}
                                    </span>

                                    <span className="text-[#F15A40] font-medium">
                                        {blog.category_name}
                                    </span>
                                </div>

                                <div className="mb-8 overflow-hidden rounded-lg">
                                    <img
                                        src={blog.thumbnail}
                                        alt={blog.title}
                                        className="w-full max-h-[420px] object-cover"
                                    />
                                </div>

                                <div className="prose prose-gray max-w-none text-base leading-relaxed">
                                    {blog.content
                                        .split("\n\n")
                                        .map((para, index) => (
                                            <p key={index}>{para}</p>
                                        ))}
                                </div>

                                <div className="bg-[#FAF9F6] border-l-2 border-[#FB695E] rounded-lg p-8 sm:p-10 my-10">

                                    <div className="flex items-start gap-1">
                                        <span className="text-[#FB695E] text-4xl font-bold leading-none">
                                            “
                                        </span>

                                        <p className="text-lg sm:text-xl font-semibold text-gray-900 leading-relaxed">
                                            Curabitur varius eros et lacus rutrum consequat. Mauris sollicitudin enim condimentum, luctus enim justo non, molestie nisl.
                                        </p>
                                    </div>

                                </div>

                                <div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                                        Creative Approach To Every Project
                                    </h2>

                                    <p className="text-gray-600 text-base leading-relaxed mb-5">
                                        Cost-competent and quality-driven Third Party Logistics services including linehaul for
                                        Air, Road, Sea, and Warehousing with a critical focus on customs clearance and airport
                                        cargo collections and drop-offs.
                                    </p>

                                    <p className="text-gray-600 text-base leading-relaxed mb-10">
                                        Our client's requirement varies from seeking single service or bundled packages for
                                        customs clearance, airport cargo collections, or drop-offs to final mile connections and
                                        management of final mile to the customer door or just performing the full operational
                                        spec through consolidation and fulfillment.
                                    </p>

                                    <h3 className="text-xl sm:text-2xl font-bold mb-4">
                                        How It Works
                                    </h3>

                                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                                        Torado is a leading logistics company dedicated to providing comprehensive and efficient
                                        solutions for businesses of all sizes. With our extensive industry experience and
                                        commitment to excellence.
                                    </p>

                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-600 text-lg">✓</span>
                                            <span className="text-gray-800 text-base">
                                                Optimizing supply chains
                                            </span>
                                        </li>

                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-600 text-lg">✓</span>
                                            <span className="text-gray-800 text-base">
                                                Streamlining operations to ensure seamless transportation
                                            </span>
                                        </li>

                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-600 text-lg">✓</span>
                                            <span className="text-gray-800 text-base">
                                                Extensive industry-level experience
                                            </span>
                                        </li>

                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-600 text-lg">✓</span>
                                            <span className="text-gray-800 text-base">
                                                A commitment to excellence
                                            </span>
                                        </li>
                                    </ul>

                                    <p className="text-gray-600 text-base leading-relaxed">
                                        We specialize in all value-added activities for all movements of e-commerce and
                                        cross-border distribution, serving the largest marketplaces. We have intense
                                        on-ground experience in managing the complex operations of end-to-end services with a
                                        detailed eye on compliance and proven quality control strategies.
                                    </p>

                                </div>

                                <div className="pt-16">
                                    <div className="wrapper">

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                            <img
                                                src="/Blog/blog-details2.jpg"
                                                alt=""
                                                className="w-full h-70 object-cover rounded-md"
                                            />
                                            <img
                                                src="/Blog/blog-details3.jpg"
                                                alt=""
                                                className="w-full h-70 object-cover rounded-md"
                                            />
                                        </div>

                                        <div className="max-w-3xl mb-14">
                                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
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

                                    </div>
                                </div>

                                {blog && (
                                    <div className="mt-18 border-y border-gray-200 py-6">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                                            {blog.tags?.length > 0 && (
                                                <div className="flex flex-wrap gap-3">
                                                    {blog.tags.map((tag, index) => (
                                                        <Link
                                                            key={index}
                                                            to={`/blog?tag=${encodeURIComponent(tag)}`}
                                                            className="px-5 py-2 text-sm bg-[#F3F5F6] text-gray-800 hover:bg-[#FB695E] hover:text-white transition rounded"
                                                        >
                                                            {tag}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="flex items-center gap-4">
                                                <span className="font-semibold text-gray-900">Share:</span>

                                                <a
                                                    href="https://www.facebook.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#FB695E] hover:scale-110 transition"
                                                >
                                                    <FaFacebookF />
                                                </a>

                                                <a
                                                    href="https://www.instagram.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#FB695E] hover:scale-110 transition"
                                                >
                                                    <FaInstagram />
                                                </a>

                                                <a
                                                    href="https://x.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#FB695E] hover:scale-110 transition"
                                                >
                                                    <FaXTwitter />
                                                </a>

                                                <a
                                                    href="https://www.linkedin.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#FB695E] hover:scale-110 transition"
                                                >
                                                    <FaLinkedinIn />
                                                </a>
                                            </div>


                                        </div>
                                    </div>
                                )}
                                <BlogCommentForm blogId={blog.id} />

                            </div>

                        </div>

                    </div>
                </section>

            </div>
        </>
    );
}

export default BlogDetails;
