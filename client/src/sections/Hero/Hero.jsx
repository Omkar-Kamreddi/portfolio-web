import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { HiArrowDownTray } from "react-icons/hi2";

import profile from "../../assets/profile.jpeg";

import resume from "../../assets/CV_Omkar_Kamreddi_2026.pdf";

function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-sky-100 flex items-center px-6 pt-24"
        >
            {/* BACKGROUND GLOWS */}

            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/30 blur-3xl rounded-full"></div>

            <div className="absolute bottom-10 right-10 w-80 h-80 bg-sky-300/30 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
                {/* LEFT CONTENT */}

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-orange-500 text-2xl mb-6 font-semibold tracking-wide">
                        Hello, I’m
                    </p>

                    <h1 className="text-6xl md:text-8xl font-black leading-none">
                        <span className="text-slate-800">Omkar</span>

                        <br />

                        <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            Kamreddi
                        </span>
                    </h1>

                    <h2 className="text-3xl md:text-4xl font-semibold mt-8">
                        <span className="bg-gradient-to-r from-orange-500 to-sky-500 bg-clip-text text-transparent">
                            <Typewriter
                                words={[
                                    "Java Developer",
                                    "Spring Boot Developer",
                                    "Backend Developer",
                                    "Full Stack Developer",
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </h2>

                    <p className="text-slate-600 text-lg leading-9 mt-8 max-w-2xl">
                        I build scalable backend systems with Java,
                        Spring Boot, and Microservices while crafting
                        modern responsive frontend applications using React.
                    </p>

                    {/* BUTTONS */}

                    <div className="flex flex-wrap gap-5 mt-10">
                        <a
                            href={resume}
                            download="Omkar_Kamreddi_Resume.pdf"
                            className="bg-gradient-to-r from-orange-400 to-yellow-300 hover:scale-105 text-slate-900 font-semibold px-8 py-4 rounded-2xl transition duration-300 flex items-center gap-3 shadow-lg shadow-orange-200"
                        >
                            <HiArrowDownTray size={22} />

                            Download Resume
                        </a>

                        <a
                            href={resume}
                            target="_blank"
                            rel="noreferrer"
                            className="border border-orange-300 bg-white/70 backdrop-blur-md hover:bg-orange-100 px-8 py-4 rounded-2xl transition duration-300 flex items-center gap-3 text-slate-700"
                        >
                            View Resume
                        </a>
                    </div>

                    {/* SOCIAL LINKS */}

                    <div className="flex items-center gap-6 mt-14 mb-3">
                        <a
                            href="https://github.com/Omkar-Kamreddi"
                            target="_blank"
                            rel="noreferrer"
                            className="w-14 h-14 rounded-full bg-white/70 backdrop-blur-md border border-orange-100 hover:border-orange-400 flex items-center justify-center text-2xl text-slate-700 hover:text-orange-500 transition duration-300 shadow-md"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com/in/omkar-kamreddi"
                            target="_blank"
                            rel="noreferrer"
                            className="w-14 h-14 rounded-full bg-white/70 backdrop-blur-md border border-orange-100 hover:border-orange-400 flex items-center justify-center text-2xl text-slate-700 hover:text-orange-500 transition duration-300 shadow-md"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="mailto:omkarkamreddi8@gmail.com"
                            className="w-14 h-14 rounded-full bg-white/70 backdrop-blur-md border border-orange-100 hover:border-orange-400 flex items-center justify-center text-2xl text-slate-700 hover:text-orange-500 transition duration-300 shadow-md"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT IMAGE */}

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    <div className="relative">
                        {/* IMAGE GLOW */}

                        <div className="absolute inset-0 bg-orange-300/30 blur-3xl rounded-full"></div>

                        {/* IMAGE */}

                        <div className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full overflow-hidden border-[8px] border-white shadow-[0_20px_80px_rgba(251,146,60,0.35)]">
                            <img
                                src={profile}
                                alt="Omkar"
                                className="w-full h-full object-cover object-top scale-110"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;