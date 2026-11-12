import emailjs from "@emailjs/browser";
import { lazy, useState } from "react";

import Alert from "../components/Alert";
import OptionalScene from "../components/OptionalScene";
import useAlert from "../hooks/useAlert";

const ContactScene = lazy(() => import("../components/ContactScene"));

const contactEmail = "edwardxcj@gmail.com";
const emptyForm = { name: "", email: "", message: "" };
const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID?.trim();
const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID?.trim();
const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY?.trim();

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm((previousForm) => ({ ...previousForm, [name]: value }));
    if (alert.show) hideAlert();
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name || !email || !message) {
      showAlert({ text: "Please enter your name, email, and message." });
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      showAlert({ text: "The contact form is unavailable. Please email me directly." });
      return;
    }

    hideAlert();
    setLoading(true);
    setCurrentAnimation("hit");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          to_name: "Changjian Xiong",
          from_email: email,
          to_email: contactEmail,
          message,
        },
        publicKey
      );

      setForm(emptyForm);
      showAlert({ text: "Thanks for your message!", type: "success" });
    } catch (error) {
      console.error(
        "EmailJS contact send failed",
        error?.status,
        error?.text ?? error?.message
      );
      showAlert({
        text: "Your message couldn't be sent. Please try again or email me directly.",
      });
    } finally {
      setLoading(false);
      setCurrentAnimation("idle");
    }
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          onSubmit={handleSubmit}
          aria-busy={loading}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              readOnly={loading}
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="John@gmail.com"
              required
              readOnly={loading}
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows="4"
              className="textarea"
              placeholder="Write your thoughts here..."
              required
              readOnly={loading}
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
        <p className="mt-4 text-sm text-slate-700">
          You can also{" "}
          <a className="underline" href={`mailto:${contactEmail}`}>
            email me directly
          </a>
          .
        </p>
      </div>

      <OptionalScene>
        <ContactScene currentAnimation={currentAnimation} />
      </OptionalScene>
    </section>
  );
};

export default Contact;
