// MODULES //
import { useRef, useState } from "react";

// COMPONENTS //
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";

// SECTIONS //

// PLUGINS //
import { useForm } from "react-hook-form";

// STYLES //
import styles from "@/styles/components/Footer.module.scss";

//IMAGES//
import ArrowIcon from "@/../public/img/arrow.svg";
import FooterLogo from "@/../public/img/logo.jpg";
import LinkedinIn from "@/../public/img/linkedin.svg";
import YouTube from "@/../public/img/social/youtube.svg";

// UTILS //
import { ClientHeaders } from "@/utils/RequestHeaders";

/** Footer Component */
const Footer = () => {
	const formRef = useRef();
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const { register, handleSubmit, reset } = useForm({ mode: "onChange" });

	/** Form submission handler */
	const onSubmit = async (data) => {
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}/api/subscriptions`,
				{
					method: "POST",
					headers: ClientHeaders.headers,
					body: `{
					"data": ${JSON.stringify(data)}
				}`,
				}
			);

			if (response.ok) {
				// Form submitted successfully
				// Show success message on successful form submission
				setShowSuccessMessage(true);
				// Reset the form after successful submission
				reset();
				setTimeout(() => {
					setShowSuccessMessage(false); // Hide success message after 4 seconds
				}, 4000);
			} else {
				// Handle error if needed
				console.error("Error submitting form");
			}
		} catch (error) {
			console.error("Error submitting form:", error);
		}
	};

	return (
		<footer className={`${styles.main_footer} fixed_footer`}>
			<div className={`${styles.logo_menu_button_sec}`}>
				<div className="container">
					<div className={`${styles.logo_menu_button}`}>
						<div className={`${styles.logo_sec}`}>
							<div className={`${styles.footer_logo}`}>
								<Link href="/">
									<a>
										<Image src={FooterLogo} alt="Footer Icons" />
									</a>
								</Link>
							</div>
							<div className={`${styles.address}`}>
								<Link href="https://www.google.com/maps/place/SouthZone+Interior/@12.9207768,80.1438842,13z/data=!3m1!4b1!4m6!3m5!1s0x3a525e9f9933f75d:0xd3cd571e8f2c3971!8m2!3d12.9206964!4d80.1850844!16s%2Fg%2F11ryr4b8_q?entry=ttu">
									<a target="_blank">
										<p className={`${styles.para_text} color_black`}>
											No: 7/476, Second Floor, Velachery Road, Near Hotel Vasantha Bhavan,
											Medavakkam, Chennai-600 100
										</p>
									</a>
								</Link>

								<p className={`${styles.para_text}`}>
									<a href="mailto:southzonedesign@gmail.com">southzonedesign@gmail.com</a>
								</p>
							</div>
						</div>
						<div className={`${styles.menu_sec}`}>
							<div className={`${styles.menu}`}>
								<div className={`${styles.sub_menu}`}>
									<Link href="/">
										<a>Home</a>
									</Link>
								</div>
								<div className={`${styles.sub_menu}`}>
									<Link href="/projects">
										<a>Projeccts</a>
									</Link>
								</div>
								<div className={`${styles.sub_menu}`}>
									<Link href="/contact">
										<a>Contact Us</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.footer_end}`}>
				<div className="container">
					<div className={`${styles.footer_end_inner}`}>
						<p className={`${styles.copyright}`}>
							© {new Date().getFullYear()} by Southzone.
						</p>
						<div className={`${styles.social_icon}`}>
							<div className={`${styles.icon}`}>
								<a
									href="#"
									target="_blank"
									rel="noreferrer"
								>
									<Image src={LinkedinIn} alt="LinkedinIn Icons" />
								</a>
							</div>
							<div className={`${styles.icon}`}>
								<a
									href="#"
									target="_blank"
									rel="noreferrer"
								>
									<Image src={YouTube} alt="YouTube Icons" />
								</a>
							</div>
							{/* <div className={`${styles.icon}`}>
								<a target="_blank" href="">
									<Image src={Instagram} alt="Instagram Icons" />
								</a>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
