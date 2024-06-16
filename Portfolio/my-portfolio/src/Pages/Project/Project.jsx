import React, { useEffect } from "react";
import { projects } from "../../Data/Projects";
import ProjectCard from "./../../Components/ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  const data = projects.data;

  useEffect(() => {
    AOS.init({
      delay: 50,
      duration: 2000,
      offset: 120,
    });
  }, []);

  return (
    <>
      <div className="project min-h-[100vh]" id="projects">
        <h1 className="font-bold text-5xl text-center mt-[2rem]">Projects</h1>
        <div className="w-[100%] flex items-center flex-col">
          <div className="c w-[100%] flex flex-wrap gap-[2rem] px-[1rem] mt-[0.5rem] py-[2rem] justify-center">
            {data.map((d, index) => {
              return (
                <ProjectCard
                  key={index}
                  image={d.image}
                  pname={d.project_name}
                  skills={d.skills}
                  content={d.content}
                  projectlink={d.projectLink}
                  aos="fade-up"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
