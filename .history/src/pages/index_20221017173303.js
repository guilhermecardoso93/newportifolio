import Head from "next/head";
import { useState } from "react";
import { Hero } from "../components/Hero";
import { BsSunFill } from "react-icons/bs";
import { Navbar } from "../components/Navbar";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Guilherme Cardoso</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-200 px-2 h-100 md:px-40 lg:px-60 dark:bg-black">
        <section className="min-h-screen">
          <nav className="py-4 mb-2 pt-4 flex justify-between">
            <button
              className="
                  text-2xl bg-gradient-to-r from-cyan-500 to-gray-700 text-white p-2 
          rounded-full md:text-4xl lg:text-4xl"
            >
              GC
            </button>

            <ul className="flex items-center gap-2 md:gap-4 lg:gap-5">
              <li>
                <a
                  href="#"
                  className="
                  bg-gradient-to-r from-cyan-500 to-gray-700 text-white px-4 py-2 rounded-md font-bold
                  hover:bg-gradient-to-r hover:from-cyan-300 hover:to-gray-500 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300
                  "
                >
                  Knowledge
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="
                  bg-gradient-to-r from-cyan-500 to-gray-700 text-white px-4 py-2 rounded-md font-bold
                  hover:bg-gradient-to-r hover:from-cyan-300 hover:to-gray-500 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300
                  "
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="
                  bg-gradient-to-r from-cyan-500 to-gray-700 text-white px-4 py-2 rounded-md font-bold
                  hover:bg-gradient-to-r hover:from-cyan-300 hover:to-gray-500 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300
                  "
                >
                  Projects
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
          <Hero />
        </section>
      </main>
    </div>
  );
}
