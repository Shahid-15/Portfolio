import React from 'react'
import  { useState, useEffect } from "react";

const roles = ['Software Engineer', 'DevOps Learner'];

function Introduction() {

    const [text, setText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const currentRole = roles[roleIndex];
    
        const timer = setTimeout(() => {
          if (!isDeleting) {
            setText(currentRole.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
    
            if (charIndex + 1 === currentRole.length) {
              setIsDeleting(true);
              setTypingSpeed(1500); // Pause before deleting
            } else {
              setTypingSpeed(100);
            }
          } else {
            setText(currentRole.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
    
            if (charIndex - 1 === 0) {
              setIsDeleting(false);
              setRoleIndex((roleIndex + 1) % roles.length);
              setTypingSpeed(200);
            } else {
              setTypingSpeed(50);
            }
          }
        }, typingSpeed);
    
        return () => clearTimeout(timer);
      }, [charIndex, isDeleting, roleIndex, typingSpeed]);
    
  
   

  return (

<div className='flex   bg-[url("/images/bgimage.jpg")]  bg-blue-100 shadow-lg rounded-xl p-1 flex-col md:flex-row  gap-2 justify-between mx-10 md:mx-20 items-center'>
    <div className=" flex gap-4 flex-col my-5">
        <div>
          
          <div className='md:ml-5'>

        <h2 className='text-5xl text-white font-bold'>Hello,</h2>
    <h1 className="text-2xl md:text-5xl font-bold text-white">
      I am a <span className="text-blue-600">{text}</span>
      <span className="animate-pulse">|</span>
    </h1>
          
        </div>
    <div className="md:w-[480px] ml-5 text-sm text-gray-500 leading-relaxed">
    Software developer with a strong foundation in both frontend and backend development, complemented by hands-on experience in DevOps practices. Skilled in delivering end-to-end web solutions with a focus on scalability, automation, and performance optimization.
</div>
</div>
<a href='/resume/Shahid_Chand_Resume.pdf' download><button className='md:ml-5 cursor-pointer w-28 border bg-purple-500 text-white rounded-md px-4 py-2 flex gap-1'><img className='invert' width={20} src="/images/resumeImg.png" alt="" /><span className='font-medium '>Resume</span></button></a>


  </div>

  <div className='md:mr-50 rounded-full'>
    <img  width={240} height={50} className='opacity-90  border-4 rounded-full border-blue-500' src="images/shahid.jpg" alt="" />
</div>

  </div>
      
    
  )
}

export default Introduction
