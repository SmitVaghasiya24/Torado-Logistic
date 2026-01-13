import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Breadcrumb from "../../components/Breadcrumb";
import { FiCalendar } from "react-icons/fi";


function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 6;

    useEffect(() => {
        const fetchBlogs = async (pageNo) => {
            try {
                const res = await axios.get(
                    `http://localhost:5000/api/user/get_blogs?page=${pageNo}&limit=${limit}`
                );

                setBlogs(res.data.data);
                setTotalPages(res.data.pagination.totalPages);
            } catch (error) {
                console.error(error);
            }
        };
        fetchBlogs(page);
    }, [page]);



    return (
        <>
            <Breadcrumb title="Our Blog" />
            <div className="px-3 xl:px-0">
                <section className="py-16">
                    <div className="wrapper">

                        <h2 className="text-3xl md:text-4xl font-bold max-w-md mx-auto text-center mb-12">
                            Latest Business Highlights Of Torado
                        </h2>
                        {blogs.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {blogs.map((blog) => (
                                        <div key={blog.id} className="group">
                                            <div className="relative overflow-hidden rounded-md">
                                                <img
                                                    src={blog.thumbnail}
                                                    alt={blog.title}
                                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                                />

                                                <div className="absolute bottom-4 left-4 flex overflow-hidden rounded bg-blue-600 text-white text-sm">
                                                    <div className="bg-white rounded flex items-center justify-center px-3">
                                                        <FiCalendar size={16} className="text-blue-800" />
                                                    </div>

                                                    <div className="px-4 py-2 flex items-center">
                                                        {new Date(blog.published_date).toLocaleDateString("en-GB", {
                                                            day: "2-digit",
                                                            month: "short",
                                                            year: "numeric",
                                                        })}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-5">
                                                <Link 
                                                to={`/blog/${blog.slug}`}
                                                 className="text-lg font-semibold mb-3 leading-snug cursor-pointer text-gray-900 hover:text-[#FB695E] transition-colors duration-300 ease-in-out">
                                                    {blog.title}
                                                </Link>

                                                <p className="text-gray-600 text-sm mb-4">
                                                    {blog.short_description}
                                                </p>

                                                <Link
                                                    to={`/blog/${blog.slug}`}
                                                    className="inline-flex items-center gap-2 text-[#F15A40] text-sm font-semibold hover:gap-3 transition-all"
                                                >
                                                    READ MORE <FiArrowRight />
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                                <div className="bottom-6 mt-16 flex justify-center">
                                    <div className="flex items-center gap-3 px-6 py-3">

                                        <button
                                            onClick={() => setPage((p) => Math.max(p - 1, 1))}
                                            disabled={page === 1}
                                            className="w-10 h-10 flex items-center justify-center rounded text-black hover:bg-[#FB695E] hover:text-white transition-colors duration-300 disabled:opacity-40"
                                        >
                                            <FiArrowLeft />
                                        </button>

                                        {Array.from({ length: totalPages }, (_, i) => {
                                            const pageNumber = i + 1;
                                            return (
                                                <button
                                                    key={pageNumber}
                                                    onClick={() => setPage(pageNumber)}
                                                    className={`w-10 h-10 flex items-center justify-center rounded text-sm font-medium transition-colors duration-300 ${page === pageNumber
                                                        ? "bg-[#F15A40] text-white"
                                                        : "bg-[#F7F6F3] text-gray-900 hover:bg-[#FB695E] hover:text-white"
                                                        }`}
                                                >
                                                    {pageNumber}
                                                </button>
                                            );
                                        })}

                                        <button
                                            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                                            disabled={page === totalPages}
                                            className="w-10 h-10 flex items-center justify-center rounded text-black hover:bg-[#FB695E] hover:text-white transition-colors duration-300 disabled:opacity-40"
                                        >
                                            <FiArrowRight />
                                        </button>

                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="py-20 text-center">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Blog not found
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    No blog posts are available at the moment.
                                </p>
                            </div>
                        )}


                    </div>
                </section>
            </div>
        </>
    );
}

export default Blog;
