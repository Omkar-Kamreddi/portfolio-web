import { motion } from "framer-motion"

import SectionTitle from "../../components/common/SectionTitle"

function About() {

  return (

    <section
      id="about"
      className="py-28 px-6 bg-gradient-to-b from-white via-orange-50/40 to-sky-50/40 relative overflow-hidden"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200/30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-sky-200/30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <SectionTitle
          title="About Me"
          subtitle="Introduction"
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity:0, y:50 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.7 }}
            viewport={{ once:true }}
          >

            <h3 className="text-4xl md:text-5xl font-black leading-tight text-slate-800 mb-8">

              Building scalable backend systems
              with modern full stack technologies.

            </h3>

            <p className="text-slate-600 leading-9 text-lg">

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

              <span className="px-5 py-3 rounded-full bg-white border border-orange-100 shadow-md text-slate-700 font-medium">
                Java
              </span>

              <span className="px-5 py-3 rounded-full bg-white border border-orange-100 shadow-md text-slate-700 font-medium">
                Spring Boot
              </span>

              <span className="px-5 py-3 rounded-full bg-white border border-orange-100 shadow-md text-slate-700 font-medium">
                Spring Security
              </span>

              <span className="px-5 py-3 rounded-full bg-white border border-orange-100 shadow-md text-slate-700 font-medium">
                Microservices
              </span>

              <span className="px-5 py-3 rounded-full bg-white border border-orange-100 shadow-md text-slate-700 font-medium">
                SQL
              </span>

              <span className="px-5 py-3 rounded-full bg-white border border-orange-100 shadow-md text-slate-700 font-medium">
                PL/SQL
              </span>
            
              <span className="px-5 py-3 rounded-full bg-white border border-orange-100 shadow-md text-slate-700 font-medium">
                React
              </span>

              <span className="px-5 py-3 rounded-full bg-white border border-orange-100 shadow-md text-slate-700 font-medium">
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
            className="grid grid-cols-2 gap-8"
          >

            {/* CARD 1 */}

            <div className="bg-white/80 backdrop-blur-xl border border-orange-100 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300">

              <h4 className="text-5xl font-black bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent mb-4">
                9.6
              </h4>

              <p className="text-slate-600 text-lg font-medium">
                CGPA
              </p>

            </div>

            {/* CARD 2 */}

            <div className="bg-white/80 backdrop-blur-xl border border-orange-100 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300">

              <h4 className="text-5xl font-black bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent mb-4">
                3+
              </h4>

              <p className="text-slate-600 text-lg font-medium">
                Projects
              </p>

            </div>

            {/* CARD 3 */}

            <div className="bg-white/80 backdrop-blur-xl border border-orange-100 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300">

              <h4 className="text-5xl font-black bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent mb-4">
                Java
              </h4>

              <p className="text-slate-600 text-lg font-medium">
                Backend
              </p>

            </div>

            {/* CARD 4 */}

            <div className="bg-white/80 backdrop-blur-xl border border-orange-100 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300">

              <h4 className="text-5xl font-black bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent mb-4">
                MERN
              </h4>

              <p className="text-slate-600 text-lg font-medium">
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