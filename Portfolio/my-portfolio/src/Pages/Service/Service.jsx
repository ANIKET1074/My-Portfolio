import React, { useEffect } from "react";
import "./Service.css";
import { services } from "../../Data/Service";
import ServicesCard from "../../Components/ServicesCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  const service = services.data;

  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 2000,
      offset: 120,
    });
  }, []);
  return (
    <>
      <div className="services min-h-fit mt-[5rem]" id="service">
        <h2 className="font-bold text-5xl text-center">Services</h2>
        <div className="service__border m-auto border-2 rounded-[1rem] border-[#5219d1] p-[2rem] shadow-2xl h-[35rem] w-[70%] mt-[3rem]">
          <div className="serv flex gap-[3.25rem] flex-wrap justify-center mt-[3rem] m-auto">
            {service.map((dt, index) => {
              return (
                <ServicesCard
                  key={index}
                  image={dt.image}
                  name={dt.name}
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

export default Service;
