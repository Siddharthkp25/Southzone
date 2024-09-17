// MODULES //

// COMPONENTS //
import Image from "next/image";

// SECTIONS //

// PLUGINS //

//IMAGES //
import kitchen_img from "@/../public/img/home/sections/kitchen.webp";
import kitchen_icon from "@/../public/img/home/sections/kitchenicon.webp";
import cabinets_img from "@/../public/img/home/sections/cabinets.webp";
import cabinets_icon from "@/../public/img/home/sections/cabinetsicon.webp";
import bedroom_img from "@/../public/img/home/sections/bedroom.webp";
import bedroom_icon from "@/../public/img/home/sections/bedroomicon.webp";

// STYLES //
import styles from "@/styles/sections/home/Portfolio.module.scss";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

/**We exist to perish Section */
export default function Portfolio() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id={styles.portfolio} className="bg_secondary">
      <div className="container">
        <div className="color_yellow">PORTFOLIO</div>
        <div className="section_title text_4xl font_secondary">
          Recent Projects
        </div>

        <div className={styles.kitchen}>
          <div className={styles.left}>
            <div className="color_yellow">01</div>
            <div className={`${styles.heading} text_2xxl font_secondary`}>
              Kitchen in Calabasas
            </div>
            <div className="font_primary text_md">
              A vibrant, modern kitchen re-modeling in Calabasas, CA
            </div>
          </div>
          <div className={styles.right}>
            <div>
              <Image src={kitchen_img} alt="" />
            </div>
            <div className={styles.float_div}>
              <Image
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-delay="500"
                data-aos-offset="0"
                className="icon_border"
                src={kitchen_icon}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className={styles.cabinets}>
          <div className={styles.right}>
            <div>
              <Image src={cabinets_img} alt="" />
            </div>
            <div className={styles.float_div}>
              <Image
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-delay="500"
                data-aos-offset="0"
                className="icon_border"
                src={cabinets_icon}
                alt=""
              />
            </div>
          </div>
          <div className={styles.left}>
            <div className="color_yellow">02</div>
            <div className={`${styles.heading} text_2xxl font_secondary`}>
              New cabinets
            </div>
            <div className="font_primary text_md">
              New cabinets in Beverley Hills house
            </div>
          </div>
        </div>

        <div className={styles.kitchen}>
          <div className={styles.left}>
            <div className="color_yellow">03</div>
            <div className={`${styles.heading} text_2xxl font_secondary`}>
              A modern bedroom
            </div>
            <div className="font_primary text_md">
              Newly designed bedroom in Woodland Hills
            </div>
          </div>
          <div className={styles.right}>
            <div>
              <Image src={bedroom_img} alt="" />
            </div>
            <div className={styles.float_div}>
              <Image
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-delay="500"
                data-aos-offset="0"
                className="icon_border"
                src={bedroom_icon}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
