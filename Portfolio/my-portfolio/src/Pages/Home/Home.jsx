import React from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Home.css";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Innovator",
      "Problem Solver",
      "Final Year Student",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 60,
  });
  return (
    <>
      <div className="home flex py-[4rem] h-full flex-wrap" id="home">
        <div className="myImage flex flex-[40%] justify-end mt-[2rem] pt-3">
          <img
            src="./images/1261.jpg"
            alt=""
            className="myImg  rounded-full "
          />
        </div>
        <div className="desc flex flex-[60%] mb-[3rem] mt-[2rem] justify-center">
          <div className=" md:h-[35%] md:w-[60%] content flex-col">
            <h2 className="font-medium text-[2.75rem] myName">Aniket Jadav</h2>
            <div className="heading flex items-center h-[2rem] ">
              <span className=" text-[1.25rem] ">{text}</span>
              <span className=" text-[1.25rem] ">
                <Cursor cursorStyle="|" cursorBlink />
              </span>
            </div>
            <p className="description mt-[1rem]">
              I am currently in Sem 7 at Government Engineering College
              Gandhinagar . This is my Portfolio which i used to create using
              HTML , CSS , JS , Tailwind . I got 8.05 CGPA . Lorem ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
            <div className="btn">
              <Link
                id="btns"
                to="#"
                className="btns flex mt-[2rem] font-bold w-[10rem] justify-center border-4 border-[#521d91] bg-gradient-to-tl from-[#4a42ec] bg-[#521d91] shadow-lg text-white rounded-full p-3 gap-3 hover:shadow-lg hover:shadow-indigo-400"
              >
                Download CV
              </Link>
              {/* <Link
                to="#contact"
                className="btns flex mt-[3.5rem] font-bold w-[10rem] justify-center border-4 border-[#521d91] bg-gradient-to-tl from-[#4a42ec] bg-[#521d91] hover:shadow-lg hover:shadow-indigo-400 text-white rounded-full p-3 gap-3"
              >
                Contact
              </Link> */}
            </div>
            <div className="links flex gap-[2rem] justify-start items-center mt-[2rem]  ">
              <a
                href="https://github.com/ANIKET1074"
                className="github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/icons/octocat.svg"
                  alt=""
                  className="w-[2.5rem] h-[2.5rem] bg-gradient-to-tl from-[#4a42ec] bg-[#521d91] rounded-[100%] border border-[#521d91] hover:scale-110 duration-500 ease-in-out"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/aniket-jadav"
                className="linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/icons/linkedin.svg"
                  alt=""
                  className="w-[2.5rem] h-[2.5rem] bg-gradient-to-tl from-[#4a42ec] bg-[#521d91] border border-[#521d91] rounded-full hover:scale-110 duration-500 ease-in-out"
                />
              </a>
              <a
                href="https://twitter.com/Aniket_Jadav_19"
                className="twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/icons/twitter.svg"
                  alt=""
                  className="w-[2.5rem] bg-gradient-to-tl from-[#4a42ec] bg-[#521d91] border border-[#521d91] rounded-full h-[2.5rem] hover:scale-110 duration-500 ease-in-out"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
