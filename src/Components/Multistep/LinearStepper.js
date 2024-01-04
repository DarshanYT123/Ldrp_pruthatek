import React, { Component } from 'react';


import Basicinfo from '../Basicinfo/Basicinfo';
import StudentHistory from '../StudentHistory/StudentHistory';
import ExamSheet from '../ExamSheet/ExamSheet';
import MidSemester from '../MidSemester/MidSemester';
import Activities from '../Activities/Activities';
import Seminar from '../Seminar/Seminar';
import Membership from '../Membership/Membership';


//Sample data
const coursesData = [
  {
    id: 1,
    courseName: 'HTML',
    category: 'Front-end'
  },
  {
    id: 2,
    courseName: 'CSS',
    category: 'Front-end'
  },
  {
    id: 3,
    courseName: 'JavaScript',
    category: 'Front-end'
  },
  {
    id: 4,
    courseName: 'React',
    category: 'Front-end'
  },
  {
    id: 5,
    courseName: 'Angular',
    category: 'Front-end'
  },
  {
    id: 6,
    courseName: 'Vue',
    category: 'Front-end'
  },
  {
    id: 7,
    courseName: 'Java',
    category: 'Back-end'
  },
  {
    id: 8,
    courseName: 'Python',
    category: 'Back-end'
  },
  {
    id: 9,
    courseName: 'PHP',
    category: 'Back-end'
  },
  {
    id: 10,
    courseName: 'Express',
    category: 'Back-end'
  }       
];


const levelsData = ['Beginner', 'Intermediate', 'Advanced'];

class LinaerStepper extends Component {

  
  state = {
    step: 1,
    firstname: '',
    
    lastname: '',
    enrollmentno:'',
    email: '',
    phone: '',
    courses: [],
    level: '',
    isErrorFirstName: true,
    isErrorEnrollmentno: true,
    errorMessageFirstName: '',
    errorMessageEnrollmentno: '',

    //student history
    studentname:'',
    
    isErrorStudentName: true,
    
    errorMessageStudentName: '',
    emailId:'',
    isErrorEmailid: true,
    errorMessageEmailid:'',
    
    //pincode

    pincode:'',
    isErrorPincode:true,
    errorMessagePincode:'',

    //Address
    address:'',
    isErrorAddress:true,
    errorMessageAddress:'',

    //studentno
    studentno:'',
    isErrorStudentno:true,
    errorMessageStudentno:'',

    //father
    fatherno:'',
    isErrorFatherno:true,
    errorMessageFatherno:'',

    //Motherno
    motherno:'',
    isErrorMotherno:true,
    errorMessageMotherno:'',

    //fathername
    fathername:'',
    isErrorFathername:true,
    errorMessageFathername:'',
    //mothername
    mothername:'',
    isErrorMothername:true,
    errorMessageMothername:'',


  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

   handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })

    if (input === 'firstname') {
      
      if (this.state.firstname.length >= 1) {
        this.setState({
          isErrorFirstName: false
        })
      }
    }

    else if (input === 'enrollmentno') {
      
      if (this.state.enrollmentno.length >= 1) {
        this.setState({
          isErrorEnrollmentno: false
        })
      }
    }

    // student histry
    const { emailId } = this.state;
    const {pincode} =this.state;
    const {studentno} =this.state;
    const {fatherno} =this.state;
    const {motherno} =this.state;

    // Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pincodeRegex = /^\d{6}$/;
    const phoneNumberRegex = /^\d{10}$/;
    const fphoneNumberRegex = /^\d{10}$/; 


    if (input === 'studentname') {
      if (this.state.studentname.length >= 1) {
        this.setState({
          isErrorStudentName: false
        })
      }
    }

  
     else if(input === 'emailId'){
     
     
          if (! this.state.emailId  || ! emailRegex.test(emailId) ) {
            this.setState({
              isErrorEmailid: false
            })
          }
        }
        else if(input==='pincode'){
          if(! this.state.pincode || ! pincodeRegex.test(pincode)){

            this.setState({
              isErrorPincode:false
            })
          }
        } 

        else if(input === 'address'){
          if (this.state.address.length >= 5) {
            this.setState({
              isErrorAddress: false
            })
          }

        }
        else if(input === 'studentno'){
          if(! this.state.studentno || ! phoneNumberRegex.test(studentno) ){
            this.setState({
              isErrorStudentno : false
            })
          }
        }
        else if(input === 'fatherno'){
          if(! this.state.fatherno || ! fphoneNumberRegex.test(fatherno) ){
            this.setState({
              isErrorFatherno : false
            })
          }
        }
        else if(input === 'motherno'){
          if(! this.state.motherno || ! fphoneNumberRegex.test(motherno) ){
            this.setState({
              isErrorMotherno : false
            })
          }
        }
        else if(input ==='fathername'){
          if(this.state.fathername.length >= 1){
            this.setState({
              isErrorFathername : false
            })
          }
        }
        else if(input ==='mothername'){
          if(this.state.mothername.length >= 1){
            this.setState({
              isErrMothername : false
            })
          }
        }

      
   
  }

  

  addLevel = e => {
    const levelChosen = e.target.value;
    this.setState({
      level: levelChosen
    });
  };

  addCourse = data => {
    const id = data.map(v => v.id);
    this.setState({
      courses: id
    })
  };

  validateFirstName = () => {
    if (this.state.firstname.length < 2) {
      this.setState({
        isErrorFirstName: true,
        errorMessageFirstName: 'Type your first name (at least 2 characters)'
      });
      return false;
    }
    return true;
  }

  validateEnrollmentno = () => {
    if (this.state.enrollmentno.length < 12) {
      this.setState({
        isErrorEnrollmentno: true,
        errorMessageEnrollmentno: 'Enrollment no in valid'
      });
      return false;
    }
    return true;

    

   
  } 
  //student histry
  validateStudentName = () => {
    if (this.state.studentname.length < 2) {
      this.setState({
        isErrorStudentName: true,
        errorMessageStudentName: 'Student Name (at least 2 characters)'
      });
      return false;
    }
    return true;
  }

  //email
  
   
  validateEmailid = () => {
    const { emailId } = this.state;

  // Email validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!  this.state.emailId || ! emailRegex.test(emailId)) {
      this.setState({
        isErrorEmailid: true,
        errorMessageEmailid: 'invalid Email'
      });
      return false;
    }
    return true;
  }
  
  //pin code
 
  validatePincode = () =>{
    const {pincode} =this.state;
    const pincodeRegex = /^\d{6}$/;

    if (!  this.state.pincode || ! pincodeRegex.test(pincode)) {
      this.setState({
        isErrorPincode: true,
        errorMessagePincode: 'invalid pincode'
      });
      return false;
    }
    return true;

  }

  //Address

validateAddress = () => {
    if (this.state.address.length < 5) {
      this.setState({
        isErrorAddress: true,
        errorMessageAddress: 'Address (at least 5 characters)'
      });
      return false;
    }
    return true;
  }

  validateStudentno =() =>{

    const {studentno} = this.state;
    const phoneNumberRegex = /^\d{10}$/; 

    if(! this.state.studentno || ! phoneNumberRegex.test(studentno)){

      this.setState({
        isErrorStudentno:true,
        errorMessageStudentno:'invalid phone no'

      })
      return false;
    }

    return true;


  }
//fatherno
  validateFatherno =() =>{

    const {fatherno} = this.state;
    const fphoneNumberRegex = /^\d{10}$/; 

    if(! this.state.fatherno || ! fphoneNumberRegex.test(fatherno)){

      this.setState({
        isErrorFatherno:true,
        errorMessageFatherno:'invalid fphone no'

      })
      return false;
    }

    return true;


  }

  //mother no

  validateMotherno =() =>{

    const {motherno} = this.state;
    const fphoneNumberRegex = /^\d{10}$/; 

    if(! this.state.motherno || ! fphoneNumberRegex.test(motherno)){

      this.setState({
        isErrorMotherno:true,
        errorMessageMotherno:'invalid mphone no'

      })
      return false;
    }

    return true;


  }

  //Fathername

  validateFathername= () => {
    if (this.state.fathername.length < 2) {
      this.setState({
        isErrorFathername: true,
        errorMessageFathername: 'Father Name (at least 2 characters)'
      });
      return false;
    }
    return true;
  }
  
  //mothername
  validateMothername= () => {
    if (this.state.mothername.length < 2) {
      this.setState({
        isErrorMothername: true,
        errorMessageMothername: 'Mother Name (at least 2 characters)'
      });
      return false;
    }
    return true;
  }



  submitData = e => {
    e.preventDefault();
    alert('Data sent');
  }

  render() {
    const {
      step,
      firstname,
      
      enrollmentno,
      lastname,
      email,
      phone,
      courses,
      level,
      isErrorFirstName,
      isErrorEnrollmentno ,

      errorMessageFirstName,
      errorMessageEnrollmentno,

       //student history
    
    studentname,
    isErrorStudentName,
    errorMessageStudentName,
    // email
    emailId,
    isErrorEmailid,
    errorMessageEmailid,
    
    //pincode
    pincode,
    isErrorPincode,
    errorMessagePincode,

    //address
    address,
    isErrorAddress,
    errorMessageAddress,

    //studentno
    studentno,
    isErrorStudentno,
    errorMessageStudentno,

    //father no
    fatherno,
    isErrorFatherno,
    errorMessageFatherno,

    //motherno
    motherno,
    isErrorMotherno,
    errorMessageMotherno,

    //fathername
    fathername,
    isErrorFathername,
    errorMessageFathername,

    //mothername
    mothername,
    isErrorMothername,
    errorMessageMothername,



      
    } = this.state;

  

    const coursesOptions = coursesData.map(el => ({
      course: el.courseName,
      id: el.id,
      category: el.category
    }));

    const coursesChosen = coursesData.filter(el => courses.includes(el.id));
    const coursesChosenSummary = coursesChosen.map(el => (
      <p key={el.id}>
        {el.courseName} - {el.category} 
      </p>
    ));

    const chosenLevel = level;
    
    const levelOptions = levelsData.map((el, index) => (
      <option key={index} value={el}>
        {el}
      </option>
    ));
    
    switch(step) {
      case 1: 
        return (
          <Basicinfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            firstname={firstname}
            enrollmentno={enrollmentno}
          
            validateFirstName={this.validateFirstName}
            validateEnrollmentno={this.validateEnrollmentno}
            isErrorFirstName={isErrorFirstName}
            isErrorEnrollmentno={isErrorEnrollmentno}

            
            errorMessageFirstName={errorMessageFirstName}
            errorMessageEnrollmentno={errorMessageEnrollmentno}

           
          />
        )
      case 2:
        return (
          <StudentHistory
             handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addCourse={this.addCourse}
            coursesOptions={coursesOptions}
            addLevel={this.addLevel}
            levelOptions={levelOptions}
            level={level}

            //student histry
            studentname={studentname}
            validateStudentName={this.validateStudentName}
            
            isErrorStudentName={isErrorStudentName}
            errorMessageStudentName={errorMessageStudentName}
            emailId={emailId}
            validateEmailid={this.validateEmailid}
            errorMessageEmailid={errorMessageEmailid}
            isErrorEmailid={isErrorEmailid}

            //pincode

            pincode={pincode}
            validatePincode={this.validatePincode}
            errorMessagePincode={errorMessagePincode}
            isErrorPincode={isErrorPincode}

            //address
            address={address}
            validateAddress={this.validateAddress}
            errorMessageAddress={errorMessageAddress}
            isErrorAddress={isErrorAddress}

            //student no
            studentno={studentno}
            validateStudentno={this.validateStudentno}
            errorMessageStudentno={errorMessageStudentno}
            isErrorStudentno={isErrorStudentno}

            //father no
            fatherno={fatherno}
            validateFatherno={this.validateFatherno}
            errorMessageFatherno={errorMessageFatherno}
            isErrorFatherno={isErrorFatherno}

            //mother no
            motherno={motherno}
            validateMotherno={this.validateMotherno}
            errorMessageMotherno={errorMessageMotherno}
            isErrorMotherno={isErrorMotherno}
            //fathername
            fathername={fathername}
            validateFathername={this.validateFathername}
            errorMessageFathername={errorMessageFathername}
            isErrorFathername={isErrorFathername}

            //Mothername
            mothername={mothername}
            validateMothername={this.validateMothername}
            errorMessageMothername={errorMessageMothername}
            isErrorMothername={isErrorMothername}

          />
        )
      case 3:
        return (
          <ExamSheet
          handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            firstname={firstname}
            lastname={lastname}
            email={email}
            phone={phone}
            validateFirstName={this.validateFirstName}
            coursesChosenSummary={coursesChosenSummary}
            chosenLevel={chosenLevel}
            submitData={this.submitData}
          />
        )
        case 4:
            return (
              <MidSemester
              handleChange={this.handleChange}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                firstname={firstname}

                validateFirstName={this.validateFirstName}
                lastname={lastname}
                email={email}
                phone={phone}
                coursesChosenSummary={coursesChosenSummary}
                chosenLevel={chosenLevel}
                submitData={this.submitData}
              />
            )
            case 5:
                return (
                  <Activities
                  handleChange={this.handleChange}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    firstname={firstname}
                    lastname={lastname}
                    validateFirstName={this.validateFirstName}
                    email={email}
                    phone={phone}
                    coursesChosenSummary={coursesChosenSummary}
                    chosenLevel={chosenLevel}
                    submitData={this.submitData}
                  />
                )
                case 6:
                    return (
                      <Seminar
                      handleChange={this.handleChange}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        firstname={firstname}
                        validateFirstName={this.validateFirstName}
                        lastname={lastname}
                        email={email}
                        phone={phone}
                        coursesChosenSummary={coursesChosenSummary}
                        chosenLevel={chosenLevel}
                        submitData={this.submitData}
                      />
                    )
                    case 7:
                        return (
                          <Membership
                          handleChange={this.handleChange}
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            firstname={firstname}
                            validateFirstName={this.validateFirstName}
                            lastname={lastname}
                            email={email}
                            phone={phone}
                            coursesChosenSummary={coursesChosenSummary}
                            chosenLevel={chosenLevel}
                            submitData={this.submitData}
                          />
                        )
      default: return null
    }
  }
}

export default LinaerStepper;
