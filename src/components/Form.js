// MODULES //
import { useRef } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import { useForm } from "react-hook-form";

// STYLES //
import styles from "@/styles/components/Form.module.scss";

/** form to send data to json */
function ContactForm() {
  const formRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  /** function to handle submit */
  const onSubmit = async (data, e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzSp_aBOK8jdx0D0-JRhYwv5025O3B_p9GfRPB6ILrHs3uymRc1RGT125Lv71pTbjE7/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: new FormData(formRef.current), // Use formRef directly
      });
      formRef.current.reset();
    } catch (error) {
      // Handle any errors during the process
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="section_spacing">
      <div className="text_4xl font_secondary">Contact Us</div>
      <div className="text_2xl font_primary">&nbsp;Excited to work with you!</div>
      <form
        className={`${styles.form} section_spacing`}
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.formGroup}>
          <label className={`${styles.label} font_secondary`} htmlFor="name">
            Name:
          </label>
          <input
            className={`${styles.input} font_primary`}
            type="text"
            id="name"
            name="name"
            {...register("name", { required: true })}
          />
          {errors.name && errors.name.type == "required" && (
            <label className="error">This field is required</label>
          )}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input
            className={`${styles.input} font_primary`}
            type="email"
            id="email"
            name="email"
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
          />
          {errors.email && errors.email.type == "required" && (
            <label className="error">This field is required</label>
          )}
          {errors.email && errors.email.type == "pattern" && (
            <label className="error">Enter valid email</label>
          )}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="message">
            Message:
          </label>
          <textarea
            className={`${styles.textarea} font_primary`}
            id="message"
            name="message"
            {...register("message", {
              required: true,
            })}
          />
          {errors.message && errors.message.type == "required" && (
            <label className="error">This field is required</label>
          )}
        </div>
        <button className={styles.button} type="submit" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
