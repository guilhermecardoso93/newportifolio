import Head from "next/head"
import { useState } from "react"
import { Hero } from "../components/Hero"
import { BsSunFill } from "react-icons/bs"
import { Knowledge } from "../components/Knowledge"
import { AiFillPhone, AiFillProfile, AiFillProject } from "react-icons/ai"
import { GiBrain } from "react-icons/gi"
import { Projects } from "../components/Projects"
import { Resume } from "../components/Resume"
import { Contact } from "../components/Contact"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Guilherme Cardoso</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-200 dark:bg-black">
        <nav className="fixed w-full z-50 py-4 mb-2 pt-4 flex justify-between px-10 bg-slate-200 dark:bg-black">
          <button
            className="
                  text-2xl bg-gradient-to-r from-cyan-500 to-gray-700 text-white p-2 
          rounded-full md:text-4xl lg:text-4xl"
          >
            GC
          </button>
          <ul className="flex items-center gap-2 md:gap-4 lg:gap-5">
            <li className="flex">
              <a
                href="#"
                className="
                  bg-gradient-to-r from-cyan-500 to-gray-700 text-white px-4 py-2 rounded-md font-bold
                  hover:bg-gradient-to-r hover:from-cyan-300 hover:to-gray-500 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 tooltip:'Knowledge'
                  "
              >
                <span className="hidden md:flex lg:flex">Knowledge</span>
                <GiBrain className="text-lg flex justify-center text-gray-100 md:hidden lg:hidden" />
              </a>
            </li>
            <li className="flex">
              <a
                href="#"
                className="
                  bg-gradient-to-r from-cyan-500 to-gray-700 text-white px-4 py-2 rounded-md font-bold
                  hover:bg-gradient-to-r hover:from-cyan-300 hover:to-gray-500 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300
                  "
              >
                <span className="hidden md:flex lg:flex">Projects</span>
                <AiFillProfile className="text-lg flex justify-center text-gray-100 md:hidden lg:hidden" />
              </a>
            </li>
            <li className="flex">
              <a
                href="#"
                className="
                  bg-gradient-to-r from-cyan-500 to-gray-700 text-white px-4 py-2 rounded-md font-bold
                  hover:bg-gradient-to-r hover:from-cyan-300 hover:to-gray-500 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300
                  "
              >
                <span className="hidden md:flex lg:flex">Resume</span>
                <AiFillProject className="text-lg flex justify-center text-gray-100 md:hidden lg:hidden" />
              </a>
            </li>
            <li className="flex">
              <a
                href="#"
                className="
                  bg-gradient-to-r from-cyan-500 to-gray-700 text-white px-4 py-2 rounded-md font-bold
                  hover:bg-gradient-to-r hover:from-cyan-300 hover:to-gray-500 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300
                  "
              >
                <span className="hidden md:flex lg:flex">Contact</span>
                <AiFillPhone className="text-lg flex justify-center text-gray-100 md:hidden lg:hidden" />
              </a>
            </li>
            <li>
              <BsSunFill
                className="cursor-pointer text-2xl  dark:text-gray-100"
                onClick={() => setDarkMode(!darkMode)}
              />
            </li>
          </ul>
        </nav>
        <section className="mx-auto px-20 py-20">
          <Hero />
          <Knowledge />
          <Projects />
          <Resume />
        </section>
        <Contact />
        <footer>
          <p>Guilherme Cardoso - Front-End Developer</p>
        </footer>
      </main>
    </div>
  )
}
