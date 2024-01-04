import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
// import './App.css'

class Seminar extends Component {
  continue = e => {
    e.preventDefault(); 
    const isFirstNameValid = this.props.validateFirstName();
    
    if (isFirstNameValid ) {
      this.props.nextStep();
    }
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { 
      firstname, 
     
      handleChange, 
      validateFirstName,
      
      isErrorFirstName,
     
      errorMessageFirstName,
      
    } = this.props;

    return (
      <div className='form max-h-[910px] overflow-y-scroll'>
        <form>

          <Stepper
            steps={[{ label: 'Basic Information' }, { label: 'Student History And Information' }, { label: 'External Exam Sheet' },{ label: 'Mid Semester Details' },{ label: 'Participated  Co-Curricular Activities' },{ label: 'Participated Seminar or Project' },{ label: 'Membership Organization' }]}
            activeStep={5}
            styleConfig={{
              activeBgColor: '#2b7cff',
              activeTextColor: '#fff',
              inactiveBgColor: '#fff',
              inactiveTextColor: '#2b7cff',
              completedBgColor: '#fff',
              completedTextColor: '#2b7cff',
              size: '3em'
            }}
            className={'stepper'}
            stepClassName={'stepper__step'}
          />

<div className="overflow-hidden  max-h-[520px]   overflow-y-scroll flex justify-center ">
      <div className="w-screen px-7 py-[1.8rem] ">
        <div className="flex justify-center  items-center">
          <h2 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
            List the Seminar or Project you have Participated in
          </h2>
        </div>
        <div className=" pt-7 flex flex-row justify-between items-center">
          <div className="flex flex-row px-1 items-center">
            <div className="flex px-1">
              <h2
                className="    text-[color:var(--01,#159BD6)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize
"
              >
                {" "}
                Note:
              </h2>
            </div>
            <div className="flex ">
              <h2 className="text-[color:var(--01,#159BD6)] text-[14px] font-inter not-italic font-normal leading-[normal] tracking-[0.28px] capitalize">
                Please Fill all the details in{" "}
                <span className="text-[color:var(--01,#159BD6)] text-[14px] font-inter not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">
                  CAPITAL
                </span>{" "}
                Letters only
              </h2>
            </div>
          </div>
        </div>
        <form >
          <div className="flex flex-row justify-between py-5">
          {/* <div className="flex flex-row justify-center items-center">
                <div className="flex justify-center relative min-w-[98px] px-1 h-[40px]">
               <select  className=" px-9 rounded-[5px] border-none appearance-none p-2 w-[100%] hover:text-[#47A5E4] bg-[#E6E6E6] text-[18px] text-[color:var(--02,#363636)] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize "
              id="12th"
              name="selectoption"
           
              tabIndex={1}
               
               >
               <option className="">12th</option>
               {options.map((option, index) => {
                return (
                    <option key={index}>
                        {option}
                    </option>
                );
               })}
               </select>
               <div  className="icon-container pointer-events-none w-[50px] h-[100%] absolute -top-1 right-4 flex items-center justify-center ">
                <span  className="text-[20px] text-black  "><FaSortDown /></span>
               </div>
               </div>
            </div>   */}

            {/* INPUTS */}

            <div className="flex flex-row">
              <label
                for="caste"
                className="px-1  py-2 flex justify-start text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Activity Name:{" "}
              </label>

              <input
              id='firstname'
                type="text"
                name="activity"
             //   value={activity}
             //   onChange={handleInputChange}
                //onBlur={validateOne}
                onChange={handleChange('firstname')} onBlur={validateFirstName}
                tabIndex={2}
                placeholder="Activity Name"
                className="hover:border-[2px] hover:border-[#159BD6] w-[243px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
               
              />
               <p className='error p'>{isErrorFirstName &&   errorMessageFirstName}</p>
            </div>
            <div className="flex flex-row">
              <label
                for="date"
                className="px-1 flex justify-start  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Date:{" "}
              </label>

              <input
                type="date"
                name="date"
              //  value={date}
             //   onChange={handleInputChange}
                //onBlur={validateOne}
              //  tabIndex={3}
                placeholder="DD/MM/YYYY"
                className="hover:border-[2px] hover:border-[#159BD6] w-[133px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
                
              />
            </div>
            <div className="flex flex-row">
              <label
                for="weight"
                className="flex justify-start px-1 py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Place:{" "}
              </label>

              <input
                type="text"
                name="place"
             //   value={place}
             //   onChange={handleInputChange}
                //onBlur={validateOne}
                placeholder="Place"
                className="hover:border-[2px] hover:border-[#159BD6] w-[143px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
                tabIndex={4}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="text-[color:var(--03,#FFF)] rounded-[5px] text-[16px] font-inter px-14 py-2 bg-[#159BD6] shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
              Add
            </button>
          </div>
        </form>

        {/* TABLE */}
        <section  className="relative  w-[100%] py-7 ">

<section className=" capitalize ">
<div className="  w-[100%] bg-white ">
<table className="table-auto1 table-auto min-w-[100%] max-h-[250px] overflow-y-scroll overflow-hidden  border-collapse  ">
        <thead id="table_fixed">
                <tr className="text-[18px] font-bold font-Montserrat  text-white bg-[#47A5E4] px-3 sticky top-0 z-20 max-h-[70px]  h-[10px]">
                  {" "}
                  <th className="px-[2.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                    <p className=" text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize ">During</p>
                  </th>
                  <th className="px-[10rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                    <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Activity</p>
                  </th>
                  <th className="px-[1.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                    <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Date</p>
                  </th>
                  <th className="px-[1.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                    <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Place</p>
                  </th>
                </tr>
              </thead>
            <tbody className=''>
              {/* {Data.map((id,index) =>{
                return(
                  <tr
                  key={index}
className="text-sm  h-[55px] rounded-lg py-3 px-3 transition-all duration-300  "
              
                >
                      <td className="border-[2px] border-[#47A5E4] px-[1rem] whitespace-nowrap">
                    <div className="">
                      <div className="text-center  text-black text-[16px]  font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                    
                  
                      </div>
                    </div>
                  </td>
                  <td className="px-[1rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
                    <div className="">
                      <a href={id.path}>
                      <div className="  text-black text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">    
                   
                  
                     
                      </div>
                      </a>
                    </div>
                  </td>
                  <td className="px-[1rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
                    <div className="">
                      <div className="text-center text-[#00BE35] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                    
                
                  
                      </div>
                    </div>
                  </td>
                  <td className="px-[1.2rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
                    <div className="">
                      <div className="text-center text-black text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                    
                     
                      </div>
                    </div>
                  </td>
       
                </tr>
                )
              })} */}
            </tbody>
            </table>
          </div>
          </section>
          </section>
        {/* <div className=" py-2 ">
          
          <div className="py-4">
            <table className=" ">
              <tr className="text-center ">
                <th className="border-r-[1px]  w-[176px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  During
                </th>
                <th className="border-r-[1px] w-[321px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Name
                </th>
                <th className="border-r-[1px] w-[93px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Date
                </th>
                <th className="border-r-[1px] w-[166px] h-[45px] bg-[#159BD6] rounded-[0px_4px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Place
                </th>
              </tr>
              <tr className="">
                <th>
                  <div className=" p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                    {selectoption}
                  </div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                    {activity}
                  </div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                    {date}
                  </div>
                </th>

                <th>
                  <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                    {place}
                  </div>
                </th>
              </tr>
              <tr className="">
                <th>
                  <div className=" p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3  w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>

                <th>
                  <div className="p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
              </tr>
              <tr className="">
                <th>
                  <div className=" p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>

                <th>
                  <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
              </tr>
              <tr className="">
                <th>
                  <div className=" p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3  w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>

                <th>
                  <div className="p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
              </tr>
              <tr className="">
                <th>
                  <div className=" p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>

                <th>
                  <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
              </tr>
              <tr className="">
                <th>
                  <div className=" p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3  w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>

                <th>
                  <div className="p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
              </tr>
              <tr className="">
                <th>
                  <div className=" p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>

                <th>
                  <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
              </tr>
            </table>
          </div>
        </div> */}

        {/* BUTTONS */}

        <div className="flex flex-row justify-center items-center gap-x-7">
        <button
        onClick={this.back}
         className="border-[#159BD6] px-10 py-2 border-[1px] rounded-[5px] text-[color:var(--01,#159BD6)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize"
       >
         Cancel
       </button>
         <button
          onClick={this.continue}
            className="px-10 py-2 shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] bg-[#159BD6] text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize"
          >
            Save & Next
          </button>
        
        </div>
      </div>
      </div>
            
          {/* <div style={{textAlign: 'center'}}>
            <button className='buttons__button buttons__button--next' onClick={this.continue}>Next</button>
          </div> */}

        </form>
      </div>
    )
  }
}

export default Seminar;
// import React,{useState} from "react";
// import { FaSortDown } from "react-icons/fa";

// const Seminar = ({ handleNextStep, handlePrevStep }) => {
//   const [data,setData] = useState({});
//   const options = [
//     "Semester 2","Semester 3","Semester 4","Semester 5","Semester 6","Semester 7","Semester 8"
//   ];
//   const onOptionChangeHandler = (event) => {
//     setData(event.target.value);
//     console.log(
//         "User Selected Value - ",
//         event.target.value
//     );
// };
//   const [values, setValues] = React.useState({
//     selectoption: "",
//     activity: "",
//     date: "",
//     place: "",
//   });

//   const { selectoption, activity, date, place } = values;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     //setState({...state,[name]:value});
//     setValues({ ...values, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // const isValid = validateAll();

//     // if (!isValid) {
//     //   return false;
//     // }

//     alert(JSON.stringify(values));
//   };
//   const Data = [
//     {
//         Eno:"21BECE30000",
//         Fname:"Raj Mehta",
//         status:"Paid",
//         Method:"Cash",
//         Display:"View",
//         path:"/mentorfees", 
//     },
//     {
//         Eno:"21BECE30000",
//         Fname:"Raj Mehta",
//         status:"Paid",
//         Method:"Cash",
//         Display:"View", 
//         path:"/mentorfees",
//     },
//     {
//         Eno:"21BECE30000",
//         Fname:"Raj Mehta",
//         status:"Paid",
//         Method:"Cash",
//         Display:"View",
//         path:"/mentorfees", 
//     },
//     {
//         Eno:"21BECE30000",
//         Fname:"Raj Mehta",
//         status:"Paid",
//         Method:"Cash",
//         Display:"View", 
//         path:"/mentorfees",
//     },
//     {
//         Eno:"21BECE30000",
//         Fname:"Raj Mehta",
//         status:"Paid",
//         Method:"Cash",
//         Display:"View",
//         path:"/mentorfees", 
//     },
//     {
//         Eno:"21BECE30000",
//         Fname:"Raj Mehta",
//         status:"Paid",
//         Method:"Cash",
//         Display:"View", 
//         path:"/mentorfees",
//     },
// ]

//   return (
//     <>
//   <div className="overflow-hidden  max-h-[720px]   overflow-y-scroll flex justify-center ">
//       <div className="w-screen px-7 py-[1.8rem] ">
//         <div className="flex justify-center  items-center">
//           <h2 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
//             List the Seminar or Project you have Participated in
//           </h2>
//         </div>
//         <div className=" pt-7 flex flex-row justify-between items-center">
//           <div className="flex flex-row px-1 items-center">
//             <div className="flex px-1">
//               <h2
//                 className="    text-[color:var(--01,#159BD6)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize
// "
//               >
//                 {" "}
//                 Note:
//               </h2>
//             </div>
//             <div className="flex ">
//               <h2 className="text-[color:var(--01,#159BD6)] text-[14px] font-inter not-italic font-normal leading-[normal] tracking-[0.28px] capitalize">
//                 Please Fill all the details in{" "}
//                 <span className="text-[color:var(--01,#159BD6)] text-[14px] font-inter not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">
//                   CAPITAL
//                 </span>{" "}
//                 Letters only
//               </h2>
//             </div>
//           </div>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="flex flex-row justify-between py-5">
//           <div className="flex flex-row justify-center items-center">
//                 <div className="flex justify-center relative min-w-[98px] px-1 h-[40px]">
//                <select  onChange={onOptionChangeHandler} className=" px-9 rounded-[5px] border-none appearance-none p-2 w-[100%] hover:text-[#47A5E4] bg-[#E6E6E6] text-[18px] text-[color:var(--02,#363636)] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize "
//               id="12th"
//               name="selectoption"
//               // value={selectoption}
//               // onChange={handleInputChange}
//               //onBlur={validateOne}
//               tabIndex={1}
               
//                >
//                <option className="">12th</option>
//                {options.map((option, index) => {
//                 return (
//                     <option key={index}>
//                         {option}
//                     </option>
//                 );
//                })}
//                </select>
//                <div  className="icon-container pointer-events-none w-[50px] h-[100%] absolute -top-1 right-4 flex items-center justify-center ">
//                 <span  className="text-[20px] text-black  "><FaSortDown /></span>
//                </div>
//                </div>
//             </div>  

//             {/* INPUTS */}

//             <div className="flex flex-row">
//               <label
//                 for="caste"
//                 className="px-1  py-2 flex justify-start text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
//               >
//                 Activity Name:{" "}
//               </label>

//               <input
//                 type="text"
//                 name="activity"
//                 value={activity}
//                 onChange={handleInputChange}
//                 //onBlur={validateOne}
//                 tabIndex={2}
//                 placeholder="Activity Name"
//                 className="hover:border-[2px] hover:border-[#159BD6] w-[243px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
//                 required
               
//               />
//             </div>
//             <div className="flex flex-row">
//               <label
//                 for="date"
//                 className="px-1 flex justify-start  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
//               >
//                 Date:{" "}
//               </label>

//               <input
//                 type="date"
//                 name="date"
//                 value={date}
//                 onChange={handleInputChange}
//                 //onBlur={validateOne}
//                 tabIndex={3}
//                 placeholder="DD/MM/YYYY"
//                 className="hover:border-[2px] hover:border-[#159BD6] w-[133px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
//                 required
                
//               />
//             </div>
//             <div className="flex flex-row">
//               <label
//                 for="weight"
//                 className="flex justify-start px-1 py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
//               >
//                 Place:{" "}
//               </label>

//               <input
//                 type="text"
//                 name="place"
//                 value={place}
//                 onChange={handleInputChange}
//                 //onBlur={validateOne}
//                 placeholder="Place"
//                 className="hover:border-[2px] hover:border-[#159BD6] w-[143px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
//                 required
//                 tabIndex={4}
//               />
//             </div>
//           </div>
//           <div className="flex justify-end">
//             <button className="text-[color:var(--03,#FFF)] rounded-[5px] text-[16px] font-inter px-14 py-2 bg-[#159BD6] shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
//               Add
//             </button>
//           </div>
//         </form>

//         {/* TABLE */}
//         <section  className="relative  w-[100%] py-7 ">

// <section className=" capitalize ">
// <div className="  w-[100%] bg-white ">
// <table className="table-auto1 table-auto min-w-[100%] max-h-[250px] overflow-y-scroll overflow-hidden  border-collapse  ">
//         <thead id="table_fixed">
//                 <tr className="text-[18px] font-bold font-Montserrat  text-white bg-[#47A5E4] px-3 sticky top-0 z-20 max-h-[70px]  h-[10px]">
//                   {" "}
//                   <th className="px-[2.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
//                     <p className=" text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize ">During</p>
//                   </th>
//                   <th className="px-[10rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
//                     <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Activity</p>
//                   </th>
//                   <th className="px-[1.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
//                     <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Date</p>
//                   </th>
//                   <th className="px-[1.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
//                     <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Place</p>
//                   </th>
//                 </tr>
//               </thead>
//             <tbody className=''>
//               {Data.map((id,index) =>{
//                 return(
//                   <tr
//                   key={index}
// className="text-sm  h-[55px] rounded-lg py-3 px-3 transition-all duration-300  "
//                   // key={index}
//                 >
//                       <td className="border-[2px] border-[#47A5E4] px-[1rem] whitespace-nowrap">
//                     <div className="">
//                       <div className="text-center  text-black text-[16px]  font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                    
//                       {/* {id.Eno} */}
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-[1rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
//                     <div className="">
//                       <a href={id.path}>
//                       <div className="  text-black text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">    
                   
//                       {/* {id.Fname} */}
                     
//                       </div>
//                       </a>
//                     </div>
//                   </td>
//                   <td className="px-[1rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
//                     <div className="">
//                       <div className="text-center text-[#00BE35] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                    
//                       {/* {id.status} */}
                  
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-[1.2rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
//                     <div className="">
//                       <div className="text-center text-black text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                     
//                       {/* {id.Method} */}
                     
//                       </div>
//                     </div>
//                   </td>
       
//                 </tr>
//                 )
//               })}
//             </tbody>
//             </table>
//           </div>
//           </section>
//           </section>
//         {/* <div className=" py-2 ">
          
//           <div className="py-4">
//             <table className=" ">
//               <tr className="text-center ">
//                 <th className="border-r-[1px]  w-[176px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
//                   During
//                 </th>
//                 <th className="border-r-[1px] w-[321px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
//                   Name
//                 </th>
//                 <th className="border-r-[1px] w-[93px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
//                   Date
//                 </th>
//                 <th className="border-r-[1px] w-[166px] h-[45px] bg-[#159BD6] rounded-[0px_4px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
//                   Place
//                 </th>
//               </tr>
//               <tr className="">
//                 <th>
//                   <div className=" p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
//                     {selectoption}
//                   </div>
//                 </th>
//                 <th>
//                   <div className="p-3 table-auto1 w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
//                     {activity}
//                   </div>
//                 </th>
//                 <th>
//                   <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
//                     {date}
//                   </div>
//                 </th>

//                 <th>
//                   <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
//                     {place}
//                   </div>
//                 </th>
//               </tr>
//               <tr className="">
//                 <th>
//                   <div className=" p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>
//                 <th>
//                   <div className="p-3  w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>
//                 <th>
//                   <div className="p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>

//                 <th>
//                   <div className="p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>
//               </tr>
//               <tr className="">
//                 <th>
//                   <div className=" p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>
//                 <th>
//                   <div className="p-3 table-auto1 w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>
//                 <th>
//                   <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>

//                 <th>
//                   <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>
//               </tr>
//               <tr className="">
//                 <th>
//                   <div className=" p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>
//                 <th>
//                   <div className="p-3  w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>
//                 <th>
//                   <div className="p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>

//                 <th>
//                   <div className="p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>
//               </tr>
//               <tr className="">
//                 <th>
//                   <div className=" p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>
//                 <th>
//                   <div className="p-3 table-auto1 w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>
//                 <th>
//                   <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>

//                 <th>
//                   <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>
//               </tr>
//               <tr className="">
//                 <th>
//                   <div className=" p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>
//                 <th>
//                   <div className="p-3  w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>
//                 <th>
//                   <div className="p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>

//                 <th>
//                   <div className="p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>
//               </tr>
//               <tr className="">
//                 <th>
//                   <div className=" p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>
//                 <th>
//                   <div className="p-3 table-auto1 w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>
//                 <th>
//                   <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>

//                 <th>
//                   <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
//                 </th>
//               </tr>
//             </table>
//           </div>
//         </div> */}

//         {/* BUTTONS */}

//         <div className="flex flex-row justify-center items-center gap-x-7">
//           <button
//             onClick={handleNextStep}
//             className="px-10 py-2 shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] bg-[#159BD6] text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize"
//           >
//             Save & Next
//           </button>
//           <button
//             onClick={handlePrevStep}
//             className="border-[#159BD6] px-10 py-2 border-[1px] rounded-[5px] text-[color:var(--01,#159BD6)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//       </div>
 
//     </>
//   );
// };

// export default Seminar;
