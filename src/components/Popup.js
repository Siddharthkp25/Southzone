import React from "react";
import Image from "next/image";
import Close from "@/../public/img/close.svg";
import styles from "@/../../src/styles/components/Popup.module.scss";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const Popup = ({ data, setPopupVisible, popupVisible }) => {
    const selectedEventData = data?.attributes || {}; 
    const eventImages = selectedEventData.eventImages?.data || []; 

    const onInit = () => {
        console.log("LightGallery has been initialized");
    };

    return (
        <div
            className={`${styles.popup_background} ${styles.popup_wrap} ${popupVisible ? styles.open_popup : ""}`}
            role="dialog"
            aria-modal="true"
        >
            <div className={styles.popup_content}>
                <div
                    className={styles.close_icon}
                    onClick={() => setPopupVisible(false)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && setPopupVisible(false)}
                >
                    <Image src={Close} alt="close icon" />
                </div>
                <h2 className={`${styles.popup_title} text_600 text_xl color_primary`}>
                    {selectedEventData.title || "Title Not Available"}
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
                                data-lg-size="800x600" // Example size, adjust as needed
                                data-lg-thumb={image.attributes.url} // Use the same URL for simplicity
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
