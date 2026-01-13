import { useEffect, useState } from "react";
import axios from "axios";
import GlitchButton from "../../components/GlitchButton";
import { toast } from "sonner";

function BlogCommentForm({ blogId }) {
    const [comments, setComments] = useState([]);
    const [loadingComments, setLoadingComments] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        comment: "",
        agree_terms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.agree_terms) {
            toast.error("Please agree to data collection terms");
            return;
        }

        try {
            await axios.post(
                "http://localhost:5000/api/user/add_blog_comments",
                {
                    blog_id: blogId,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    comment: formData.comment,
                    agree_terms: formData.agree_terms ? 1 : 0,
                }
            );

            toast.success("Comment submitted successfully");

            setFormData({
                name: "",
                email: "",
                phone: "",
                comment: "",
                agree_terms: false,
            });
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };


    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5000/api/user/get_blog_comments/${blogId}`
                );
                setComments(res.data.data || []);
            } catch (error) {
                console.error(error);
                setComments([]);
            } finally {
                setLoadingComments(false);
            }
        };

        if (blogId) {
            fetchComments();
        }
    }, [blogId]);


    return (
        <div className="mt-16">
            <div className="mt-16">

                <h2 className="text-2xl font-bold mb-4">
                    Comments
                </h2>

                {!loadingComments && comments.length === 0 && (
                    <p className="text-gray-600 ">
                        No comments yet.
                    </p>
                )}

                {comments.length > 0 && (
                    <div className="space-y-6">
                        {comments.map((item) => (
                            <div
                                key={item.id}
                                className="border-b border-gray-200 pb-6"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-semibold text-gray-900">
                                        {item.name}
                                    </h4>

                                    <span className="text-sm text-gray-500">
                                        {new Date(item.created_at).toLocaleDateString(
                                            "en-GB",
                                            {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            }
                                        )}
                                    </span>
                                </div>

                                <p className="text-gray-700 leading-relaxed">
                                    {item.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <h2 className="text-2xl font-bold my-6">
                Leave A Comment
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input placeholder-animate bg-[#F3F5F6]"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input placeholder-animate bg-[#F3F5F6]"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone No"
                    className="input placeholder-animate bg-[#F3F5F6]"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <textarea
                    name="comment"
                    placeholder="Your comments here"
                    rows="5"
                    className="input placeholder-animate bg-[#F3F5F6] resize-none"
                    value={formData.comment}
                    onChange={handleChange}
                    required
                />

                <label className="flex items-center gap-3 text-sm text-gray-700">
                    <input
                        type="checkbox"
                        name="agree_terms"
                        checked={formData.agree_terms}
                        onChange={handleChange}
                    />
                    I agree that my submitted data is being{" "}
                    <span className="text-blue-600 cursor-pointer">
                        collected and stored
                    </span>
                </label>

                <GlitchButton
                    type="submit"
                    className="px-8 py-4 text-base bg-[#FB695E] text-white hover:bg-[#3CB879] transition"
                >
                    Post Comment
                </GlitchButton>

            </form>
        </div>

    );
}

export default BlogCommentForm;
