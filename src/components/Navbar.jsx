import React from 'react'

function Navbar() {
  return (
    <div className=' '>

        <div className='flex  justify-center md:justify-between items-center'>
            <div className=''>

            <img className='text-purple-500' width={100} height={50} src="/images/slogo.jpeg" alt="" />

            </div>

            <div className='flex md:mr-4 md:gap-5 gap-2'>

                <p className='hover:underline  hover:decoration-purple-500 cursor-pointer'>Home</p>
                <p className='hover:underline hover:decoration-purple-500 cursor-pointer'>About Me</p>
                <p className='hover:underline hover:decoration-purple-500 cursor-pointer'>Contact Us</p>

            </div>
        </div>
      
    </div>
  )
}

export default Navbar
