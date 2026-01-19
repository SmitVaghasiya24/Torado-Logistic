import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "../../components/Breadcrumb";

function ProjectDetails() {
    const { slug } = useParams();

    const [project, setProject] = useState(null);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/user/get_project/${slug}`)
            .then(res => {
                if (res.data.success) {
                    setProject(res.data.data);
                }
            });

        axios
            .get("http://localhost:5000/api/user/get_projects")
            .then(res => {
                if (res.data.success) {
                    setProjects(res.data.data);
                }
            });
    }, [slug]);

    if (!project || !projects.length) return null;

    const currentIndex = projects.findIndex(p => p.slug === slug);
    const prevProject = projects[currentIndex - 1];
    const nextProject = projects[currentIndex + 1];

    return (
        <>
            <Breadcrumb title="Project Details" />
            <div className="py-10 sm:py-12 px-3 sm:px-6 xl:px-0">


                <div className="max-w-4xl mx-auto mt-6 sm:mt-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-4 sm:mb-6">
                        {project.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                        <span>
                            <strong className="text-black">Duration:</strong>{" "}
                            {project.duration}
                        </span>

                        <span className="text-red-500 hidden sm:inline">—</span>

                        <span>
                            <strong className="text-black">Budget:</strong> ${project.budget}
                        </span>
                    </div>

                    <div className="rounded-xl overflow-hidden">
                        <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-55 sm:h-80 md:h-95 lg:h-105 object-cover"
                        />
                    </div>
                    <div className=" mt-14 space-y-12">

                        <div className="relative bg-[#F7F8F9] rounded-lg p-7 pl-9 border-l-2 border-blue-600">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">

                                <h4 className="font-bold text-black text-base sm:w-1/6">
                                    Customer
                                </h4>

                                <p className="text-gray-600 text-base leading-relaxed sm:w-3/4">
                                    Torado is a leading logistics company dedicated to providing comprehensive
                                    and efficient solutions for businesses of all sizes. With our extensive
                                    industry experience and commitment to excellence.
                                </p>

                            </div>
                        </div>

                        <div className="text-gray-600 text-base leading-relaxed space-y-5">
                            <p>
                                Torado is a leading logistics company dedicated to providing comprehensive and efficient solutions for businesses of all sizes. With our extensive industry experience and commitment to excellence.
                            </p>
                            <p>
                                Our client's requirement varies from seeking single service or bundled packages for customs clearance, airport cargo collections, or drop-offs to final mile connections and management of final mile to the customer door or just performing the full operational spec through consolidation and fulfillment.
                            </p>
                        </div>
                        <div className="relative bg-[#F7F8F9] rounded-lg p-7 pl-9 border-l-2 border-red-600">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">

                                <h4 className="font-semibold text-black text-base sm:w-1/6">
                                    Challenge
                                </h4>

                                <p className="text-gray-600 text-base leading-relaxed sm:w-3/4">
                                    Torado is a leading logistics company dedicated to providing comprehensive
                                    and efficient solutions for businesses of all sizes. With our extensive
                                    industry experience and commitment to excellence.
                                </p>

                            </div>
                        </div>

                        <ul className="space-y-4 pl-2">
                            {[
                                "Optimizing supply chains",
                                "Streamlining operations to ensure seamless transportation",
                                "Extensive industry-level experience",
                                "A commitment to excellence",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-base text-gray-700">
                                    <span className="text-blue-600 mt-0.5">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="relative bg-[#F7F8F9] rounded-lg p-7 pl-9 border-l-2 border-green-600">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">

                                <h4 className="font-semibold text-black text-base sm:w-1/6">
                                    Solution
                                </h4>

                                <p className="text-gray-600 text-base leading-relaxed sm:w-3/4">
                                    Torado is a leading logistics company dedicated to providing comprehensive
                                    and efficient solutions for businesses of all sizes. With our extensive
                                    industry experience and commitment to excellence.
                                </p>

                            </div>
                        </div>

                        <div className="text-gray-600 text-base leading-relaxed space-y-5">
                            <p>
                                Torado is a leading logistics company dedicated to providing comprehensive and efficient solutions for businesses of all sizes. With our extensive industry experience and commitment to excellence.
                            </p>
                            <p>
                                Our client's requirement varies from seeking single service or bundled packages for customs clearance, airport cargo collections, or drop-offs to final mile connections and management of final mile to the customer door or just performing the full operational spec through consolidation and fulfillment.
                            </p>
                        </div>


                        <div className=" mt-10 space-y-10">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full h-65 sm:h-80 object-cover rounded-xl"
                                />

                                <img
                                    src='/Blog/blog-details4.jpg'
                                    alt={project.title}
                                    className="w-full h-65 sm:h-80 object-cover rounded-xl"
                                />
                            </div>

                            <p className="text-gray-600 text-base leading-relaxed">
                                cargo collections, or drop-offs to final mile connections and
                                management of final mile to the customer door or just performing
                                the full operational spec through consolidation and fulfillment.
                            </p>

                            <div className="flex items-center justify-between pt-4">
                                {prevProject ? (
                                    <Link
                                        to={`/project-details/${prevProject.slug}`}
                                        className="flex font-bold items-center gap-2 text-sm uppercase tracking-widest text-orange-500"
                                    >
                                        ← Previous Project
                                    </Link>
                                ) : <span />}

                                {nextProject ? (
                                    <Link
                                        to={`/project-details/${nextProject.slug}`}
                                        className="flex font-bold items-center gap-2 text-sm uppercase tracking-widest text-orange-500"
                                    >
                                        Next Project →
                                    </Link>
                                ) : <span />}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ProjectDetails;
