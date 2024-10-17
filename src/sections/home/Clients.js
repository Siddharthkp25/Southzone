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
    { url: "/img/good-company/img_1.jpg", alt: "Client 1" },
    { url: "/img/good-company/img_2.jpg", alt: "Client 2" },
    { url: "/img/good-company/img_3.jpg", alt: "Client 3" },
    { url: "/img/good-company/img_1.jpg", alt: "Client 1" },
    { url: "/img/good-company/img_2.jpg", alt: "Client 2" },
    { url: "/img/good-company/img_3.jpg", alt: "Client 3" },
  ];

  const settings = {
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={`${styles.main} section_spacing container`}>
      <div className={styles.heading}>
        <span className="text_4xl font_primary"> Clients </span>
      </div>

      <Slider {...settings}>
        {images.map((image, index) => (
          <div className={styles.image_slide} key={index}>
            <Image
              src={image.url}
              alt={image.alt}
              width={200}
              height={200}
              className={styles.slider_image}
              unoptimized={true} // Disable Next.js image optimization
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
