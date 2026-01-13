import { useEffect, useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import GlitchButton from "../../components/GlitchButton";
import LetUsKnow from "../../components/LetUsKnow";
function BlogSidebar({ currentSlug }) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [keyword, setKeyword] = useState(
        searchParams.get("search") || ""
    );

    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [latestBlogs, setLatestBlogs] = useState([]);


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

    useEffect(() => {
        const fetchLatestBlogs = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:5000/api/user/get_blogs?limit=4"
                );

                const filtered = res.data.data
                    .filter((b) => b.slug !== currentSlug)
                    .slice(0, 3);

                setLatestBlogs(filtered);
            } catch (error) {
                console.error("Latest blogs error", error);
            }
        };

        if (currentSlug) {
            fetchLatestBlogs();
        }
    }, [currentSlug]);



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

            {latestBlogs.length > 0 && (
                <div className="bg-[#F3F5F6] rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-6">
                        Latest Articles
                    </h3>

                    <div className="space-y-6">
                        {latestBlogs.map((item) => (
                            <Link
                                key={item.id}
                                to={`/blog/${item.slug}`}
                                className="flex items-start gap-4 group"
                            >
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-16 h-16 object-cover rounded"
                                />

                                <div>
                                    <span className="block text-xs text-[#FB695E] mb-1">
                                        {new Date(item.published_date).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </span>

                                    <p className="text-sm font-medium text-gray-900 group-hover:text-[#FB695E] transition">
                                        {item.title.length > 55
                                            ? item.title.slice(0, 55) + "..."
                                            : item.title}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}


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

            <LetUsKnow/>

        </div>
    );
}

export default BlogSidebar;
