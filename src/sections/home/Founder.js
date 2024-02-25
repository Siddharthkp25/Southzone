// MODULES //

// COMPONENTS //
import Image from "next/image";

// SECTIONS //

// PLUGINS //

//IMAGES //
import Senthil from "@/../public/img/home/founder.jpg";
import Quotes from "@/../public/img/quotes1.svg";

// STYLES //
import styles from "@/styles/sections/home/Founder.module.scss";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

/**We exist to perish Section */
export default function Founder() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<section className="bg_secondary">
			<div className={`${styles.weexist} row bg_white`}>
				<div className={styles.col_50} data-aos="fade-right">
					<Image
						src={Senthil}
						alt="Founder"
						className={styles.audiogirl}
						layout="responsive"
					/>
				</div>
				<div className={styles.col_50} data-aos="fade-leftt">
					<div className={`${styles.quotes_wrap} row`}>
						<div className={styles.colmain}>
							<div className={styles.founder}>
								<div className="font_primary text_3xl">Mr. Senthil Kumar</div>
								<h1 className="font_primary">
									FOUNDER and CEO,
									<span className="font_primary">andSouthernZOne</span>
								</h1>
							</div>
							<p className="font_secondary text_xl">
								One of the most conspicuous organizations in the field of construction and
								interior designing in Chennai India. <strong>Southzone construction</strong> and interiors
								is synonymous with innovation and creativity in the market. Apart from
								Construction and interior designing, <strong>Southzone construction</strong> and interiors
								also specializes in space analysis, planning, designing and construction
								and facility management. It is equipped with professionals with
								knowledge, experience, creativity, thoroughness and professionalism to
								render the services to complete satisfaction of the customers.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
