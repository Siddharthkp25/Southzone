import React from "react";
import Image from "next/image";
import Close from "@/../public/img/close.svg";
import styles from "@/../../src/styles/components/Popup.module.scss";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Ensure you have imported necessary LightGallery CSS
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const Popup = ({ data, setPopupVisible, popupVisible, eventData }) => {
  const selectedEventData = data && data.attributes ? data.attributes : {};

  const eventImages =
    eventData.eventImages && eventData.eventImages.data
      ? eventData.eventImages.data
      : [];

  const onInit = () => {
    console.log("LightGallery has been initialized");
  };

  return (
    <div
      className={`${styles.popup_background} ${styles.popup_wrap} ${
        popupVisible ? styles.open_popup : ""
      }`}
    >
      <div className={styles.popup_content}>
        <div
          className={styles.close_icon}
          onClick={() => setPopupVisible(false)}
        >
          <Image src={Close} alt="close icon" />
        </div>
        <h2 className={`${styles.popup_title} text_600 text_xl color_primary`}>
          {eventData.title}
        </h2>
        <p className={`${styles.popup_desc} color_white text_sm`}>
          {selectedEventData.venue || "Venue Not Available"}{" "}
          <span className="color_primary">|</span>{" "}
          <br className={styles.mobile_break} />
          {selectedEventData.date || "Date Not Available"}
        </p>
        <div className={styles.slider_wrap}>
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            selector=".lg-item"
          >
            {eventImages.map((image, index) => (
              <a
                key={index}
                className="lg-item"
                href={image.attributes.url}
                data-lg-size={`${image.attributes.width}x${image.attributes.height}`}
                data-lg-thumb={image.attributes.thumbnailUrl || image.attributes.url} // Use thumbnailUrl if available, else use url
              >
                <img
                  src={image.attributes.url}
                  alt={`Image ${index}`}
                  height={200}
                  width={200}
                />
              </a>
            ))}
          </LightGallery>
        </div>
      </div>
    </div>
  );
};

export default Popup;
