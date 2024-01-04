import React, { useEffect,useState } from 'react'

const AttendanceHod = () => {
  const data = [
    {
        imagetitle: "B",
        nos:"No. of Students",
        sno:'78',
        attendance:"All over Attendance",
        per:"80%",
        mentor:"Mentor:",
        mentor2:"xyz",
        email_1:"xyz13@ldrp.ac.in",
        cc:"CC:",
        cc2:"abc",
        email:"abc21@ldrp.ac.in",
        path:"/attendancetable"

      },
      {
        imagetitle: "B",
        nos:"No. of Students",
        sno:'78',
        attendance:"All over Attendance",
        per:"80%",
        mentor:"Mentor:",
        mentor2:"xyz",
        email_1:"xyz13@ldrp.ac.in",
        cc:"CC:",
        cc2:"abc",
        email:"abc21@ldrp.ac.in",
        path:"/attendancetable"
      },
      {
        imagetitle: "B",
        nos:"No. of Students",
        sno:'78',
        attendance:"All over Attendance",
        per:"80%",
        mentor:"Mentor:",
        mentor2:"xyz",
        email_1:"xyz13@ldrp.ac.in",
        cc:"CC:",
        cc2:"abc",
        email:"abc21@ldrp.ac.in",
        path:"/attendancetable"
      },
      {
        imagetitle: "B",
        nos:"No. of Students",
        sno:'78',
        attendance:"All over Attendance",
        per:"80%",
        mentor:"Mentor:",
        mentor2:"xyz",
        email_1:"xyz13@ldrp.ac.in",
        cc:"CC:",
        cc2:"abc",
        email:"abc21@ldrp.ac.in",
        path:"/attendancetable"
      },
           
      
]



  return (
    <>
      <div className=" rounded-[6px]  py-5 overflow-y-auto  bg-[#F9FAFA]  ">
        <div className="py-5 px-6">
          <h1 className="font-Raleway text-[#47A5E4] text-center text-[20px] font-bold leading-[23.48px] tracking-[5.5%]">
          Classes Of Computer Engineering {" "}
          </h1>
        </div>

       
        {/* =======================second row ===================== */}
       
  
              <div className="relative">
          <div className="flex flex-row gap-10 items-center justify-center">
        {data.map((value,index)=>{
          return(
          
           
            <div className=""key={index}>
              <a href={value.path}>
              <div className="absolute top-[78px] left-55">
              <div className="  border-[5px] border-[#FFFFFF] rounded-[11px] bg-gradient-to-r from-[#47A5E4] to-[#16376E]  w-[197px] h-[197px] ">
                  <div className="grid place-items-center relative top-10 ">
                    <span className="text-[#FFFFFF] text-[70px] font-bold leading-[84.72px] tracking-[2%] ">
                  { value.imagetitle}
                    </span>
                  </div>
                  <div className="flex justify-between items-center relative top-14 px-1">
                    <span className="font-inter font-bold text-[10px] text-[#FFFF] leading-[12.1px] tracking-[2%]">
                    {value.attendance}
                    </span>
                    <span className="font-inter font-bold text-[16px] text-[#FFFF] leading-[21.78px] tracking-[2%]">
                    {value.per}
                    </span>
                  </div>
                  <div className="flex justify-between items-center relative top-14 px-3 ">
                    <span className="font-inter font-bold text-[10px] text-[#FFFF] leading-[12.1px] tracking-[2%]">
                    {value.nos}
                    </span>
                    <span className="font-inter font-bold text-[16px] text-[#FFFF] leading-[21.78px] tracking-[2%]">
                    {value.sno}
                    </span>
                  </div>
                </div>
              </div>
              <div className=" py-[80px]  ">
                <div className=" border-[1px] rounded-[11px] bg-[#FFFF] w-[197px] h-[300px] shadow-[rgba(153,153,153,0.25)_2px_4px_28px_0px]">
                  <div className="absolute top-[60%] left-55">
                    <span className="pl-2 text-[#101010] font-inter not-italic  text-[14px] font-bold leading-normal tracking-[0.28px] ">
                     {value.mentor}
                      <span className="pl-2 text-[#101010] font-inter not-italic  text-[14px] font-medium leading-normal tracking-[0.28px] ">
                        {" "}
                        {value.mentor2}
                      </span>
                    </span>
                  </div>
                  <div className="absolute top-[65%] left-57">
                    <span className="pl-2 text-[#101010] font-Poppins not-italic  text-[8px] font-normal leading-normal tracking-[0.16px] ">
                     {value.email_1}
                    </span>
                  </div>

                  <div className="absolute top-[70%] left-57">
                    <span className="pl-2 text-[#101010] font-inter not-italic  text-[14px] font-bold leading-normal tracking-[0.28px] ">
                    {value.cc}
                      <span className="pl-2 text-[#101010] font-inter not-italic  text-[14px] font-medium leading-normal tracking-[0.28px] ">
                       {value.cc2}
                      </span>
                    </span>
                  </div>

                  <div className="absolute top-[75%] left-57">
                    <span className="pl-2 text-[#101010] font-Poppins not-italic  text-[8px] font-normal leading-normal tracking-[0.16px] ">
                      {value.email}
                    </span>
                  </div>
                </div>
              </div>
              </a>
            </div>
 
         
            
          )
        })}
           </div>
            </div>
        {/* =====================end ============================= */}
      </div>
    </>

  );
};

export default AttendanceHod;
