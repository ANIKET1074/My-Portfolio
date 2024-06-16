import React from "react";
import "./Contact.css";
import ContactForm from "../../Components/ContactForm";
import Links from "../../Components/Links";

const Contact = () => {
  return (
    <>
      <div className="contact w-full " id="contact">
        <div className=" flex flex-wrap text-black rounded-xl mt-[3rem]">
          <ContactForm />
          <Links />
        </div>
      </div>
    </>
  );
};

export default Contact;
