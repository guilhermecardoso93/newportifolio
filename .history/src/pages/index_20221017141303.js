import Head from "next/head";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guilherme Cardoso</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-slate-200 px-10'>
        <section className="min-h-screen">
          <Navbar/>
          <Hero/>
        </section>
      </main>
    </div>
  );
}
