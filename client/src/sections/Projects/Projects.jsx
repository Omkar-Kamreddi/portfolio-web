import { useEffect, useState } from "react";

import { FaGithub } from "react-icons/fa";

import { getProjects } from "../../api/projectApi";

function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetchProjects();

    }, []);

    const fetchProjects = async () => {

        try {

            const data = await getProjects();

            setProjects(data.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <section
            id="projects"
            className="py-28 px-6 bg-gradient-to-b from-sky-50 via-white to-orange-50 relative overflow-hidden"
        >

            {/* GLOW EFFECTS */}

            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 blur-3xl rounded-full"></div>

            <div className="absolute bottom-20 right-10 w-72 h-72 bg-sky-200/30 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* TITLE */}

                <div className="text-center mb-20">

                    <p className="text-orange-500 uppercase tracking-[6px] font-semibold mb-4">
                        Portfolio
                    </p>

                    <h2 className="text-5xl md:text-6xl font-black text-slate-800">
                        My Projects
                    </h2>

                </div>

                {/* PROJECT GRID */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {projects.map((project, index) => (

                        <div
                            key={project._id}
                            className="bg-white/80 backdrop-blur-xl border border-orange-100 rounded-[32px] p-8 shadow-xl shadow-orange-100/40 hover:-translate-y-3 hover:shadow-2xl transition duration-500 group"
                        >

                            {/* PROJECT NUMBER */}

                            <div className="flex items-center justify-between mb-8">

                                <span className="text-6xl font-black text-orange-100 group-hover:text-orange-200 transition duration-300">

                                    0{index + 1}

                                </span>

                            </div>

                            {/* TITLE */}

                            <h3 className="text-3xl font-black mb-6 leading-tight text-slate-800">

                                {project.title}

                            </h3>

                            {/* DESCRIPTION */}

                            <p className="text-slate-600 leading-8 line-clamp-4 min-h-[130px]">

                                {project.description}

                            </p>

                            {/* TECH STACK */}

                            <div className="flex flex-wrap gap-3 mt-8">

                                {project.techStack.map((tech, techIndex) => (

                                    <span
                                        key={techIndex}
                                        className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium border border-orange-200"
                                    >

                                        {tech}

                                    </span>

                                ))}

                            </div>

                            {/* BUTTON */}

                            <div className="mt-10">

                                <a
                                    href="https://github.com/Omkar-Kamreddi?tab=repositories"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-3 bg-[#FDBA74] hover:bg-orange-400 text-slate-800 px-6 py-3 rounded-2xl font-semibold transition duration-300 shadow-lg shadow-orange-200"
                                >

                                    <FaGithub size={20} />

                                    View Repository

                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Projects;