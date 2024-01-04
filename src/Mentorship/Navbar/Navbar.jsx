import React from "react";
const Navbar = () => {
  return (
    <>
    <div className="bg-[#FFF] w-full h-[70px] flex justify-between items-center px-14">
  <div className="flex flex-row items-center gap-x-4 justify-start  py-2">
    <img src="/img/logo2.png" className="w-[60px] h-[60px]" alt=""/>
    <h2 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Lexend not-italic font-semibold leading-[normal] tracking-[0.7px]">KSV University</h2>
  </div>
  <div className="flex justify-center pl-10">
    <h2 className="text-[#16376E] text-[20px] not-italic font-Poppins font-bold leading-[normal] tracking-[1.1px]">Student Mentoring Form</h2>
  </div>
  <div className="flex justify-end items-center gap-x-4 ">
  <img src="/img/logo1.png" className="w-[60px] h-[60px]" alt=""/>
<div className="flex flex-col justify-center gap-y-1 items-center">
  <h2 className="text-[color:var(--02,#47A5E4)] text-[26px] font-Lexend not-italic font-bold leading-[normal] tracking-[1.65px]">LDRP</h2>
  <h2 className=" text-[color:var(--01,#16376E)]  font-medium  tracking-[0.18px]  text-[15px] font-Lexend not-italic  leading-[normal] ">Student Mentoring Form</h2>
  </div>
  </div>
    </div>
    </>
  );
};

export default Navbar;
