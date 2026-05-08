import SectionTitle from "../../components/common/SectionTitle";

// LOGOS

import javaLogo from "../../assets/logo/java.png";
import springMvcLogo from "../../assets/logo/spring-mvc.png";
import springBootLogo from "../../assets/logo/spring-boot.png";
import springSecurityLogo from "../../assets/logo/spring-security.jpg";
import jwtLogo from "../../assets/logo/jwt.png";
import microserviceLogo from "../../assets/logo/microservice.png";
import webLogo from "../../assets/logo/web.jpg";
import reactLogo from "../../assets/logo/react.png";
import mernLogo from "../../assets/logo/mern.png";
import mongoLogo from "../../assets/logo/Mongodb.png";
import sqlLogo from "../../assets/logo/SQL.png";
import plsqlLogo from "../../assets/logo/Pl-Sql.png";
import postgresLogo from "../../assets/logo/postgreSql.png";
import gitLogo from "../../assets/logo/git.png";
import githubLogo from "../../assets/logo/github.png";
import dockerLogo from "../../assets/logo/docker.png";

const skills = [

    javaLogo,
    springMvcLogo,
    springBootLogo,
    springSecurityLogo,
    jwtLogo,
    microserviceLogo,
    webLogo,
    reactLogo,
    mernLogo,
    mongoLogo,
    sqlLogo,
    plsqlLogo,
    postgresLogo,
    gitLogo,
    githubLogo,
    dockerLogo,
];

function Skills() {

    return (

        <section
            id="skills"
            className="relative py-24 overflow-hidden  bg-gradient-to-b from-orange-50 via-white to-sky-50"
        >

            {/* BACKGROUND GLOW */}

            <div
                className="absolute left-0 rounded-full  top-20 w-72 h-72 bg-orange-200/30 blur-3xl"
            ></div>

            <div
                className="absolute right-0 rounded-full  bottom-10 w-72 h-72 bg-sky-200/30 blur-3xl"
            ></div>

            {/* CONTENT */}

            <div className="relative z-10 w-full">

                {/* TITLE */}

                <div className="px-4 mx-auto max-w-7xl">

                    <SectionTitle
                        title="My Technical Skills"
                        subtitle="Skills & Technologies"
                    />

                </div>

                {/* FULL WIDTH CAROUSEL */}

                <div
                    className="relative w-screen mt-16 overflow-hidden -translate-x-1/2  left-1/2"
                >

                    {/* LEFT FADE */}

                    <div
                        className="absolute top-0 left-0 z-20 w-16 h-full  sm:w-24 bg-gradient-to-r from-orange-50 to-transparent"
                    ></div>

                    {/* RIGHT FADE */}

                    <div
                        className="absolute top-0 right-0 z-20 w-16 h-full  sm:w-24 bg-gradient-to-l from-sky-50 to-transparent"
                    ></div>

                    {/* TRACK */}

                    <div
                        className="flex gap-5 px-4  carousel sm:gap-6 w-max"
                    >

                        {[...skills, ...skills].map((skill, index) => (

                            <div
                                key={index}
                                className="
                                min-w-[110px]
                                sm:min-w-[140px]
                                md:min-w-[170px]

                                h-[110px]
                                sm:h-[140px]
                                md:h-[170px]

                                rounded-[28px]

                                bg-white/80
                                backdrop-blur-xl

                                border
                                border-orange-100

                                shadow-xl
                                shadow-orange-100/20

                                flex
                                items-center
                                justify-center

                                transition-all
                                duration-500

                                hover:-translate-y-3
                                hover:scale-105

                                hover:shadow-2xl
                                hover:shadow-orange-200/40
                                "
                            >

                                <img
                                    src={skill}
                                    alt="skill"
                                    className="
                                    w-[50px]
                                    h-[50px]

                                    sm:w-[70px]
                                    sm:h-[70px]

                                    md:w-[90px]
                                    md:h-[90px]

                                    object-contain

                                    transition-all
                                    duration-500

                                    hover:scale-110
                                    "
                                />

                            </div>

                        ))}

                    </div>

                </div>

            </div>

            {/* ANIMATION */}

            <style jsx>{`

                .carousel {
                    animation: scroll 30s linear infinite;
                }

                .carousel:hover {
                    animation-play-state: paused;
                }

                @keyframes scroll {

                    from {
                        transform: translateX(0);
                    }

                    to {
                        transform: translateX(-50%);
                    }
                }

            `}</style>

        </section>
    );
}

export default Skills;