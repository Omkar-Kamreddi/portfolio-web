import SectionTitle from "../../components/common/SectionTitle";
import { motion } from "framer-motion";

import { ServerCog } from "lucide-react";

import {
    FaJava,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaDatabase,
} from "react-icons/fa";

import {
    SiSpringboot,
    SiSpringsecurity,
} from "react-icons/si";

const skillsLeft = [
    {
        name: "Java",
        percentage: 95,
        icon: <FaJava />,
    },

    {
        name: "Spring MVC",
        percentage: 90,
        icon: <SiSpringboot />,
    },

    {
        name: "Spring Boot",
        percentage: 93,
        icon: <SiSpringboot />,
    },

    {
        name: "Spring Security",
        percentage: 85,
        icon: <SiSpringsecurity />,
    },

    {
        name: "Microservices",
        percentage: 85,
        icon: <ServerCog size={28} />,
    },

    {
        name: "SQL",
        percentage: 90,
        icon: <FaDatabase />,
    },
];

const skillsRight = [
    {
        name: "PL/SQL",
        percentage: 80,
        icon: <FaDatabase />,
    },

    {
        name: "HTML",
        percentage: 75,
        icon: <FaHtml5 />,
    },

    {
        name: "CSS",
        percentage: 80,
        icon: <FaCss3Alt />,
    },

    {
        name: "JavaScript",
        percentage: 85,
        icon: <FaJs />,
    },

    {
        name: "React JS",
        percentage: 80,
        icon: <FaReact />,
    },
];

function Skills() {

    return (

        <section
            id="skills"
            className="py-28 px-6 bg-gradient-to-b from-orange-50 via-white to-sky-50 relative overflow-hidden"
        >

            {/* GLOW EFFECTS */}

            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-20 right-10 w-72 h-72 bg-sky-200/20 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                <SectionTitle
                    title="My Technical Skills"
                    subtitle="My Skills"
                />

                {/* SKILLS CONTAINER */}

                <div className="bg-white/80 backdrop-blur-xl border border-orange-100 rounded-[40px] p-8 md:p-14 shadow-2xl shadow-orange-100/40">

                    <div className="grid lg:grid-cols-2 gap-14">

                        {/* LEFT */}

                        <div className="space-y-10">

                            {skillsLeft.map((skill, index) => (

                                <div
                                    key={index}
                                    className="group"
                                >

                                    {/* TOP */}

                                    <div className="flex items-center justify-between mb-4">

                                        <div className="flex items-center gap-4">

                                            {/* ICON */}

                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-yellow-100 border border-orange-200 flex items-center justify-center text-orange-500 text-2xl shadow-md group-hover:scale-110 transition duration-300">

                                                {skill.icon}

                                            </div>

                                            {/* NAME */}

                                            <h3 className="text-2xl font-semibold text-slate-700">

                                                {skill.name}

                                            </h3>

                                        </div>

                                        {/* PERCENTAGE */}

                                        <span className="text-xl font-bold text-orange-500">

                                            {skill.percentage}%

                                        </span>

                                    </div>

                                    {/* PROGRESS BAR */}

                                    <div className="w-full h-4 bg-orange-100 rounded-full overflow-hidden">

                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{
                                                width: `${skill.percentage}%`,
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                ease: "easeOut",
                                            }}
                                            viewport={{ once: true }}
                                            className="h-full bg-[#FDBA74] rounded-full shadow-md shadow-[0_0_20px_rgba(251,186,116,0.5)]"
                                        />

                                    </div>

                                </div>

                            ))}

                        </div>

                        {/* RIGHT */}

                        <div className="space-y-10">

                            {skillsRight.map((skill, index) => (

                                <div
                                    key={index}
                                    className="group"
                                >

                                    {/* TOP */}

                                    <div className="flex items-center justify-between mb-4">

                                        <div className="flex items-center gap-4">

                                            {/* ICON */}

                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-yellow-100 border border-orange-200 flex items-center justify-center text-orange-500 text-2xl shadow-md group-hover:scale-110 transition duration-300">

                                                {skill.icon}

                                            </div>

                                            {/* NAME */}

                                            <h3 className="text-2xl font-semibold text-slate-700">

                                                {skill.name}

                                            </h3>

                                        </div>

                                        {/* PERCENTAGE */}

                                        <span className="text-xl font-bold text-orange-500">

                                            {skill.percentage}%

                                        </span>

                                    </div>

                                    {/* PROGRESS BAR */}

                                    <div className="w-full h-4 bg-orange-100 rounded-full overflow-hidden">

                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{
                                                width: `${skill.percentage}%`,
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                ease: "easeOut",
                                            }}
                                            viewport={{ once: true }}
                                            className="h-full bg-[#FDBA74] rounded-full shadow-md shadow-[0_0_20px_rgba(251,186,116,0.5)]"
                                        />

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Skills;