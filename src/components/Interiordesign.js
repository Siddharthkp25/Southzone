// MODULES //

// COMPONENTS //
import Button from "@/components/Button";
import Image from "next/image";

// PLUGINS //
import parse from "html-react-parser";

// STYLES //
import styles from "@/../src/styles/components/InteriorDesignCard.module.scss";

// IMAGES //

/** InteriorDesign Component */
const InteriorDesign = ({ eventsData, onClick }) => {
    return (
      <div className={`${styles.event_details}`} onClick={onClick}>
        <div className={`${styles.card_inner}`}>
          <div className="next_image objectFitCover">
            <Image
              src={eventsData.imageSrc} // Accessing the image source
              alt={eventsData.title}
              width={400}
              height={300}
              unoptimized={true}
            />
          </div>
          <div className={`${styles.card_details}`}>
            <p className={`${styles.card_loc_year} text_sm`}>
              <span className="text_500">{eventsData.venue}</span>
              <br />
              <span className="text_400">{eventsData.date}</span>
            </p>
            <h3 className={`${styles.card_text} font_secondary text_600 text_reg`}>
              {eventsData.title}
            </h3>
            {eventsData.description && (
              <p className={`${styles.card_desc} text_reg`}>
                {parse(eventsData.description)}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };
  
export default InteriorDesign;
