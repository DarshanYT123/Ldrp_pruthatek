import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
// import './App.css';
import DragDropImage from "./DragDropImage";
import FatherDragDrop from "./FatherDragDrop";
 import MotherDragDrop from "./MotherDragDrop";

class Basicinfo extends Component {
  continue = e => {
    e.preventDefault(); 
    const isFirstNameValid = this.props.validateFirstName();
    // const isLastNameValid = this.props.validateLastName();
    const isenrollmentnoValid =this.props.validateEnrollmentno();
    if (  isFirstNameValid &&  isenrollmentnoValid ) {
      this.props.nextStep();
    }
  }

    render() {
      const { 
        firstname, 
        enrollmentno,

        
        handleChange, 
        validateFirstName,
        isErrorFirstName,
        isErrorEnrollmentno,
        errorMessageFirstName,
        errorMessageEnrollmentno,
        validateEnrollmentno
        
      } = this.props;
    

 
   

   

    
    return (
      <div className='form max-h-[910px] overflow-y-scroll '>
        <form>

          <Stepper
            steps={[{ label: 'Basic Information' }, { label: 'Student History And Information' }, { label: 'External Exam Sheet' },{ label: 'Mid Semester Details' },{ label: 'Participated  Co-Curricular Activities' },{ label: 'Participated Seminar or Project' },{ label: 'Membership Organization' }]}
            activeStep={0}
            styleConfig={{
              activeBgColor: '#2b7cff',
              activeTextColor: '#fff',
              inactiveBgColor: '#fff',
              inactiveTextColor: '#2b7cff',
              completedBgColor: '#fff',
              completedTextColor: '#2b7cff',
              size: '1.5em'
            }}
            className={'stepper'}
            stepClassName={'stepper__step'}
          />

<div className="overflow-hidden  max-h-[520px]   overflow-y-scroll flex justify-center ">
      <div className=" px-7  relative  w-screen ">
      <div className="flex justify-center  items-center">
          <h2 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
            Basic Information
          </h2>
        </div>
        <div className=" pt-7 flex flex-row  items-center">
          <div className="flex px-1">
            <h2 className="text-[color:var(--01,#159BD6)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
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

        {/* FORM START */}
        <form className="px-10">
          <div className="flex  flex-row justify-between items-center py-5  ">
            <div className="">
              <label
                for="fullname"
                className=" flex justify-start  py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
              >
                Student Name{" "}
              </label>
              <div className=" p-0.5 w-[303px] h-[48px] ">
                <input
                 id="firstname"
                 name="firstname"
                 value={firstname}
                 onChange={handleChange('firstname')} onBlur={validateFirstName}
                //  value={name} 
                //  onChange={handleChange}
                //  onBlur={validateOne}
                //  tabIndex={1}
                  placeholder="Full Name Of Student"
                  className="text-[color:var(--06,#CBCBCB)] hover:border-[2px] hover:border-[#159BD6]  text-[16px] font-inter not-italic font-medium leading-[normal] tracking-[0.32px] capitalize w-[480px] h-[40px] rounded-[5px] border-[1px] border-[#CBCBCB] bg-[#fff]  p-3  focus:outline-none"
                  required
                  // tabIndex={1}
                />
               <p className='error p'>{isErrorFirstName &&   errorMessageFirstName}</p>

                 {/* <div className="absolute lg:bottom-[530px] lg:left-[100px] md:bottom-[430px] md:left-[100px] font-semibold z-10 text-[10px] text-[#FF0000]">{snamval}</div> */}
              </div>
            </div>
            <div className="">
              <label
                for="enrollmentno"
                className="  flex justify-start py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
              >
                Enrollment No{" "}
              </label>
              <div className=" p-0.5 w-[303px] h-[48px] ">
                <input
                  type="text"
                  id='enrollmentno'
                  placeholder="Enrollment No"
                  name="enrollmentno"
                  onChange={handleChange('enrollmentno')} onBlur={ validateEnrollmentno}
                  // value={enrollmentno}
                  // onChange={handleChange}
                  // onBlur={validateOne}
                  className="text-[color:var(--06,#CBCBCB)] hover:border-[2px] hover:border-[#159BD6] text-[16px] font-inter not-italic font-medium leading-[normal] tracking-[0.32px] capitalize  w-[313px] h-[40px] rounded-[5px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                  required
                  // tabIndex={2}
                />
                <p className='error'>{ isErrorEnrollmentno &&   errorMessageEnrollmentno}</p>
                 {/* <div className="absolute lg:bottom-[530px] lg:left-[50rem]  font-semibold z-10 text-[10px] text-[#FF0000]">{enoval}</div> */}
              </div>
            </div>
          </div>
          {/* PHOTOS ADD */}
          <div className="flex justify-between px-10 flex-row  items-center py-4">
            <DragDropImage />
            <FatherDragDrop />
            <MotherDragDrop />
           
          </div>
          {/* MENTOR ADD */}
          <div className=" flex flex-row justify-between items-center py-4 ">
            <div>
            <div className=" relative  w-[100%]">
              <table className=" min-w-[100%] max-h-[250px] overflow-y-scroll overflow-hidden border-collapse ">
                <thread>
                <tr className="    px-3 sticky top-0 z-20 max-h-[70px]  h-[10px] ">
                  <th className="px-[4.1rem]  whitespace-nowrap border-r-[1px]  bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    Sem
                  </th>
                  <th className="px-[7.1rem]  whitespace-nowrap border-l-[1px]  bg-[#159BD6] rounded-[0px_4px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    Mentor Name
                  </th>
                </tr>
                </thread>
                <tbody>
                <tr className="text-sm  h-[45px] rounded-lg  px-3 transition-all duration-300">
                  <td className="flex flex-row ">
                  <div className="px-[4.6rem] py-2 whitespace-nowrap border-[1px]   border-[#47A5E4] text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    1st
                  </div>
                  <input
                    type="text"
                    name="sem1_mentorname"
                    // value={sem1_mentorname}
                    // onChange={handleChange}
                    //onBlur={validateOne}
                    placeholder=""
                    className="p-3 w-[338px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    // tabIndex={3}
                  />
                  </td>
                  <td className="flex flex-row ">
                   <div className="px-[4.29rem] py-2 whitespace-nowrap table-auto1 border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    2nd
                  </div>
                  <input
                    type="text"
                    name="sem2_mentorname"
                   
                    // value={sem2_mentorname}
                    // onChange={handleChange}
                    //onBlur={validateOne}
                    placeholder=""
                    className="p-3 table-auto1 w-[337px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    // tabIndex={4}
                  />
                  </td>
                  <td className="flex flex-row ">
                  <div className="px-[4.39rem] py-2 whitespace-nowrap border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    3rd
                  </div>
                  <input
                    type="text"
                    name="sem3_mentorname"
                    // value={sem3_mentorname}
                    // onChange={handleChange}
                    //onBlur={validateOne}
                    placeholder=""
                    className=" p-3 w-[338px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    // tabIndex={5}
                  />
                  </td>
                  <td className="flex flex-row  ">
                  <div className="px-[4.39rem] py-2   whitespace-nowrap  table-auto1 border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    4th
                  </div>
                  <input
                    type="text"
                    name="sem4_mentorname"
                    // value={sem4_mentorname}
                    // onChange={handleChange}
                    //onBlur={validateOne}
                    placeholder=""
                    className="p-3 table-auto1 w-[338px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    // tabIndex={6}
                  />
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            </div>
            <div>
            <div className="-top-5 relative  w-[100%]">
              <table className=" min-w-[100%] max-h-[250px] overflow-y-scroll overflow-hidden border-collapse ">
                <thread>
                <tr className="    px-3 sticky top-0 z-20 max-h-[70px]  h-[10px] ">
                  <th className="px-[3.1rem]  whitespace-nowrap border-r-[1px]  bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    Sem
                  </th>
                  <th className="px-[6.1rem]  whitespace-nowrap border-l-[1px]  bg-[#159BD6] rounded-[0px_4px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    Mentor Name
                  </th>
                </tr>
                </thread>
                <tbody>
                <tr className="text-sm  h-[45px] rounded-lg  px-3 transition-all duration-300">
                  <td className="flex flex-row ">
                  <div className="px-[3.35rem] py-2 whitespace-nowrap border-[1px]   border-[#47A5E4] text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    5th
                  </div>
                  <input
                    type="text"
                    name="sem5_mentorname"
                    // value={sem5_mentorname}
                    // onChange={handleChange}
                    //onBlur={validateOne}
                    //onBlur={validateOne}
                    placeholder=""
                    className="p-3 w-[307px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    // tabIndex={5}
                  />
                  </td>
                  <td className="flex flex-row ">
                   <div className="px-[3.35rem] py-2 whitespace-nowrap table-auto1 border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    6th
                  </div>
                  <input
                    type="text"
                    name="sem6_mentorname"
                    // value={sem6_mentorname}
                    // onChange={handleChange}
                    //onBlur={validateOne}
                    placeholder=""
                    className="p-3 table-auto1 w-[307px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    // tabIndex={6}
                  />
                  </td>
                  <td className="flex flex-row ">
                  <div className="px-[3.39rem] py-2 whitespace-nowrap border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    7th
                  </div>
                  <input
                    type="text"
                    name="sem7_mentorname"
                    // value={sem7_mentorname}
                    // onChange={handleChange}
                    //onBlur={validateOne}
                    placeholder=""
                    className=" p-3 w-[307px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    // tabIndex={7}
                  />
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            </div>


          </div>
          {/* INPUTS */}
          <div className="flex justify-between items-center flex-row py-5">
            <div className="flex flex-col">
              <label
                for="caste"
                className="px-1  py-2 flex justify-start text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Mentoring Started Year:{" "}
              </label>

              <input
                type="date"
                name="startyear"
                placeholder="(MM/YYYY)"
                // value={startyear}
                // onChange={handleChange}
                //onBlur={validateOne}
                className="hover:border-[2px] hover:border-[#159BD6] w-[273px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
                // tabindex={10}
              />
            </div>
            <div className="flex flex-col">
              <label
                for="department"
                className="px-1 flex justify-start  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Department:{" "}
              </label>

              <input
                type="text"
                name="department"
                // value={department}
                // onChange={handleChange}
                //onBlur={validateOne}
                placeholder="Department"
                className="hover:border-[2px] hover:border-[#159BD6] w-[273px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
                // tabindex={11}
              />
            </div>
            <div className="flex flex-col">
              <label
                for="batchdiv"
                className="flex justify-start px-1 py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Batch/Div:{" "}
              </label>

              <input
                type="text"
                name="batchdiv"
                // value={batchdiv}
                // onChange={handleChange}
                //onBlur={validateOne}
                placeholder="Batch/Div"
                className="hover:border-[2px] hover:border-[#159BD6] w-[273px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
                // tabindex={12}
              />
            </div>
          </div>
      
          <div className=' flex justify-center items-center py-7 '>
         <button     type="submit"
              // onClick={handleNextStep}
              className="px-10 py-2 shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] bg-[#159BD6] text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize"
              onClick={this.continue}>Save & Next</button>
         </div>
         {/* <button type="submit" onClick={handleNextStep}>Save & Next</button> */}
        </form>
      </div>
      </div>
            
          {/* <div style={{textAlign: 'center'}}>
            <button type='submit' className='buttons__button buttons__button--next' onClick={this.continue}>Next</button>
          </div> */}

        </form>
      </div>
    )
  }
}

export default Basicinfo;
{/* <div className='form-group'>
<div className='form-group__element'>
  <label htmlFor='first name' className='form-group__label'>
  First name
  </label>
  <input type='text' value={firstname} name='first name' onChange={handleChange('firstname')} onBlur={validateFirstName} className='form-group__input'/>
  <p className='error'>{isErrorFirstName && errorMessageFirstName}</p>
</div>

<div className='form-group__element'>
  <label htmlFor='last name' className='form-group__label'>
  Last name
  </label>
  <input type='text' value={lastname} name='last name' onChange={handleChange('lastname')} onBlur={validateLastName} className='form-group__input' />
  <p className='error'>{isErrorLastName && errorMessageLastName}</p>
</div>

<div className='form-group__element'>
  <label htmlFor='email' className='form-group__label'>
  Email
  </label>
  <input type='email' value={email} name='email' onChange={handleChange('email')} className='form-group__input' />
</div>

<div className='form-group__element'>
  <label htmlFor='phone' className='form-group__label'>
  Phone
  </label>
  <input type='text' value={phone} name='phone' onChange={handleChange('phone')} className='form-group__input' />
</div>
</div> */}

// import React, { Component } from 'react';
// import { Stepper } from 'react-form-stepper';
// // import './App.css';

// import { useNavigate } from "react-router-dom";
// import DragDropImage from "./DragDropImage";
// import FatherDragDrop from "./FatherDragDrop";
// import MotherDragDrop from "./MotherDragDrop";
// class Basicinfo extends Component {
//   continue = e => {
//     e.preventDefault(); 
//     const isFirstNameValid = this.props.validateFirstName();
//     const isLastNameValid = this.props.validateLastName();
//     if (isFirstNameValid && isLastNameValid) {
//       this.props.nextStep();
//     }
//   }

//   render() {
//     const { 
//       firstname, 
//       lastname, 
//       email, 
//       phone, 
//       handleChange, 
//       validateFirstName,
//       validateLastName,
//       isErrorFirstName,
//       isErrorLastName,
//       errorMessageFirstName,
//       errorMessageLastName
//     } = this.props;
//   return (
//     <>
//        <Stepper
//             steps={[{ label: 'Personal details' }, { label: 'Course details' }, { label: 'Summary' }]}
//             activeStep={0}
//             styleConfig={{
//               activeBgColor: '#2b7cff',
//               activeTextColor: '#fff',
//               inactiveBgColor: '#fff',
//               inactiveTextColor: '#2b7cff',
//               completedBgColor: '#fff',
//               completedTextColor: '#2b7cff',
//               size: '3em'
//             }}
//             className={'stepper'}
//             stepClassName={'stepper__step'}
//           />

//       <div className="overflow-hidden  max-h-[720px]   overflow-y-scroll flex justify-center ">
//       <div className=" px-7  relative  w-screen ">
//       <div className="flex justify-center  items-center">
//           <h2 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
//             Basic Information
//           </h2>
//         </div>
//         <div className=" pt-7 flex flex-row  items-center">
//           <div className="flex px-1">
//             <h2 className="text-[color:var(--01,#159BD6)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
//               {" "}
//               Note:
//             </h2>
//           </div>
//           <div className="flex ">
//             <h2 className="text-[color:var(--01,#159BD6)] text-[14px] font-inter not-italic font-normal leading-[normal] tracking-[0.28px] capitalize">
//               Please Fill all the details in{" "}
//               <span className="text-[color:var(--01,#159BD6)] text-[14px] font-inter not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">
//                 CAPITAL
//               </span>{" "}
//               Letters only
//             </h2>
//           </div>
//         </div>

//         {/* FORM START */}
//         <form onSubmit={handleSubmit} className="px-10">
//           <div className="flex  flex-row justify-between items-center py-5  ">
//             <div className="">
//               <label
//                 for="fullname"
//                 className=" flex justify-start  py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
//               >
//                 Student Name{" "}
//               </label>
//               <div className=" p-0.5 w-[303px] h-[48px] ">
//                 <input
//                  id="name"
//                  name="name"
//                  value={name} 
//                  onChange={handleChange}
//                  onBlur={validateOne}
//                  tabIndex={1}
//                   placeholder="Full Name Of Student"
//                   className="text-[color:var(--06,#CBCBCB)] hover:border-[2px] hover:border-[#159BD6]  text-[16px] font-inter not-italic font-medium leading-[normal] tracking-[0.32px] capitalize w-[480px] h-[40px] rounded-[5px] border-[1px] border-[#CBCBCB] bg-[#fff]  p-3  focus:outline-none"
//                   required
//                   tabIndex={1}
//                 />
//                  {/* <div className="absolute lg:bottom-[530px] lg:left-[100px] md:bottom-[430px] md:left-[100px] font-semibold z-10 text-[10px] text-[#FF0000]">{snamval}</div> */}
//               </div>
//             </div>
//             <div className="">
//               <label
//                 for="enrollmentno"
//                 className="  flex justify-start py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
//               >
//                 Enrollment No{" "}
//               </label>
//               <div className=" p-0.5 w-[303px] h-[48px] ">
//                 <input
//                   type="text"
//                   placeholder="Enrollment No"
//                   name="enrollmentno"
//                   value={enrollmentno}
//                   onChange={handleChange}
//                   onBlur={validateOne}
//                   className="text-[color:var(--06,#CBCBCB)] hover:border-[2px] hover:border-[#159BD6] text-[16px] font-inter not-italic font-medium leading-[normal] tracking-[0.32px] capitalize  w-[313px] h-[40px] rounded-[5px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
//                   required
//                   tabIndex={2}
//                 />
//                  {/* <div className="absolute lg:bottom-[530px] lg:left-[50rem]  font-semibold z-10 text-[10px] text-[#FF0000]">{enoval}</div> */}
//               </div>
//             </div>
//           </div>
//           {/* PHOTOS ADD */}
//           <div className="flex justify-between px-10 flex-row  items-center py-4">
//             <DragDropImage />
//             <FatherDragDrop />
//             <MotherDragDrop />
           
//           </div>
//           {/* MENTOR ADD */}
//           <div className=" flex flex-row justify-between items-center py-4 ">
//             <div>
//             <div className=" relative  w-[100%]">
//               <table className=" min-w-[100%] max-h-[250px] overflow-y-scroll overflow-hidden border-collapse ">
//                 <thread>
//                 <tr className="    px-3 sticky top-0 z-20 max-h-[70px]  h-[10px] ">
//                   <th className="px-[4.1rem]  whitespace-nowrap border-r-[1px]  bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
//                     Sem
//                   </th>
//                   <th className="px-[7.1rem]  whitespace-nowrap border-l-[1px]  bg-[#159BD6] rounded-[0px_4px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
//                     Mentor Name
//                   </th>
//                 </tr>
//                 </thread>
//                 <tbody>
//                 <tr className="text-sm  h-[45px] rounded-lg  px-3 transition-all duration-300">
//                   <td className="flex flex-row ">
//                   <div className="px-[4.6rem] py-2 whitespace-nowrap border-[1px]   border-[#47A5E4] text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
//                     1st
//                   </div>
//                   <input
//                     type="text"
//                     name="sem1_mentorname"
//                     value={sem1_mentorname}
//                     onChange={handleChange}
//                     //onBlur={validateOne}
//                     placeholder=""
//                     className="p-3 w-[338px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
//                     required
//                     tabIndex={3}
//                   />
//                   </td>
//                   <td className="flex flex-row ">
//                    <div className="px-[4.29rem] py-2 whitespace-nowrap table-auto1 border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
//                     2nd
//                   </div>
//                   <input
//                     type="text"
//                     name="sem2_mentorname"
                   
//                     value={sem2_mentorname}
//                     onChange={handleChange}
//                     //onBlur={validateOne}
//                     placeholder=""
//                     className="p-3 table-auto1 w-[337px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
//                     required
//                     tabIndex={4}
//                   />
//                   </td>
//                   <td className="flex flex-row ">
//                   <div className="px-[4.39rem] py-2 whitespace-nowrap border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
//                     3rd
//                   </div>
//                   <input
//                     type="text"
//                     name="sem3_mentorname"
//                     value={sem3_mentorname}
//                     onChange={handleChange}
//                     //onBlur={validateOne}
//                     placeholder=""
//                     className=" p-3 w-[338px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
//                     required
//                     tabIndex={5}
//                   />
//                   </td>
//                   <td className="flex flex-row  ">
//                   <div className="px-[4.39rem] py-2   whitespace-nowrap  table-auto1 border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
//                     4th
//                   </div>
//                   <input
//                     type="text"
//                     name="sem4_mentorname"
//                     value={sem4_mentorname}
//                     onChange={handleChange}
//                     //onBlur={validateOne}
//                     placeholder=""
//                     className="p-3 table-auto1 w-[338px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
//                     required
//                     tabIndex={6}
//                   />
//                   </td>
//                 </tr>
//                 </tbody>
//               </table>
//             </div>
//             </div>
//             <div>
//             <div className="-top-5 relative  w-[100%]">
//               <table className=" min-w-[100%] max-h-[250px] overflow-y-scroll overflow-hidden border-collapse ">
//                 <thread>
//                 <tr className="    px-3 sticky top-0 z-20 max-h-[70px]  h-[10px] ">
//                   <th className="px-[3.1rem]  whitespace-nowrap border-r-[1px]  bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
//                     Sem
//                   </th>
//                   <th className="px-[6.1rem]  whitespace-nowrap border-l-[1px]  bg-[#159BD6] rounded-[0px_4px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
//                     Mentor Name
//                   </th>
//                 </tr>
//                 </thread>
//                 <tbody>
//                 <tr className="text-sm  h-[45px] rounded-lg  px-3 transition-all duration-300">
//                   <td className="flex flex-row ">
//                   <div className="px-[3.35rem] py-2 whitespace-nowrap border-[1px]   border-[#47A5E4] text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
//                     5th
//                   </div>
//                   <input
//                     type="text"
//                     name="sem5_mentorname"
//                     value={sem5_mentorname}
//                     onChange={handleChange}
//                     //onBlur={validateOne}
//                     //onBlur={validateOne}
//                     placeholder=""
//                     className="p-3 w-[307px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
//                     required
//                     tabIndex={5}
//                   />
//                   </td>
//                   <td className="flex flex-row ">
//                    <div className="px-[3.35rem] py-2 whitespace-nowrap table-auto1 border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
//                     6th
//                   </div>
//                   <input
//                     type="text"
//                     name="sem6_mentorname"
//                     value={sem6_mentorname}
//                     onChange={handleChange}
//                     //onBlur={validateOne}
//                     placeholder=""
//                     className="p-3 table-auto1 w-[307px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
//                     required
//                     tabIndex={6}
//                   />
//                   </td>
//                   <td className="flex flex-row ">
//                   <div className="px-[3.39rem] py-2 whitespace-nowrap border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
//                     7th
//                   </div>
//                   <input
//                     type="text"
//                     name="sem7_mentorname"
//                     value={sem7_mentorname}
//                     onChange={handleChange}
//                     //onBlur={validateOne}
//                     placeholder=""
//                     className=" p-3 w-[307px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
//                     required
//                     tabIndex={7}
//                   />
//                   </td>
//                 </tr>
//                 </tbody>
//               </table>
//             </div>
//             </div>


//           </div>
//           {/* INPUTS */}
//           <div className="flex justify-between items-center flex-row py-5">
//             <div className="flex flex-col">
//               <label
//                 for="caste"
//                 className="px-1  py-2 flex justify-start text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
//               >
//                 Mentoring Started Year:{" "}
//               </label>

//               <input
//                 type="date"
//                 name="startyear"
//                 placeholder="(MM/YYYY)"
//                 value={startyear}
//                 onChange={handleChange}
//                 //onBlur={validateOne}
//                 className="hover:border-[2px] hover:border-[#159BD6] w-[273px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
//                 required
//                 tabindex={10}
//               />
//             </div>
//             <div className="flex flex-col">
//               <label
//                 for="department"
//                 className="px-1 flex justify-start  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
//               >
//                 Department:{" "}
//               </label>

//               <input
//                 type="text"
//                 name="department"
//                 value={department}
//                 onChange={handleChange}
//                 //onBlur={validateOne}
//                 placeholder="Department"
//                 className="hover:border-[2px] hover:border-[#159BD6] w-[273px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
//                 required
//                 tabindex={11}
//               />
//             </div>
//             <div className="flex flex-col">
//               <label
//                 for="batchdiv"
//                 className="flex justify-start px-1 py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
//               >
//                 Batch/Div:{" "}
//               </label>

//               <input
//                 type="text"
//                 name="batchdiv"
//                 value={batchdiv}
//                 onChange={handleChange}
//                 //onBlur={validateOne}
//                 placeholder="Batch/Div"
//                 className="hover:border-[2px] hover:border-[#159BD6] w-[273px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
//                 required
//                 tabindex={12}
//               />
//             </div>
//           </div>
//           {/* <UseContextProvider>{displayStep(currentStep)}</UseContextProvider> */}
//           {/* BUTTONS */}
          
//          <button     type="submit"
//               // onClick={handleNextStep}
//               className="px-10 py-2 shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] bg-[#159BD6] text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize"
//           onClick={onNext}>Save & Next</button>
         
//          {/* <button type="submit" onClick={handleNextStep}>Save & Next</button> */}
//         </form>
//       </div>
//       </div>
//     </>
//   );
// };

// export default Basicinfo;
