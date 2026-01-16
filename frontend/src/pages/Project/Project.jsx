import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { FiArrowRight } from "react-icons/fi";

function Project() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:5000/api/user/get_projects"
                );

                if (res.data?.data) {
                    setProjects(res.data.data);
                }
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <>
            <Breadcrumb title="Projects" />

            <section className="py-16 px-3 xl:px-0">
                <div className="wrapper">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Our Successful Projects
                    </h2>

                    {loading ? (
                        <div className="text-center text-gray-500">
                            Loading projects...
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
                                >
                                    <div className="h-80 overflow-hidden">
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-600 mb-6">
                                            {project.short_description}
                                        </p>

                                        <Link
                                            to={`/project-details/${project.slug}`}
                                            className="inline-flex items-center gap-2 text-[#3B6EF5] font-semibold transition-all duration-300 hover:gap-3 "
                                        >
                                            Learn More
                                            <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Project;
