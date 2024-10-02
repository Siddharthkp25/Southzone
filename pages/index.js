// MODULES //

// COMPONENTS //
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

// PLUGINS //
import { gsap } from "gsap";
// STYLES //
import styles from "../src/styles/pages/Home.module.scss";



/** Home Page */
export default function Home() {
	return (
		<div> 
			<Head>
				<title>Home</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className={`${styles.index_page} bg_secondary`}>
				<HomeIntro gsap={gsap} />
				<HomeHero />
				<Service />
				<Founder />
				<OurProjects />
				<Portfolio />
			</main>
			<Footer />
		</div>
	);
}
