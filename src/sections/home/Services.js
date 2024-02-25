// MODULES //

// COMPONENTS //
import Image from "next/image";

// SECTIONS //

// PLUGINS //

//IMAGES //

// STYLES //
import styles from "@/styles/sections/home/service.module.scss";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

/**Service Section */
export default function Service() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<section className="section_spacing">
			<div className={`${styles.service} font_secondary`}>
				<div className="container">
					<p>SERVICES</p>
					<div className="text_3xl font_primary">Kitchen, cabinets, and more</div>

					<div className={styles.main}>
						<div>
							<p className="text_1xl">01</p>
							<div className="text_2xl">Custom kitchens</div>
							<div>
								Full kitchen re-design handled with the highest quality material
							</div>
						</div>
						<div>
							<p className="text_1xl">02</p>
							<div className="text_2xl">Cabinet installations</div>
							<div>Cabinet installations from A-Z handled with precision</div>
						</div>
						<div>
							<p className="text_1xl">03</p>
							<div className="text_2xl">Interior design</div>
							<div>We can design your whole house with top notch, modern designs</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
