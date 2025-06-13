import React from 'react'

const Projects = () => {
  return (
    <div className=' bg-[url("/images/wallimage.webp")] '>
        <h2 className='text-5xl my-10  flex justify-center items-center gap-6 font-bold text-center'><img className='w-30 invert-1' src="/images/project.png" alt="" /><span className='text-white'>Projects (It May Take Some Time TO Load the Video Below)</span></h2>

       <div className='flex flex-col gap-10'>
         
       <div className='flex  flex-col  md:flex-row mx-20 gap-10'>
            <p className='flex flex-col gap-3 text-white'>
                <h2 className='text-3xl text-blue-500 font-bold'>AI Interviewer</h2>
                <p className='text-gray-300 hidden md:block'>AI Interviewer is a web app that simulates real-time technical interviews using Gemini AI and webcam integration. It generates domain-specific questions, captures user responses, and provides instant feedback on content, clarity, and confidence. The app helps users practice effectively, track progress, and improve their interview performance.</p>
            </p>
            <video className='rounded-xl shadow-xl' width={600}  autoPlay
        loop
        muted
        playsInline src="\ProjectVideos\ai-interviewer.mp4"></video>
        </div>

        
        <div className='flex flex-col md:flex-row-reverse  mx-20 gap-10'>
            <p className='flex flex-col gap-3 text-white'>
                <h2 className='text-3xl text-red-500 font-bold'>AI Resume builder</h2>
                <p className='text-gray-300 hidden md:block'>AI Resume Builder is a web application that helps users generate personalized, professional resumes using AI. It takes user input about skills, experience, and goals, then uses Gemini AI to craft tailored resume content. The app ensures clean formatting, relevant sectioning, and allows easy editing and downloading. It streamlines the resume creation process, saving time and helping users present themselves effectively to employers.</p>
            </p>
            <video className='rounded-xl shadow-xl'  width={600}  autoPlay
        loop
        muted
        playsInline src="\ProjectVideos\ai-resume-builder.mp4"></video>
        </div>
    
        <div className='flex flex-col md:flex-row  mx-20 gap-10'>
            <p className='flex flex-col gap-3 text-white'>
                <h2 className='text-3xl text-pink-500 font-bold'>Parking Violation Reporting App (Snap And Report)</h2>
                <p className='text-gray-300 hidden md:block'>This is my Parking violation app with CI/CD pipeline i have deployed this app on railway and also optimized it for the mobile users its captures the live images of those vehicle which are not parked in the proper parking , it detect the user live location along with the number plate of the vechile automatically.</p>
            </p>
            <video className='rounded-xl shadow-xl'  width={200}  autoPlay
        loop
        muted
        playsInline src="\ProjectVideos\snapandreport.mp4"></video>
        </div>

     
        
        <div className='flex flex-col   md:flex-row-reverse mx-20 gap-10'>
            <p className='flex  flex-col gap-3 text-white'>
                <h2 className='text-3xl text-green-500 font-bold'>Bolt.new Clone</h2>
                <p className='text-gray-300 hidden md:block'>Bolt.new 2.0 is a fast and easy-to-use web app that lets users create simple websites in seconds. It has a clean and minimal interface where you can write content, style it, and publish instantly—no coding needed. It’s perfect for quickly sharing ideas, resumes, portfolios, or landing pages without any setup.</p>
            </p>
            <video className='rounded-xl shadow-xl mb-4' width={600}  autoPlay
        loop
        muted
        playsInline src="\ProjectVideos\bolt.new.mp4"></video>
        </div>

        <div className='flex flex-col md:flex-row  mx-20 gap-10'>
            <p className='flex flex-col gap-3 text-white'>
                <h2 className='text-3xl text-yellow-500 font-bold'h>Working Of CI/CD Pipeline</h2>
                <p className='text-grapy-300 hidden md:block'>I created a completed CI/CD pipeline of automate the process and reduce manual work ,here I demostrate a simple text change from development to production using github actions .You can see how the text changes from report with one click to CI/CD is working.Its my favourite work to automate the developmenet and deployment. </p>
            </p>
            <video className='rounded-xl shadow-xl' width={600}  autoPlay
        loop
        muted
        playsInline src="\ProjectVideos\cicd.mp4"></video>
        </div>

        <div className='flex mb-5 flex-col md:flex-row-reverse  mx-20 gap-10'>
            <p className='flex flex-col gap-3 text-white'>
                <h2 className='text-3xl text-purple-500 font-bold'>Spotify Clone</h2>
                <p className='text-gray-300 hidden md:block'>Spotify Clone – A web-based music player that mimics Spotify’s core features. Users can play, pause, and switch between tracks with a responsive UI and smooth playback controls. Built using HTML, CSS, and JavaScript to deliver a seamless and interactive user experience.</p>
            </p>
            <video className='rounded-xl shadow-xl'  width={600}  autoPlay
        loop
        muted
        playsInline src="\ProjectVideos\spotify.mp4"></video>
        </div>
        
        </div>
    </div>
  )
}

export default Projects