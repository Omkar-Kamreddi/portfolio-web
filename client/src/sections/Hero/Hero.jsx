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
            className="relative flex items-center min-h-screen px-5 pt-24 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-sky-100"
        >
            {/* BACKGROUND GLOWS */}

            <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-orange-300/30 blur-3xl"></div>

            <div className="absolute rounded-full bottom-10 right-10 w-80 h-80 bg-sky-300/30 blur-3xl"></div>

            <div className="relative z-10 grid items-center gap-20 mx-auto max-w-7xl lg:grid-cols-2">
                {/* LEFT CONTENT */}

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="mb-6 text-2xl font-semibold tracking-wide text-orange-500">
                        Hello, I’m
                    </p>

                    <h1 className="text-6xl font-black leading-none md:text-8xl">
                        <span className="text-slate-800">Omkar</span>

                        <br />

                        <span className="text-transparent bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-400 bg-clip-text">
                            Kamreddi
                        </span>
                    </h1>

                    <h2 className="mt-8 text-3xl font-semibold md:text-4xl">
                        <span className="text-transparent bg-gradient-to-r from-orange-500 to-sky-500 bg-clip-text">
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

                    <p className="max-w-2xl mt-8 text-lg leading-9 text-slate-600">
                        I build scalable backend systems with Java,
                        Spring Boot, and Microservices while crafting
                        modern responsive frontend applications using React.
                    </p>

                    {/* BUTTONS */}

                    <div className="flex flex-wrap gap-5 mt-10">
                        <a
                            href={resume}
                            download="Omkar_Kamreddi_Resume.pdf"
                            className="flex items-center gap-3 px-8 py-4 font-semibold transition duration-300 shadow-lg bg-gradient-to-r from-orange-400 to-yellow-300 hover:scale-105 text-slate-900 rounded-2xl shadow-orange-200"
                        >
                            <HiArrowDownTray size={22} />

                            Download Resume
                        </a>

                        <a
                            href={resume}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 px-8 py-4 transition duration-300 border border-orange-300 bg-white/70 backdrop-blur-md hover:bg-orange-100 rounded-2xl text-slate-700"
                        >
                            View Resume
                        </a>
                    </div>

                    {/* SOCIAL LINKS */}

                    <div className="flex items-center gap-6 mt-14">
                        <a
                            href="https://github.com/Omkar-Kamreddi"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center text-2xl transition duration-300 border border-orange-100 rounded-full shadow-md w-14 h-14 bg-white/70 backdrop-blur-md hover:border-orange-400 text-slate-700 hover:text-orange-500"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com/in/omkar-kamreddi"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center text-2xl transition duration-300 border border-orange-100 rounded-full shadow-md w-14 h-14 bg-white/70 backdrop-blur-md hover:border-orange-400 text-slate-700 hover:text-orange-500"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="mailto:omkarkamreddi8@gmail.com"
                            className="flex items-center justify-center text-2xl transition duration-300 border border-orange-100 rounded-full shadow-md w-14 h-14 bg-white/70 backdrop-blur-md hover:border-orange-400 text-slate-700 hover:text-orange-500"
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

                        <div className="absolute inset-0 rounded-full bg-orange-300/30 blur-3xl"></div>

                        {/* IMAGE */}

                        <div className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full overflow-hidden border-[8px] border-white shadow-[0_20px_80px_rgba(251,146,60,0.35)]">
                            <img
                                src={profile}
                                alt="Omkar"
                                className="object-cover object-top w-full h-full scale-110"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;