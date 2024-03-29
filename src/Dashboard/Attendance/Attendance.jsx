import React, { useState } from "react";
import TabNavItem from "../TabNavItem/TabNavItem";
import TabContent from "../TabContent/TabContent";
import Maths from "./Maths";
import BEEE from "./BEEE";
import { NavLink, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// import { RxDotFilled } from 'react-icons/rx';// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

const Attendance = ({ id, title }) => {
  const [activeTab, setActiveTab] = useState();
    const [curr,setCurr] = useState(0)
    const menuItems = [
      {
        name: "Maths",
        exact: true,
        to: "/dashboard",
      },
        {
        name: "BEEE",
        exact: true,
        to: "/attendance",
      },
      {
        name: "FME",
        exact: true,
        to: "/results",
      },
      {
        name: "EG",
        exact: true,
        to: "/fees",
      },
      {
        name: "Civil Engineering",
        exact: true,
        to: "/university",
      },
      {
        name: "Engineering Physics",
        exact: true,
        to: "/notification",
      },
    ]; 
    const Data = [
      {
        text: "1 January 2023 - 1 Feb 2023 ",
      },
      {
          text: "1 Feb 2023 - 1 March 2023 ",
      },
      {
          text: "1 March 2023 - 1 April 2023 ",
      },
      {
          text: "1 April 2023 - 1 May 2023 ",
      },
      {
          text: "1 May 2023 - 1 June 2023 ",
      },
      {
          text: "1 June 2023 - 1 July 2023 ",
      },
      {
          text: "1 July 2023 - 1 Aug 2023 ",
      },
      {
          text: "1 Aug 2023 - 1 Sep 2023 ",
      },
      {
          text: "1 Sep 2023 - 1 Oct 2023 ",
      },
      {
          text: "1 Oct 2023 - 1 Nov 2023 ",
      },
      {
          text: "1 Nov 2023 - 1 Dec 2023 ",
      },

   ];   const handleprev = (id) =>{
        setCurr((curr) => (curr === 0 ? id.length - 1 : curr - 1) )
    }
    const handlenext = (id) =>{
      setCurr((curr) => (curr ===  id.length - 1 ? 0 : curr + 1) )
      
    }

  return (
    <>
    
    <div className="  px-2 ">
      <div className="overflow-hidden  rounded-lg  overflow-y-scroll w-full  p-10  pt-5   bg-white ">
        <div className="flex justify-center  items-center ">
          <h2 className="text-[color:var(--02,#47A5E4)] py-2 text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
            Attendance Details
          </h2>
        </div>
        <div className="flex flex-col relative w-full ">
          {/* <div className="flex flex-row gap-x-0.5 py-3  items-center justify-center">
          <button className="bg-[#16376E] w-10 rounded-[3px_0px_0px_3px]" onClick={handleprev} >
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
  <path d="M22.4443 10.7916L13.2393 18.5L22.4443 26.2083L22.4443 10.7916Z" fill="white"/>
</svg></button>

        <ul className="flex flex-row  items-center justify-between bg-[#F5F5F5] shadow-[0px_4px_12px_0px_rgba(157,157,157,0.18)_inset] rounded-[3px] overflow-hidden ">
        <TabNavItem
          title="Maths"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="BEEE"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="FME"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="EG"
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Civil Engineering"
          id="tab5"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Engineering Physics"
          id="tab6"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
      <button className="bg-white rounded-[3px_0px_0px_3px] w-10 shadow-[0px_4px_12px_0px_rgba(157,157,157,0.18)_inset]" onClick={handlenext} ><svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
  <path d="M15.5557 10.7916L24.7607 18.5L15.5557 26.2083L15.5557 10.7916Z" fill="#16376E"/>
</svg></button>
</div> */}
      <ul className='flex flex-col justify-between items-center bg-white  '>
             <div className='flex flex-row justify-start items-center bg-[#F5F5F5] p-1'>

<NavLink  to="/attendanceitem"  className={" cursor-pointer rounded-[6px] text-[16px] font-Poppins px-10 py-2 not-italic font-bold leading-[normal] tracking-[0.32px] capitalize " + (activeTab === id ? "bg-[#47A5E4] text-white border-transparent " : "border-transparent  text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.32px] capitalize")}>Maths</NavLink>
<NavLink  to="/beee"  className={" cursor-pointer rounded-[6px] text-[16px] font-Poppins px-10 py-2 not-italic font-bold leading-[normal] tracking-[0.32px] capitalize " + (activeTab === id ? " " : "border-transparent  text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.32px] capitalize")}>BEEE</NavLink>
<NavLink  to="/fme"  className={" cursor-pointer rounded-[6px] text-[16px] font-Poppins px-10 py-2 not-italic font-bold leading-[normal] tracking-[0.32px] capitalize " + (activeTab === id ? "" : "border-transparent  text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.32px] capitalize")}>FME</NavLink>
<NavLink  to="/eg"  className={" cursor-pointer rounded-[6px] text-[16px] font-Poppins px-10 py-2 not-italic font-bold leading-[normal] tracking-[0.32px] capitalize " + (activeTab === id ? " " : "border-transparent  text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.32px] capitalize")}>EG</NavLink>
<NavLink  to="/civil"  className={" cursor-pointer rounded-[6px] text-[16px] font-Poppins px-10 py-2 not-italic font-bold leading-[normal] tracking-[0.32px] capitalize " + (activeTab === id ? " " : "border-transparent  text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.32px] capitalize")}>Civil Engineering</NavLink>
<NavLink  to="/physics"  className={" cursor-pointer rounded-[6px] text-[16px] font-Poppins px-10 py-2 not-italic font-bold leading-[normal] tracking-[0.32px] capitalize " + (activeTab === id ? " " : "border-transparent  text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.32px] capitalize")}>Engineering Physics</NavLink>

</div>
<div className="pt-7 ">
      <div className="border-[#47A5E4] border-[2px] rounded-[4px] px-0  ">
        <div className="relative justify-start flex -top-6 left-10  ">
        <h2 className="text-[color:var(--02,#47A5E4)] bg-white text-[20px] font-Poppins px-3  py-2 not-italic font-semibold leading-[normal] tracking-[1.1px]">Lectures</h2>
        </div>
        <div className="flex flex-row  ">
        <div className=" flex flex-row px-7 gap-x-7 pt-3">
            <div className="flex flex-col gap-y-4">
                <div>
                <h2 className="text-[color:var(--black,#101010)] text-center font-Poppins text-[26px] not-italic font-normal leading-[normal]">Attendance All Over</h2>
                </div>
                <div className="pt-10">
                <div className="skill  one">
      <div className="outer bg-[#ECEDEE]">
        <div className="inner bg-white">
          <div id="number">70%</div>
        </div>
      </div>

      <svg className="svgeffect" xmlns="http://www.w3.org/2000/svg" width="253" height="253" viewBox="0 0 279 279" fill="none">
<path d="M73.7858 31.2525C93.0486 19.582 115.02 13.282 137.425 12.9158C142.717 12.8293 146.75 17.404 146.437 22.6871V22.6871C146.124 27.9703 141.581 31.9545 136.291 32.1122C117.774 32.6642 99.6533 37.9891 83.7168 47.6443C65.0398 58.9599 50.2458 75.688 41.2984 95.6083C32.3509 115.529 29.6733 137.699 33.6208 159.176C37.5684 180.654 47.9544 200.423 63.4003 215.86C78.8463 231.297 98.6217 241.671 120.102 245.606C141.582 249.541 163.75 246.85 183.665 237.891C203.58 228.932 220.3 214.128 231.604 195.444C241.25 179.502 246.564 161.378 247.105 142.861C247.26 137.571 251.241 133.026 256.524 132.71V132.71C261.807 132.393 266.384 136.423 266.301 141.715C265.948 164.121 259.661 186.096 248.002 205.366C234.685 227.376 214.989 244.815 191.528 255.369C168.068 265.924 141.952 269.093 116.648 264.458C91.3442 259.823 68.0481 247.601 49.8523 229.416C31.6564 211.231 19.4214 187.942 14.771 162.641C10.1207 137.34 13.2751 111.222 23.8154 87.7556C34.3558 64.2889 51.7836 44.5826 73.7858 31.2525Z" stroke="#FFC700" stroke-width="24" stroke-linejoin="bevel"/>

        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#FFC700" />
            <stop offset="100%" stop-color="#FFC700" />
          </linearGradient>
        </defs>
        {/* <circle cx="70" cy="80" r="70" stroke-linecap="round" /> */}
      </svg>
    </div>

                </div>
            </div>
            <div className="flex flex-col gap-y-10">
            <div>
                <h2 className="text-[color:var(--01,#16376E)] text-center text-[22px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.44px]">Total Attendance</h2>
            </div>
            <div>
            <div>
                <h2 className="text-[color:var(--black,#101010)] text-center text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px]">Total Lectures Conducted</h2>
                <h2 className="text-[color:var(--02,#47A5E4)] text-center text-[34px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.68px]">10</h2>
            </div>
            <div>
                <h2 className="text-[color:var(--black,#101010)] text-center text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px]">Total Lectures Attend By Student</h2>
                <h2 className="text-[color:var(--02,#47A5E4)] text-center text-[34px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.68px]">8</h2>
</div>
            <div>
                <h2 className="text-[color:var(--black,#101010)] text-center text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px]">All over Attendance of Month</h2>
                <h2 className="text-[color:var(--02,#47A5E4)] text-center text-[34px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.68px]">80 %</h2>
            </div>
            </div>
            </div>
            </div>
            <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="1" height="412" viewBox="0 0 1 482" fill="none">
  <path d="M0.5 0.5V481.5" stroke="#BDBDBD" stroke-linecap="round" stroke-dasharray="5 5"/>
</svg>
</div>
<div className="px-5">
<div className="flex flex-col gap-y-3">
<div className="max-w-[22rem] ">
<Swiper
 modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
 navigation={{
    nextEl: ".button-next-slide",
    prevEl: ".button-prev-slide",
  }}
// className="mySwiper "
>
{Data.map((item, index) => (
    <SwiperSlide key={index}>
        <div className="  px-11  ">
    <h2 className="absolute py-2  text-[color:var(--02,#47A5E4)]   text-center text-[18px] not-italic font-semibold leading-[normal] tracking-[0.44px] font-inter ">{item.text}</h2>
    </div>
    </SwiperSlide>
  ))}
  <div className=" ">
  <div className="relative  flex flex-row gap-x-[16.5rem] ">
    <div className=" button-prev-slide  cursor-pointer  ">
    <button className=" bg-[#16376E]  rounded-[3px_0px_0px_3px]" >
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
  <path d="M22.4443 10.7916L13.2393 18.5L22.4443 26.2083L22.4443 10.7916Z" fill="white"/>
</svg></button>
    </div>
    <div className="  button-next-slide  cursor-pointer">
    <button className=" bg-[#16376E] rounded-[0px_3px_3px_0px]  shadow-[0px_4px_12px_0px_rgba(157,157,157,0.18)_inset]"  ><svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
    <path d="M15.5557 10.7916L24.7607 18.5L15.5557 26.2083L15.5557 10.7916Z" fill="white"/>
  </svg></button>
    </div>
    </div>
    </div>
</Swiper>
</div>
            <div>
                <h2 className="text-[color:var(--black,#101010)] text-center text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px]">Total Lectures Conducted</h2>
                <h2 className="text-[color:var(--02,#47A5E4)] text-center text-[34px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.68px]">4</h2>
            </div>
            <div>
                <h2 className="text-[color:var(--black,#101010)] text-center text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px]">Total Lectures Attend By Student</h2>
                <h2 className="text-[color:var(--02,#47A5E4)] text-center text-[34px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.68px]">4</h2>
</div>
            <div>
                <h2 className="text-[color:var(--black,#101010)] text-center text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px]">All over Attendance of Month</h2>
                <h2 className="text-[color:var(--02,#47A5E4)] text-center text-[34px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.68px]">100 %</h2>
            </div>
            </div>
</div>
        </div>
      </div>
      </div>
      {/* <div className="">
        <TabContent id="tab1" activeTab={activeTab}>
        <Maths />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <BEEE/>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
        
        </TabContent>
        <TabContent id="tab5" activeTab={activeTab}>
        </TabContent>
        <TabContent id="tab6" activeTab={activeTab}>
        </TabContent>
      </div> */}
     </ul>
      </div>
      </div>
      </div>

      

    
        
      
     
    </>
  );
};

export default Attendance;
