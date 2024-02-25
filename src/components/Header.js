// MODULES //
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";

// SECTIONS //

// PLUGINS //
import { gsap } from "gsap";

// IMAGES //
import Logo from "@/../public/img/logo.jpg";

// STYLES //
import styles from "@/styles/components/Header.module.scss";

const menuItems = [
	{
		text: "Home", 
		link: "/our-story",
	},
	{
		text: "Projects",  
		link: "/be-ceo-ready",
	},
	{
		text: "Contact Us",
		link: "/membership",
	},
]; 

/** Header Component */
const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const router = useRouter();
	const [activeMenuItem, setActiveMenuItem] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [activeProfile, setActiveProfile] = useState(false);

	/** Handle Mobile Menu Toggle */
	const handleMobileMenuToggle = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	/** Handle Menu Click */
	const handleMenuClick = (index) => {
		setActiveMenuItem(index);
		setIsMobileMenuOpen(false); // Close the mobile menu when a menu item is clicked
	};

	useEffect(() => {
		// const header = document.querySelector(".header_wrap");

		// const headerAnimation = gsap.timeline();

		// headerAnimation.from(
		// 	header,
		// 	{
		// 		y: -100,
		// 		transform:0,
		// 		duration: 1,
		// 	},

		// 	"first"
		// );

	}, []);

	/** function to logout */
	const handleLogout = async () => {
		try {
			const response = await fetch("/api/logout", { methoda: "GET" });

			if (response.ok) {
				setIsLoggedIn(false);
				router.push("/login");
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className={`${styles.main_header} header_wrap bg_primary`}>
			<div className="container">
				<div className={`${styles.main_header_wrap} row`}>
					<div
						className={`${styles.hamIcon} ${isMobileMenuOpen ? styles.active : ""}`}
						onClick={handleMobileMenuToggle}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className={styles.logo_sec}>
						<Link href="/">
							<a>
								<Image src={Logo} alt="Bagggel Logo" />
							</a>
						</Link>
					</div>
					<div
						className={`${styles.menu_wrap} ${isMobileMenuOpen ? styles.active : ""}`}
					>
						<div className={`${styles.menu_sec} `}>
							<ul className={styles.menu_items}>
								{menuItems.map((menuItem, index) => (
									<li key={index}>
										<Link href={menuItem.link}>
											<a
												className={`text_700  ${router.pathname === menuItem.link ? styles.active : ""}`}
												onClick={() => handleMenuClick(index)}
											>
												{menuItem.text}
											</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Header;
