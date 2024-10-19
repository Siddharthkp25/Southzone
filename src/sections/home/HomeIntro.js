// MODULES //
import { useEffect, useRef } from "react";
import Image from "next/image";

// STYLES //
import styles from "@/styles/sections/home/HomeIntro.module.scss";

// IMAGES //
import Logo from "@/../public/img/logo.jpg";

/** HomeIntro Section */
export default function HomeIntro({ gsap, onEnd }) {
  const sectionRef = useRef();

  const isU = gsap.utils.selector(sectionRef);

  /** Intro Animation */
  function introAnimation() {
    const html = document.querySelector("html");

    // Start with the HTML element having the "overflowHidden" class
    html.classList.add("overflowHidden");

    const introTween = gsap.timeline({
      onComplete: function () {
        html.classList.remove("overflowHidden");

        // Call onEnd when animation finishes to trigger localStorage set
        onEnd();
      },
    });

    introTween
      .to(isU(".scene_1"), {
        delay: 1,
      })
      .to(
        isU(".scene_1 .logo"),
        {
          duration: 1.5,
          opacity: 0,
          delay: 1,
        },
        "first"
      )
      .to(
        isU(".scene_1"),
        {
          duration: 1.5,
          y: "-100%",
          delay: 1,
        },
        "second"
      )
      .to(
        isU(`.${styles.scene_2}`),
        {
          duration: 1,
          y: "-100%",
        },
        "second"
      )
      .to(
        isU(`.${styles.scene_2} .${styles.intro_content} .${styles.title}`),
        {
          duration: 1.2,
          y: "0%",
        },
        "second"
      )
      .to(
        isU(".scene_2"),
        {
          duration: 1,
          y: "-200%",
        },
        "third"
      )
      .to(
        isU(`.${styles.scene_2} .${styles.intro_content}`),
        {
          duration: 0.8,
          y: "250%",
        },
        "third"
      )
      .to(
        isU(".home_intro"),
        {
          duration: 0.5,
          autoAlpha: 0, // Fade out and hide
          onComplete: () => {
            gsap.set(isU(".home_intro"), { display: "none" }); // Apply display: none
          },
        },
        "fourth"
      );
  }

  useEffect(() => {
    introAnimation();
  }, []);

  return (
    <section className={`${styles.HomeIntro} home_intro`} ref={sectionRef}>
      <div className={`${styles.intro_wrapper}`}>
        <div className={`${styles.scene_1} scene_1 bg_white`}>
          <div className={`${styles.logo} logo next_img`}>
            <Image src={Logo} alt="Company Logo" />
          </div>
        </div>
        <div className={`${styles.scene_2} scene_2 bg_primary text_center`}>
          <div className={`${styles.intro_content}`}>
            <h2 className={`${styles.title} title text_xxl text_700`}>
              "Good design is about making spaces that not <br /> only look
              beautiful but also feel like home."
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
