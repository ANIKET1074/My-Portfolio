import React from "react";

const SkillCard = (props) => {
  return (
    <>
      {" "}
      <div className="skills-contianer flex flex-col gap-3 border shadow-lg rounded-xl w-[10rem] h-[10rem] justify-center items-center bg-[white]">
        <img src={props.simage} alt="" className="w-[3.5rem] flex bg-[white]" />
        <h2 className="text-center flex bg-[white] text-[black]">
          {props.sname}
        </h2>
      </div>
    </>
  );
};

export default SkillCard;
