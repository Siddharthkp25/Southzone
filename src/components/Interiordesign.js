// MODULES //

// COMPONENTS //
import Button from "@/components/Button";
import Image from "next/image";

// PLUGINS //
import parse from "html-react-parser";

// UTILS //

// STYLES //
import styles from "@/../src/styles/components/InteriorDesignCard.module.scss";

// IMAGES //

/** InteriorDesign Component */
const InteriorDesign = ({ eventData, setPopupVisible }) => {
    const handleClick = () => {
        setPopupVisible(true);
    };

    const imageSrc = eventData.imageSrc; // Assuming each eventData has its own image source

    return (
        <>
            <div className={`${styles.event_details}`} onClick={handleClick}>
                <div className={`${styles.card_inner}`}>
                    <div className="next_cover_image objectFitCover">
                        <Image
                            src={imageSrc}
                            alt=""
                            width={400} // Adjust width as needed
                            height={300} // Adjust height as needed
                            unoptimized={true}
                        />
                    </div>
                    <div className={`${styles.card_details}`}>
                        <p className={`${styles.card_loc_year} text_sm`}>
                            <span className="text_500">{eventData.venue}</span>
                            <br />
                            <span className="text_400">{eventData.date}</span>
                        </p>
                        <h3 className={`${styles.card_text} font_secondary text_600 text_reg`}>
                            {eventData.title}
                        </h3>
                        {eventData.description && (
                            <p className={`${styles.card_desc} text_reg`}>
                                {parse(eventData.description)}
                            </p>
                        )}
                        <div className={`${styles.link_sec}`}>
                            <p className={`${styles.linkItem} text_reg text_500`}>
                                <Button text="Know More" className="btn_tertiary" icon />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InteriorDesign;