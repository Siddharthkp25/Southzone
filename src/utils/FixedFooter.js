/** Function to get height of the footer and set it as margin bottom to main */
export const FixedFooter = () => {
	const isDesktop = window.innerWidth > 1199;
	// const isIpad = window.innerHeight == 1366 || window.innerWidth ==768;
	if (isDesktop) {
		const footer = document.querySelector(".fixed_footer");
		const main = document.querySelector("main");

		if (footer && main) {
			const height = footer.offsetHeight;
			main.style.marginBottom = `${height}px`;
		}
	}
};
