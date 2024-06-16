import React, { useRef } from "react";
import "../Pages/Contact/Contact.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_853ag5c",
        "template_67n1go9",
        form.current,
        "qyn6kd00LTh4AeLnb"
      )
      .then(
        (result) => {
          //   console.log(result.text);
          //   console.log("message sent");

          //   alert("Email has been sent successfully");
          toast.success("Email has sent successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="flex-1 flex items-center flex-col mt-[2rem] w-[100%] ">
        <h2 className="font-bold text-center text-4xl text-white">Contact</h2>
        <div className="left mb-[1rem] mt-[1rem] mx-[8rem] flex flex-col rounded-xl bg-white p-[1.5rem] md:w-[60%] contactPage">
          <form
            action=""
            className="flex flex-col gap-5 rounded-xl"
            ref={form}
            onSubmit={sendEmail}
          >
            <h2 className="text-center rounded-xl mt-[0.5rem] text-xl">
              Send a Message
            </h2>
            <div className="itag flex flex-col gap-1 rounded-xl ">
              <input
                style={{ outline: "none", padding: "4px 6px" }}
                type="text"
                name="from_name"
                id="name"
                className="border-b-2 mx-[1rem] mt-[1rem] border-black"
                required
              />
              <span className="mx-[1rem] labels">Name</span>
            </div>
            <div className="itag flex flex-col gap-1 rounded-xl">
              <input
                style={{ outline: "none", padding: "4px 6px" }}
                type="email"
                name="from_email"
                id="email"
                className="border-b-2 mx-[1rem] border-black"
                required
              />
              <span className="mx-[1rem] labels">Email</span>
            </div>
            <div className="itag flex flex-col gap-1 rounded-xl">
              <textarea
                style={{ outline: "none", padding: "4px 6px" }}
                name="message"
                id="message"
                className="border-b-2 mx-[1rem] border-black"
                required
              />
              <span className="mx-[1rem] labels">Message</span>
            </div>
            <div className="submit flex flex-col gap-1 items-center justify-center">
              <input
                type="submit"
                name="submit"
                id="submit"
                className="cursor-pointer rounded-full border-2 bg-[#521d91] text-white shadow-lg w-[6rem] mt-[1rem] p-2"
                value="Submit"
              />
            </div>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            {/* </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
