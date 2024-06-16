import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import "../../index.css";

const Navbar = ({ onClick, click }) => {
  //   const setDarkMode = () => {
  //     document.querySelector("body").setAttribute("data-theme", "dark-mode");
  //   };

  //   const setLightMode = () => {
  //     document.querySelector("body").setAttribute("data-theme", "light-theme");
  //   };

  //   const toggleTheme = (e) => {
  //     e.target.checked ? setDarkMode() : setLightMode();
  //   };
  // const [theme, setTheme] = useState();
  function darkTheme() {
    var element = document.body;
    var mover = document.getElementById("img1");
    element.classList.toggle("dark-mode");

    var contact = document.getElementById("contact");
    contact.classList.toggle("dark-contact");
    contact.classList.toggle("contact");
    mover.classList.toggle("mover");
  }

  return (
    <>
      <header className=" w-[100%] flex justify-center">
        <nav className="flex justify-between items-center w-[100%] nav">
          <div className="icon flex font-bold text-3xl">Aniket</div>
          <div className="nav_menu" id="nav-menu">
            <ul className="flex gap-8 text-lg nav_list text-white">
              <li className="nav_item cursor-pointer">
                <Link
                  spy={true}
                  to="home"
                  smooth={true}
                  className="nav_link hover:border-b-2 hover:border-[#ffffff]"
                  activeClass="active"
                >
                  Home
                </Link>
              </li>
              <li className="nav_item cursor-pointer">
                <Link
                  activeClass="active"
                  spy={true}
                  to="about"
                  smooth={true}
                  className="nav_link hover:border-b-2 hover:border-[#ffffff]"
                >
                  About
                </Link>
              </li>
              <li className="nav_item cursor-pointer">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  to="skills"
                  className="nav_link hover:border-b-2 hover:border-[#ffffff]"
                >
                  Skills
                </Link>
              </li>
              <li className="nav_item cursor-pointer">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  to="service"
                  className="nav_link hover:border-b-2 hover:border-[#ffffff]"
                >
                  Service
                </Link>
              </li>
              <li className="nav_item cursor-pointer">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  to="education"
                  className="nav_link hover:border-b-2 hover:border-[#ffffff]"
                >
                  Education
                </Link>
              </li>
              <li className="nav_item cursor-pointer">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  to="projects"
                  className="nav_link hover:border-b-2 hover:border-[#ffffff]"
                >
                  Projects
                </Link>
              </li>
              <li className="nav_item cursor-pointer">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  to="contact"
                  className="nav_link hover:border-b-2 hover:border-[#ffffff]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="btn rounded-xl flex p-1 m-2 gap-[25px]">
            <button className="darkBtn" onClick={() => darkTheme()}>
              <div className="img1" id="img1"></div>
              <div className="imageContainer">
                <img
                  src="./images/svg-icons/light-mode.svg"
                  alt=""
                  className="w-[27px]"
                />
              </div>
              <div className="imageContainer">
                <img
                  src="./images/svg-icons/dark-mode.svg"
                  alt=""
                  className="w-[27px]"
                />
              </div>
            </button>

            <button
              onClick={() => onClick()}
              className="btn_toggle"
              id="nav-toggle"
            >
              <img
                src="./images/svg-icons/menu.svg"
                alt=""
                className="w-[2rem] menuSvg"
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
