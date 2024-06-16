import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Sidebar = ({ onClick, click }) => {
  return (
    <>
      <nav className="nav">
        <div className={`navb ${click ? "navb_activate" : ""}`}>
          <div className="blurDiv"></div>
          <div className="navL">
            <button
              onClick={() => onClick()}
              className="nav_close"
              id="nav-close"
            >
              <img
                src="./images/svg-icons/close.svg"
                alt=""
                className="w-[25px]"
              />
            </button>
            <ul className="flex gap-8 text-lg nav_list" id="nav-list">
              <li className="nav_item">
                <Link
                  spy={true}
                  smooth={true}
                  to="home"
                  className="nav_link hover:border-b-4 hover:border-[#0a1f30]"
                >
                  Home
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  spy={true}
                  smooth={true}
                  to="about"
                  className="nav_link hover:border-b-4 hover:border-[#0a1f30]"
                >
                  About
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  className="nav_link hover:border-b-4 hover:border-[#0a1f30]"
                >
                  Skills
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  spy={true}
                  smooth={true}
                  to="education"
                  className="nav_link hover:border-b-4 hover:border-[#0a1f30]"
                >
                  Education
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  spy={true}
                  smooth={true}
                  to="projects"
                  className="nav_link hover:border-b-4 hover:border-[#0a1f30]"
                >
                  Projects
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  spy={true}
                  smooth={true}
                  to="contact"
                  className="nav_link hover:border-b-4 hover:border-[#0a1f30]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="navR"></div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
