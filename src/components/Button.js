// MODULES //
import Image from "next/image";

// COMPONENTS //

// SECTIONS //

// PLUGINS //

//IMAGES//

// STYLES //
import styles from "@/styles/components/Button.module.scss";

/** Button Component */
const Button = ({ text, className, icon }) => {
	return (
		<button className={`${styles[className]} cmn_btn`}>
			{text}
			
		</button>
	);
};

export default Button;

{
	/* Button Usage 
	<Button text="Explore the Membership" className="btn_primary" />
	<Button text="Explore the Membership" className="btn_secondary" />
	<Button text="Know More" className="btn_tertiary" icon /> */
}
