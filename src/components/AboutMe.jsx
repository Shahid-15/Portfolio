import React from 'react'

export default function AboutMe() {
  return (
    <div className='mt-30 relative '>

        <img className='absolute hidden md:block left-[100px] bottom-[150px]  ' width={290} height={290} src="images/img4.avif" alt="" />
         
         <div className='relative'>
         
        <div className=''>
            <p className='absolute text-5xl font-bold left-[620px] top-[49px]'><span className='text-white'>About</span> Me</p>
            <img height={20} src="/images/wave.svg" alt="" />
            
        </div>
       <div className='w-full  bg-[#8c4ce7] h-20'>

       <p className='absolute top-[200px] left-[320px] text-white'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusamus?</p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro magnam dicta voluptatem!
        </p>
            </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-20'>

           

            <div className='flex flex-col items-center justify-center'>
           <img className='rounded-xl' width={300} src="/images/img1.jpg" alt="" />
           <p className='text-2xl font-bold'>Frontend Developer</p>
           <p className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, aliquid.</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
           <img className='rounded-xl' width={260} src="/images/im2.jpg" alt="" />
           <p className='text-2xl font-bold'>Backend Developer</p>
           <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quaerat.</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
           <img className='rounded-xl' width={300} src="/images/img3.avif" alt="" />
           <p className='text-2xl font-bold'>DevOps Learner</p>
           <p className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, cumque.</p>
            </div>

        </div>

       </div>

         </div>
         
      
    </div>
    
  )
}
