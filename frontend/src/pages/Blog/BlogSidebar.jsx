import { useEffect, useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import GlitchButton from "../../components/GlitchButton";
function BlogLeft() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [keyword, setKeyword] = useState(
        searchParams.get("search") || ""
    );

    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchSidebarData = async () => {
            try {
                const results = await Promise.allSettled([
                    axios.get("http://localhost:5000/api/user/get_blog_categories"),
                    axios.get("http://localhost:5000/api/user/get_blog_tags"),
                ]);

                const [categoriesRes, tagsRes] = results;

                if (categoriesRes.status === "fulfilled") {
                    setCategories(categoriesRes.value.data.data || []);
                } else {
                    console.error("Failed to load categories", categoriesRes.reason);
                    setCategories([]);
                }

                if (tagsRes.status === "fulfilled") {
                    setTags(tagsRes.value.data.data || []);
                } else {
                    console.error("Failed to load tags", tagsRes.reason);
                    setTags([]);
                }

            } catch (error) {
                console.error("Sidebar fetch error", error);
            }
        };

        fetchSidebarData();
    }, []);


    const handleSearch = () => {
        if (!keyword.trim()) return;
        navigate(`/blog?search=${encodeURIComponent(keyword.trim())}`);
    };

    return (
        <div className="space-y-8">

            <div className="bg-[#F3F5F6] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Search</h3>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search article here"
                        className="w-full input placeholder-animate bg-white border border-gray-200 rounded-md py-3 pl-4 pr-12 text-sm focus:outline-none"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    />

                    <button
                        type="button"
                        onClick={handleSearch}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-700 hover:text-[#FB695E] transition"
                    >
                        <FiSearch size={18} />
                    </button>
                </div>
            </div>

            <div className="bg-[#F3F5F6] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Categories</h3>

                <ul className="space-y-3">
                    {categories.map((cat) => (
                        <li key={cat.id}>
                            <Link
                                to={`/blog?category=${cat.slug}`}
                                className="text-gray-700 hover:text-[#FB695E] transition text-sm"
                            >
                                {cat.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-[#F3F5F6] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Tags</h3>

                <div className="flex flex-wrap gap-3">
                    {tags.map((tag) => (
                        <Link
                            key={tag.id}
                            to={`/blog?tag=${tag.slug}`}
                            className="px-4 py-2 text-sm bg-white border border-gray-200 rounded hover:bg-[#FB695E] hover:text-white transition"
                        >
                            {tag.name}
                        </Link>
                    ))}
                </div>
            </div>

              <div className="relative overflow-hidden rounded-xl bg-[#FB695E] p-8 text-white">

             <img
                src="/Shapes/hero-shape6.png"
                alt=""
                className="hidden lg:block absolute top-24 z-50 right-[20%] w-6 pointer-events-none"
            />

            <img
                src="/Shapes/hero-shape5.png"
                alt=""
                className="hidden lg:block absolute bottom-10 z-50 right-[30%] w-8 pointer-events-none"
            />

            <h3 className="text-3xl font-bold leading-snug mb-4">
                How Can We Help You <br /> Let Us Know?
            </h3>

            <p className="text-white/90 text-base leading-relaxed mb-8">
                We understand the importance of approaching each work integrally
                and believe in the power of simple and easy communication.
            </p>

           <Link to="/contact">
                <GlitchButton
                    className="px-6 py-3 bg-black text-white hover:bg-green-700 transition"
                >
                    Contact Us
                </GlitchButton>
            </Link>

        </div>

        </div>
    );
}

export default BlogLeft;
