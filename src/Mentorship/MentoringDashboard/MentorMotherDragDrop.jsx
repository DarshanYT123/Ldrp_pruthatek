import React, { useState, useRef } from 'react'

const MotherDragDrop = () => {

    
    const [files , setFiles] = useState(null);
    const[image, setImage] = useState(null);
    const[previewUrl, setPreviewUrl] = useState(""); 
 
    const inputRef = useRef()
 
    const handleDragOver = (event) =>{
 
     
     event.preventDefault();
 
    }
 
    //hadlefile image
    const handleFile = files => {
     //you can carry out any file validations here...
     setImage(files);
     setPreviewUrl(URL.createObjectURL(files));
 }
 
 const handleDrop = (event) =>{
     event.preventDefault();
 
     setFiles(event.dataTransfer.files);
 
     //let's grab the image file
     let imageFile = event.dataTransfer.files[0];
     handleFile(imageFile);
 
     console.log(event);
     
    }
 
  return (
   <>
   
<form action=''>
       


       {/* upload student photo */}
       <div class="flex flex-col items-center justify-center w-full">
           <label 
           for="dropzone-file"
           onDragOver={handleDragOver}
           onDrop={handleDrop}
           class="border border-[color:var(--Desable-Grey,#BDBDBD)] border-dashed w-40 h-40">
               <div class="flex flex-col items-center justify-center ">
       
               { previewUrl && <div className="image">
       <img src={previewUrl} className='w-40 h-40 ' alt='filename' />
            </div> }
            <span className="flex justify-center items-center text-center py-14 text-[color:var(--Desable-Grey,#BDBDBD)] text-[16px] font-inter  not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize  px-6 formbold-drop-file  ">
              {" "}
              Drag & Drop
              Or
              Open File{" "}
            </span>
            
        </div>
        <input id="dropzone-file"type="file" name="file" accept='image/*' class="hidden" 
        multiple
        onChange={(event) => setFiles(event.target.files)}
      
        
        ref={inputRef}
        />
    </label>

<div className="">
<h2 className="py-2 text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">Mother Photo</h2>
</div>
    <button
     onClick={() => inputRef.current.click()}
             className=" text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize px-10 shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] py-2 bg-[#159BD6]">Upload
          </button>
              
             
          </div> 
       
              
             </form>
     
   </>
  )
}

export default MotherDragDrop