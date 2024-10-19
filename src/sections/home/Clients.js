// MODULES //
import Image from "next/image";
import React from "react";
// COMPONENTS //

// PLUGINS //
import Slider from "react-slick";

// STYLES //
import styles from "../../styles/sections/home/Client.module.scss";

// Import slick-carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/** Home Hero Section */
export default function Clients() {
  const images = [
    { url: "/img/clients/arun.jpg", alt: "Client 1" },
    { url: "/img/clients/arokya.jpg", alt: "Client 1" },
    { url: "/img/clients/fasttrack.jpg", alt: "Client 1" },
    { url: "/img/clients/hatsun.jpg", alt: "Client 1" },
    { url: "/img/clients/mahindra.jpg", alt: "Client 1" },
    { url: "/img/clients/nicks.jpg", alt: "Client 1" },
    { url: "/img/clients/srishti.jpg", alt: "Client 1" },
    { url: "/img/clients/tanishq.jpg", alt: "Client 1" },
    { url: "/img/clients/titan.jpg", alt: "Client 1" },
    { url: "/img/clients/titan_eye.jpg", alt: "Client 1" },
  ];

  return (
    <section className={`${styles.main} section_spacing container`}>
      <div className={styles.heading}>
        <span className="text_4xl font_primary"> Clients </span>
      </div>
    
      <div className={styles.image_slide}>
      {images.map((image, index) => (
        <div  key={index}>
          <Image
            src={image.url}
            alt={image.alt}
            width={180}
            height={100}
            className={styles.slider_image}
          />
        </div>
      ))}
      </div>
    </section>
  );
}
