import React from 'react'

function Skills() {
  return (
    <div className='md:mt-64 mt-10 '>

<div className='flex justify-center gap-2 items-center'>
  <img src="/images/brain.png" alt="" />
<h2 className='text-4xl font-bold '>Skills & <span className='text-red-500'>Expertise</span></h2>
      
</div>

<div className='flex flex-col md:flex-row gap-30 justify-center mt-10 '>

  <div>
<p className='text-center text-4xl mb-2 font-bold'>Frontend</p>
<div className='grid md:w-80 w-103  grid-cols-2 md:grid-cols-3 border gap-5 rounded-xl p-2 hover:border-3 hover:border-blue-500 hover:scale-105 transition bg-zinc-900'>
  <img src="/skills/html.png" alt="" />
  <img src="/skills/css.png" alt="" />
  <img src="/skills/javascript.png" alt="" />
  <p className='flex ml-10 font-bold justify-center text-white '><img className='w-60 invert' src="/skills/tailwind.png" alt="" />Tailwind Css</p>
  <img className='ml-20' src="/skills/react.png" alt="" />

</div>

  </div>
  <div className=' ' >
<p className='text-center text-4xl mb-3 font-bold'>Backend</p>
<div className='grid grid-cols-2  md:grid-cols-2 gap-2 md:w-84 w-104 h-48 border p-2 rounded-xl  hover:border-3 hover:border-blue-500 hover:scale-105 transition bg-purple-500'>
 
  <img width={120} src="/skills/nodejs.png" alt="" />
  <img width={120} src="/skills/php.svg" alt="" />
  <img width={100} src="/skills/nextjs.jpeg" alt="" />

</div>
  </div>



</div>

<div>

  <div className='mt-10'>
    <p className='text-center text-4xl mb-3 font-bold'>Databases</p>

  <div className='flex flex-col md:flex-row w-full  gap-5 border bg-green-500 mx-0  rounded-xl justify-center'>

  <img width={120} src="/skills/postgresql.png" alt="" />
  <img width={300} src="/skills/mongo.svg" alt="" />
    
  </div>
  </div>
  <div className=' bg-yellow-500'>

    <p className='text-center text-4xl  font-bold mt-10 '>DevOps Tools</p>

  <div className='flex flex-col md:flex-row justify-center items-center gap-5 mt-20'>
    <img className='rounded-xl' width={180} src="/skills/docker.svg" alt="" />
    <img className='rounded-xl' width={180} src="/skills/github.png" alt="" />
    <img className='rounded-xl' width={300} src="/skills/cicd.jpeg" alt="" />
    <img className='rounded-xl' width={180} src="/skills/linux.jpeg" alt="" />

  </div>

  </div>
</div>


    </div>
  )
}

export default Skills
