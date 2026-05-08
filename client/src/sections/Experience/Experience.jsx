import { motion } from "framer-motion";

import {
    Briefcase,
    CalendarDays
} from "lucide-react";

import SectionTitle from "../../components/common/SectionTitle";

function Experience() {

    return (

        <section
            id="experience"
            className="py-28 px-6 bg-gradient-to-b from-orange-50 via-white to-sky-50 relative overflow-hidden"
        >

            {/* GLOW EFFECTS */}

            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 blur-3xl rounded-full"></div>

            <div className="absolute bottom-20 right-10 w-72 h-72 bg-sky-200/30 blur-3xl rounded-full"></div>

            <div className="max-w-5xl mx-auto relative z-10">

                <SectionTitle
                    title="Experience"
                    subtitle="Internship"
                />

                {/* TIMELINE */}

                <div className="relative border-l-4 border-orange-200 ml-4 md:ml-10 pl-10 space-y-16">

                    {/* EXPERIENCE CARD */}

                    <motion.div
                        initial={{ opacity:0, y:50 }}
                        whileInView={{ opacity:1, y:0 }}
                        transition={{ duration:0.7 }}
                        viewport={{ once:true }}
                        className="relative"
                    >

                        {/* TIMELINE DOT */}

                        <div className="absolute -left-[57px] top-2 w-7 h-7 rounded-full bg-[#FDBA74] border-4 border-white shadow-lg"></div>

                        {/* CARD */}

                        <div className="bg-white/80 backdrop-blur-xl border border-orange-100 rounded-[32px] p-8 shadow-2xl shadow-orange-100/40 hover:-translate-y-2 transition duration-300">

                            {/* TOP */}

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                                {/* ROLE */}

                                <div>

                                    <div className="flex items-center gap-4 mb-4">

                                        <div className="w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-500 shadow-md">

                                            <Briefcase size={28} />

                                        </div>

                                        <div>

                                            <h3 className="text-3xl font-black text-slate-800">

                                                Java Full Stack Developer Intern

                                            </h3>

                                            <p className="text-orange-500 font-semibold mt-2">

                                                QSpiders, Pune

                                            </p>

                                        </div>

                                    </div>

                                </div>

                                {/* DATE */}

                                <div className="flex items-center gap-3 bg-orange-100 px-5 py-3 rounded-2xl border border-orange-200 w-fit">

                                    <CalendarDays
                                        size={20}
                                        className="text-orange-500"
                                    />

                                    <span className="text-slate-700 font-semibold">

                                        Jan 2025 - Feb 2026

                                    </span>

                                </div>

                            </div>

                            {/* DESCRIPTION */}

                            <p className="text-slate-600 mt-8 leading-9 text-lg">

                                Worked on scalable backend applications
                                using Java, Spring Boot, Hibernate,
                                REST APIs, and Microservices architecture.

                                Built responsive full stack applications,
                                optimized database operations, and implemented
                                clean backend architecture using modern
                                development practices.

                            </p>

                            {/* TECH STACK */}

                            <div className="flex flex-wrap gap-4 mt-10">

                                <span className="px-5 py-3 rounded-full bg-orange-100 border border-orange-200 text-orange-600 font-medium">
                                    Spring Boot
                                </span>

                                <span className="px-5 py-3 rounded-full bg-orange-100 border border-orange-200 text-orange-600 font-medium">
                                    REST APIs
                                </span>

                                <span className="px-5 py-3 rounded-full bg-orange-100 border border-orange-200 text-orange-600 font-medium">
                                    Hibernate
                                </span>

                                <span className="px-5 py-3 rounded-full bg-orange-100 border border-orange-200 text-orange-600 font-medium">
                                    Microservices
                                </span>

                                <span className="px-5 py-3 rounded-full bg-orange-100 border border-orange-200 text-orange-600 font-medium">
                                    PostgreSQL
                                </span>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}

export default Experience;