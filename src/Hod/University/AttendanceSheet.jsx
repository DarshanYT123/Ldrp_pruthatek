import React from "react";

const AttendanceSheet = () => {

  const [values, setValues]= React.useState ({
    date:"",
    selectoption:"",
    selectStudentPresentoption:"",
    nextdate:""

  })

  const {date,selectoption,selectStudentPresentoption,nextdate} =values

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    //setState({...state,[name]:value});
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    

    alert(JSON.stringify(values));
  };
  return (
    <>
      <div classname=" top-8 right-0  px-10  py-5 overflow-y-auto h-[5rem]  bg-white">
        <div className="flex  items-left justify-left py-2 ml-14 ">
         
          <ul class="flex flex-wrap gap-10">
    <li class="mr-2">
        <a href="#" 
        aria-current="page" 
        class="font-Poppins text-[18px] font-semibold leading-[27px] text-[#47A5E4] cursor-pointer">
         Counsellor Details{" "}</a>
    </li>
    <li class="mr-2">
        <a href="#" 
        class="font-Poppins text-[18px] font-semibold leading-[27px] text-[#47A5E4] cursor-pointer">
          Attendance Sheet{" "}
          </a>
    </li>
    </ul>
   
        </div>
        <div className="border w-[90%] h-[2%] border-[#BDBDBD] ml-10">
    </div>

        <form onSubmit={handleSubmit}>

        <div className="flex flex-row gap-x-[2rem] items-center justify-center py-5">
          <div className="flex">
            <label
              for="Counselling Date :"
              className=" px-1 py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
            >
              date :{" "}
            </label>
            <input
              type="date"
              placeholder=""
                name="date"
                value={date}
                onChange={handleInputChange}
              // onBlur={validateOne}
              className="text-[color:var(--06,#CBCBCB)] hover:border-[2px] hover:placeholder-[#159BD6]  hover:border-[#159BD6] text-[16px] font-inter not-italic font-medium leading-[normal] tracking-[0.32px] capitalize  w-[160px] h-[40px] rounded-[5px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
              required
              tabIndex="1"
            />
          </div>

          <div className="flex">
            <label
              for="Mentor"
              className="ml-[20px] px-2 text-[14px]  font-Poppins font-semibold text-[#1E1E1E] leading-[24px]"
            >
              Is Mentor/Chief/
              <br />
              Coordinator Present ?
            </label>
            <select
              id="Mentor"
              name="selectoption"
              value={selectoption}
              onChange={handleInputChange}
              //onBlur={validateOne}
              tabIndex={1}
              className="flex flex-row w-[100px] h-[40px]  bg-[#E6E6E6] hover:text-[#47A5E4]  text-center  rounded-[5px] focus:outline-none text-[color:var(--02,#363636)] text-[18px] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="flex">
            <label
              for="Present"
              className="ml-[20px] px-2 text-[14px]  font-Poppins font-semibold text-[#1E1E1E] leading-[24px]"
            >
              Is Student<br /> Present ?
            </label>
            <select
              id="SPresent"
              name="selectStudentPresentoption"
              value={selectStudentPresentoption}
              onChange={handleInputChange}
              //onBlur={validateOne}
              tabIndex={1}
              className="flex flex-row w-[100px] h-[40px]  bg-[#E6E6E6] hover:text-[#47A5E4]  text-center  rounded-[5px] focus:outline-none text-[color:var(--02,#363636)] text-[18px] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="flex">
            <label
              for="nextdate"
              className=" px-1 py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
            >
              Next date :{" "}
            </label>
            <input
              type="date"
              placeholder=""
                name="nextdate"
                value={nextdate}
                onChange={handleInputChange}
              // onBlur={validateOne}
              className="text-[color:var(--06,#CBCBCB)] hover:border-[2px] hover:placeholder-[#159BD6]  hover:border-[#159BD6] text-[16px] font-inter not-italic font-medium leading-[normal] tracking-[0.32px] capitalize  w-[160px] h-[40px] rounded-[5px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
              required
              tabIndex="1"
            />
          </div>
        </div>
        <div className="flex justify-end mr-14 py-5">
            <button className="text-[color:var(--03,#FFF)] rounded-[5px] text-[16px] font-inter px-14 py-2 bg-[#159BD6] shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
              Add
            </button>
          </div>

        {/* TABLE */}

        <div className="py-4 flex items-center justify-center ">
            <table className="">
              <tr className="text-center ">
                <th className="border-r-[1px]  w-[140px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                Sr No
                </th>
                <th className="border-r-[1px] w-[140px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                Date
                </th>
                <th className="border-r-[1px] w-[350px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                Is Mentor/Chief/Coordinator Present?
                </th>
                <th className="border-r-[1px] w-[250px] h-[45px] bg-[#159BD6] rounded-[0px_4px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                Is Student Present ?
                </th>
                <th className="border-r-[1px] w-[140px] h-[45px] bg-[#159BD6] rounded-[0px_4px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
              Next Date
                </th>
              </tr>

              {/* <tr className="">
                <th>
                  <div className=" p-3 table-auto1 w-[150px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                 
                  </div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[150px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                  {date}
                  </div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[400px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                  {selectoption}
                  </div>
                </th>

                <th>
                  <div className="p-3 table-auto1 w-[250px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                  { selectStudentPresentoption}
                  </div>
                </th>

                <th>
                  <div className="p-3 table-auto1 w-[250px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                  {nextdate}
                  </div>
                </th>
              </tr>

              <tr className="">
                <th>
                  <div className=" p-3  w-[150px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                 
                  </div>
                </th>
                <th>
                  <div className="p-3 w-[150px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>
                <th>
                  <div className="p-3  w-[400px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>

                <th>
                  <div className="p-3  w-[250px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>

                <th>
                  <div className="p-3  w-[250px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>
              </tr>

              <tr className="">
                <th>
                  <div className=" p-3 table-auto1 w-[150px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[150px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[400px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>

                <th>
                  <div className="p-3 table-auto1 w-[250px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>

                <th>
                  <div className="p-3 table-auto1 w-[250px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>
              </tr>

              <tr className="">
                <th>
                  <div className=" p-3  w-[150px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>
                <th>
                  <div className="p-3 w-[150px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>
                <th>
                  <div className="p-3  w-[400px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>

                <th>
                  <div className="p-3  w-[250px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>

                <th>
                  <div className="p-3  w-[250px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>
              </tr>
              <tr className="">
                <th>
                  <div className=" p-3 table-auto1 w-[150px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[150px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[400px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>

                <th>
                  <div className="p-3 table-auto1 w-[250px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>

                <th>
                  <div className="p-3 table-auto1 w-[250px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>
              </tr>

              <tr className="">
                <th>
                  <div className=" p-3  w-[150px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>
                <th>
                  <div className="p-3  w-[150px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>
                <th>
                  <div className="p-3  w-[400px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>

                <th>
                  <div className="p-3  w-[250px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>

                <th>
                  <div className="p-3  w-[250px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   
                  </div>
                </th>
              </tr>
            */}

              </table>
              </div>

            
              </form>
      </div>
    </>
  );
};

export default AttendanceSheet;
