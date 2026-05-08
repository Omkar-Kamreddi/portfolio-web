import { motion } from "framer-motion"

import SectionTitle from "../../components/common/SectionTitle"

function About() {

  return (

    <section
      id="about"
      className="relative px-6 overflow-hidden py-28 bg-gradient-to-b from-white via-orange-50/40 to-sky-50/40"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute rounded-full top-10 left-10 w-72 h-72 bg-orange-200/30 blur-3xl"></div>

      <div className="absolute rounded-full bottom-10 right-10 w-72 h-72 bg-sky-200/30 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        <SectionTitle
          title="About Me"
          subtitle="Introduction"
        />

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity:0, y:50 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.7 }}
            viewport={{ once:true }}
          >

            <h3 className="mb-8 text-4xl font-black leading-tight md:text-5xl text-slate-800">

              Building scalable backend systems
              with modern full stack technologies.

            </h3>

            <p className="text-lg leading-9 text-slate-600">

              I completed my B.Tech in Computer Science Engineering
              with a CGPA of <span className="font-bold text-orange-500">9.6</span>.

              I specialize in Java, Spring Boot, REST APIs,
              Hibernate, Microservices, React.js, and modern
              scalable application architecture.

              I enjoy developing clean, responsive, and
              industry-level full stack applications that
              solve real-world problems.

            </p>

            {/* TECH TAGS */}

            <div className="flex flex-wrap gap-4 mt-10">

              <span className="px-5 py-3 font-medium bg-white border border-orange-100 rounded-full shadow-md text-slate-700">
                Java
              </span>

              <span className="px-5 py-3 font-medium bg-white border border-orange-100 rounded-full shadow-md text-slate-700">
                Spring Boot
              </span>

              <span className="px-5 py-3 font-medium bg-white border border-orange-100 rounded-full shadow-md text-slate-700">
                Spring Security
              </span>

              <span className="px-5 py-3 font-medium bg-white border border-orange-100 rounded-full shadow-md text-slate-700">
                Microservices
              </span>

              <span className="px-5 py-3 font-medium bg-white border border-orange-100 rounded-full shadow-md text-slate-700">
                SQL
              </span>

              <span className="px-5 py-3 font-medium bg-white border border-orange-100 rounded-full shadow-md text-slate-700">
                PL/SQL
              </span>

              <span className="px-5 py-3 font-medium bg-white border border-orange-100 rounded-full shadow-md text-slate-700">
                React
              </span>

              <span className="px-5 py-3 font-medium bg-white border border-orange-100 rounded-full shadow-md text-slate-700">
                REST APIs
              </span>

            </div>

          </motion.div>

          {/* RIGHT STATS */}

          <motion.div
            initial={{ opacity:0, y:50 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}
            className="grid grid-cols-2 gap-5 sm:gap-8"
          >

            {/* CARD 1 */}

            <div className="p-5 overflow-hidden text-center transition duration-300 border border-orange-100 shadow-xl bg-white/80 backdrop-blur-xl rounded-3xl sm:p-8 hover:-translate-y-2">

              <h4 className="mb-4 text-4xl font-black text-transparent sm:text-5xl bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text">
                9.6
              </h4>

              <p className="text-base font-medium text-slate-600 sm:text-lg">
                CGPA
              </p>

            </div>

            {/* CARD 2 */}

            <div className="p-5 overflow-hidden text-center transition duration-300 border border-orange-100 shadow-xl bg-white/80 backdrop-blur-xl rounded-3xl sm:p-8 hover:-translate-y-2">

              <h4 className="mb-4 text-4xl font-black text-transparent sm:text-5xl bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text">
                3+
              </h4>

              <p className="text-base font-medium text-slate-600 sm:text-lg">
                Projects
              </p>

            </div>

            {/* CARD 3 */}

            <div className="p-5 overflow-hidden text-center transition duration-300 border border-orange-100 shadow-xl bg-white/80 backdrop-blur-xl rounded-3xl sm:p-8 hover:-translate-y-2">

              <h4 className="mb-4 text-3xl font-black text-transparent break-words sm:text-5xl bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text">
                Java
              </h4>

              <p className="text-base font-medium text-slate-600 sm:text-lg">
                Backend
              </p>

            </div>

            {/* CARD 4 */}

            <div className="p-5 overflow-hidden text-center transition duration-300 border border-orange-100 shadow-xl bg-white/80 backdrop-blur-xl rounded-3xl sm:p-8 hover:-translate-y-2">

              <h4 className="mb-4 text-3xl font-black text-transparent break-words sm:text-5xl bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text">
                MERN
              </h4>

              <p className="text-base font-medium text-slate-600 sm:text-lg">
                Full Stack
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default About