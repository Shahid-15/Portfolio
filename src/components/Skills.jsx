import React from 'react'

function Skills() {
  return (
    <div className='bg-zinc-800  bg-[url("/images/skills.avif")] mt-5'>

<div className='flex justify-center gap-2 items-center '>
  <img src="/images/brain.png" alt="" />
<h2 className='text-4xl font-bold text-white '>Skills & <span className='text-red-500'>Expertise</span></h2>
</div>

<div className='grid grid-cols-2 md:grid-cols-6 gap-2 mx-10'>
  <img src="/skills/html.png" alt="" />
  <img src="/skills/css.png" alt="" />
  <img src="/skills/javascript.png" alt="" />
  <img width={90} src="/skills/react.png" alt="" />
  <img width={90} src="/skills/tailwind.png" alt="" />
  <img  width={90} src="/skills/nodejs.png" alt="" />
  <img width={90} src="/skills/nextjs.png" alt="" />
  <img width={90} src="/skills/github.png" alt="" />
  <img width={90} src="/skills/linux.png" alt="" />
  <img width={90} src="/skills/postgresql.png" alt="" />
  <img width={90} src="/skills/mongodb.png" alt="" />
  <img width={90} src="/skills/php.svg" alt="" />
  <img width={150} src="/skills/docker.svg" alt="" />
  <img width={150} src="/skills/cicd.jpeg" alt="" />
  <img width={90} src="/skills/java.png" alt="" />
  <img width={90} src="/skills/cpp.png" alt="" />
  <img width={90} src="/skills/python.png" alt="" />
  <img width={90} src="/skills/spring.png" alt="" />
</div>
      
    </div>
  )
}

export default Skills
