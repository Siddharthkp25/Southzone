// MODULES //
import Image from "next/image";
import {useEffect} from "react";
import { gsap } from "gsap";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// IMAGES //
import bannerimg1 from "@/../public/img/home/bannerimg1.jpg";
import bannerimg2 from "@/../public/img/home/banner_icon1.jpg";

// STYLES //
import styles from "../../styles/sections/home/HomeHero.module.scss";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
/** Home Hero Section */
export default function HomeHero() {
	useEffect(() => {
		AOS.init();
		// const bannerimg = document.querySelector(".banner1");
	
		// const headerAnimation = gsap.timeline();
	
		// headerAnimation.from(
		// 	bannerimg,
		// 	{
		// 		x: 100,
		// 		duration: 2,
		// 	},
	
		// 	"first"
		// );
	}, []);
	return (
		<section>
			<div className={`${styles.hero_wrap} container` }>
				<div className={`${styles.heading} text_600 font_secondary`} data-aos="fade-right">
					<div className="font_secondary">Elegantly</div>
					<div>refined</div>
					<div className={styles.main}>
						<div className={styles.stripe}></div>
						<div className="font_secondary">interior</div>
					</div>
					<div className="color_yellow font_secondary">design</div>
				</div>
				<div className={styles.banner_right}>

					<div className={styles.banner1}>
						<div data-aos="fade-right">
						<Image src={bannerimg1}  alt=""/>
						</div>
					</div>
					<div className={styles.banner_icon}>
					<div  data-aos="fade-left">
						<Image className="icon_border" src={bannerimg2} alt="" />
						</div>
					</div>
				</div>	
			</div>
		</section>
	);
}
