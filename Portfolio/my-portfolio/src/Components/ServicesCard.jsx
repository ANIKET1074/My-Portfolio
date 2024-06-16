import React from "react";
import "../Pages/Service/Service.css";
const ServicesCard = ({ image, name, aos }) => {
  return (
    <>
      <div
        className="service w-[10rem] h-[10rem] border border-[#5219d1] rounded-[0.5rem] justify-center flex flex-col gap-3 items-center"
        data-aos={aos}
      >
        <div className="sImage w-[3rem] items-center justify-center flex">
          <img src={image} alt="" className="w-[2.65rem]" />
        </div>

        <h2 className="text-[0.85rem] font-semibold text-center">{name}</h2>
      </div>
    </>
  );
};

export default ServicesCard;
