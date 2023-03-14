import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./statistics.css"
function Statistics() {
    const[translate,settranslate]=useState("")

    const handleBrandName=()=>{
     
       if(window.scrollY>300 ){
         settranslate("numbers")
       
        
       }
       else{
        settranslate("")
        
       }
    }
    useEffect(()=>{
        settranslate("numbers")
       
        window.addEventListener("scroll",handleBrandName)
      
      },[])
  return (
    <div>
      <div className='flex h-screen'>

  <div className='w-6/12  '>
    <div>

    </div>
    <div className='flex gap-10'>
    <p className={`${translate} z-50 text-black border-b-2 h-fit border-gray-300 px-5`}></p> <p className='numbers z-50 text-black border-b-2 h-fit border-gray-300'></p>
    </div>
      
  </div>
  <div className='w-6/12 '>
  <div className="mt-12 md:mt-0 lg:absolute right-0 lg:w-7/12">
  <div className="relative w-full">
    <div
      aria-hidden="true"
      className="absolute scale-75 md:scale-110 right-0  m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-2xl"
    />
    
  </div>
</div>
  </div>

</div>         
    </div>
  )
}

export default Statistics
