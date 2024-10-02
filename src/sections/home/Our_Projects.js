// MODULES //

// COMPONENTS //
import Image from "next/image";

// SECTIONS //

// PLUGINS //
import Marquee from "react-fast-marquee";

// STYLES //
import styles from "@/styles/sections/home/Our_Projects.module.scss";

// IMAGES //

/** Images array for Image Grid */
const imagesSec1 = [
	{ image: "/img/good-company/img_1.jpg", width: 375, height: 250 },
	{ image: "/img/good-company/img_2.jpg", width: 375, height: 250 },
	{ image: "/img/good-company/img_3.jpg", width: 375, height: 250 },
	{ image: "/img/good-company/img_4.jpg", width: 375, height: 250 },
	{ image: "/img/good-company/img_5.jpg", width: 375, height: 250 },
	{ image: "/img/good-company/img_6.jpg", width: 375, height: 250 },
];

const imagesSec2 = [
    
	{ image: "/img/good-company/img_7.jpg", width: 375, height: 250 },
	{ image: "/img/good-company/img_8.jpg", width: 375, height: 250 },
	{ image: "/img/good-company/img_9.jpg", width: 375, height: 250 },
	{ image: "/img/good-company/img_10.jpg", width: 375, height: 250 },
	{ image: "/img/good-company/img_11.jpg", width: 375, height: 250 },
	{ image: "/img/good-company/img_12.jpg", width: 375, height: 250 },
    
];

/** Youre In Good Company Section */
export default function OurProjects() {
	return (
		<section className={`${styles.section_wrap}`}>
			<div className="container">
				<div className={`${styles.title_sec}`}>
					<h2 className={`${styles.title} section_title text_4xl`}>
						Our Projects
					</h2>
				</div>
			</div>
			<div className={`container-fluid ${styles.animation_section}`}>
				<Marquee>
					{imagesSec1.map((data, ind) => (
						<div className={`${styles.marq_item} next_image`} key={ind}>
							<Image src={data.image} alt="" width={data.width} height={data.height} />
						</div>
					))}
				</Marquee>
				<div className={styles.marquee_spacing}></div>
				<Marquee direction="right">
					{imagesSec2.reverse().map((data, ind) => (
						<div className={`${styles.marq_item} next_image`} key={ind}>
							<Image src={data.image} alt="" width={data.width} height={data.height} />
						</div>
					))}
				</Marquee>
			</div>
		</section>
	);
}
