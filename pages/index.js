import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import About from "../components/About";
import HomePage from "../components/HomePage";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="bg-softBlack">
      <Head>
        <title>M.Daud</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
