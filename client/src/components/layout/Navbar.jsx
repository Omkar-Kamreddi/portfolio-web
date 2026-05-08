import { useState } from "react"

import { HiMenu, HiX } from "react-icons/hi"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (

    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-orange-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <h1 className="text-3xl font-black bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
          OMKAR
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-10 text-[15px] font-semibold text-slate-700">

          <li>
            <a
              href="#home"
              className="hover:text-orange-500 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-orange-500 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-orange-500 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-orange-500 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-orange-500 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-4xl text-orange-500"
        >

          {
            isOpen ? <HiX /> : <HiMenu />
          }

        </button>

      </div>

      {/* Mobile Menu */}

      {
        isOpen && (

          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-orange-100 px-6 py-8 shadow-xl">

            <ul className="flex flex-col gap-8 text-lg font-semibold text-slate-700">

              <li>
                <a
                  href="#home"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-orange-500 transition duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-orange-500 transition duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-orange-500 transition duration-300"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-orange-500 transition duration-300"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-orange-500 transition duration-300"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

        )
      }

    </nav>
  )
}

export default Navbar