import Head from "next/head";
import { useState } from "react";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const Dark = () => {
    setDarkMode()
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Guilherme Cardoso</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-200 px-10 h-100 md:px-40 lg:px-60 dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar darkMode="Dark" />
          <Hero/>
        </section>
      </main>
    </div>
  );
}
