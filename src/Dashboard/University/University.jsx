import React, { useState } from "react";

const UniversityHod = ({handleNextStep}) => {

  return (
    <>
    <div className="w-full  px-2 ">
      <div className="overflow-hidden rounded-lg  overflow-y-scroll w-full  p-10  pt-5  max-h-[515px] bg-white ">
        <div className="flex justify-center  items-center ">
          <h2 className="text-[color:var(--02,#47A5E4)] py-2 text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
            University Section
          </h2>
        </div>
       <div className="flex flex-row justify-between gap-x-60 py-6">
       <div className="flex flex-col gap-y-3">
       <div>
        <h2 className="  text-black text-[20px] not-italic font-bold leading-[normal] tracking-[1.1px] font-Raleway ">Transcript</h2>
        </div>
        <div>
        <button className="text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] bg-[#159BD6] px-5 py-2 ">Get</button>
        </div>
        </div>
        <div className="flex flex-col gap-y-3">
       <div>
        <h2 className="  text-black text-[20px] not-italic font-bold leading-[normal] tracking-[1.1px] font-Raleway ">LOR</h2>
        </div>
        <div>
        <button className="text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] bg-[#159BD6] px-5 py-2 ">Get</button>
        </div>
        </div>
        <div className="flex flex-col gap-y-3">
       <div>
        <h2 className="  text-black text-[20px] not-italic font-bold leading-[normal] tracking-[1.1px] font-Raleway ">Degree Certificate</h2>
        </div>
        <div>
        <button className="text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] bg-[#159BD6] px-5 py-2 ">Get</button>
        </div>
        </div>
       </div>
      </div>
      </div>
    </>
  );
};

export default UniversityHod;
