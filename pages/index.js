// MODULES //
import { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

// SECTIONS //
import HomeIntro from "@/sections/home/HomeIntro";
import HomeHero from "@/sections/home/HomeHero";
import Founder from "@/sections/home/Founder";
import OurProjects from "@/sections/home/Our_Projects";
import Service from "@/sections/home/Services";
import Portfolio from "@/sections/home/Portfolio";
import Clients from "@/sections/home/Clients";

// PLUGINS //
import { gsap } from "gsap";

// STYLES //
import styles from "../src/styles/pages/Home.module.scss";

/** Home Page */
export default function Home() {
  // State to track if the intro has been viewed
  const [isIntroViewed, setIntroViewed] = useState(false);

  // Check localStorage on component mount
  useEffect(() => {
    const introViewedInLocal = localStorage.getItem("introViewed");

    // If intro has been viewed, skip showing it
    if (introViewedInLocal === "true") {
      setIntroViewed(true); // Intro has already been viewed
    }
  }, []);

  // Function to handle when the intro animation is finished
  const handleIntroEnd = () => {
    localStorage.setItem("introViewed", "true"); // Mark intro as viewed in localStorage
    setIntroViewed(true); // Update state to hide the intro
  };

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Southzone construction & interiors also specializes in space analysis, planning, designing & construction and facility management."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={`${styles.index_page} bg_secondary`}>
        {/* Only show HomeIntro if it has not been viewed */}
        {!isIntroViewed && <HomeIntro gsap={gsap} onEnd={handleIntroEnd} />}
        <HomeHero />
        <Service />
        <Founder />
        <OurProjects />
        <Portfolio />
        <Clients />
      </main>
      <Footer />
    </div>
  );
}
