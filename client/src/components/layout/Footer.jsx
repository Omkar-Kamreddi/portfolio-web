import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";

function Footer() {

    return (

        <footer className="relative overflow-hidden bg-gradient-to-b from-white to-orange-50 border-t border-orange-100 py-16 px-6">

            {/* GLOW EFFECTS */}

            <div className="absolute top-0 left-20 w-72 h-72 bg-orange-200/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-20 w-72 h-72 bg-sky-200/20 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto text-center relative z-10">

                {/* NAME */}

                <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-400 bg-clip-text text-transparent">

                    Omkar Kamreddi

                </h2>

                {/* ROLE */}

                <p className="text-slate-600 text-xl mt-6 font-medium">

                    Java Full Stack Developer

                </p>

                {/* DESCRIPTION */}

                <p className="text-slate-500 mt-6 max-w-2xl mx-auto leading-8">

                    Passionate about building scalable backend systems,
                    responsive web applications, and clean modern user experiences.

                </p>

                {/* SOCIAL LINKS */}

                <div className="flex items-center justify-center gap-6 mt-10">

                    <a
                        href="https://github.com/Omkar-Kamreddi"
                        target="_blank"
                        rel="noreferrer"
                        className="w-14 h-14 rounded-full bg-white border border-orange-100 hover:border-orange-400 flex items-center justify-center text-2xl text-slate-700 hover:text-orange-500 transition duration-300 shadow-md hover:-translate-y-1"
                    >

                        <FaGithub />

                    </a>

                    <a
                        href="https://linkedin.com/in/omkar-kamreddi"
                        target="_blank"
                        rel="noreferrer"
                        className="w-14 h-14 rounded-full bg-white border border-orange-100 hover:border-orange-400 flex items-center justify-center text-2xl text-slate-700 hover:text-orange-500 transition duration-300 shadow-md hover:-translate-y-1"
                    >

                        <FaLinkedin />

                    </a>

                    <a
                        href="mailto:omkarkamreddi8@gmail.com"
                        className="w-14 h-14 rounded-full bg-white border border-orange-100 hover:border-orange-400 flex items-center justify-center text-2xl text-slate-700 hover:text-orange-500 transition duration-300 shadow-md hover:-translate-y-1"
                    >

                        <FaEnvelope />

                    </a>

                </div>

                {/* COPYRIGHT */}

                <div className="mt-12 pt-8 border-t border-orange-100">

                    <p className="text-slate-500 text-sm">

                        © 2026 Omkar Kamreddi. All Rights Reserved.

                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;