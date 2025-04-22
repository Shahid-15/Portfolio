import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className='h-[1000px]'>
  
     <Navbar/>

     {/* intro section */}
     <Introduction/>


     {/* about me */}
     <AboutMe/>

     {/* skills */}
    

     {/* portfolio section */}

     {/* companies */}

     {/* contact us */}

     {/* footer */}

</div>      
     
    
  )
}

export default App
