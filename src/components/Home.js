import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'

export const Home = () => {
  const[translate,settranslate]=useState("0")
  const[opacity,setopacity]=useState("50")
  const handleBrandName=()=>{
   
     if(window.scrollY<50){
       settranslate("full")
       setopacity("100")
      
     }
     else{
      settranslate("0")
      setopacity("50")
     }
  }
const handleLoad=()=>{
  alert("hey")
}
  useEffect(()=>{
    settranslate("full")
    setopacity("100")
    window.addEventListener("scroll",handleBrandName)
  
  },[])
  return (
    <div className=" flex justify-center items-center h-screen " style={{backgroundImage:"url('Our mission.png')",backgroundSize:"cover"}} >
    
    
     <div className='w-6/12'>

     </div>
     <div className='w-6/12 flex capitalize gap-10 font-bold  h-6/12  justify-end relative  z-10 ' style={{fontFamily:'Bebas Neue'}}>
        
         <p className={`text-9xl cursor-pointer text-white absolute left-4 -translate-x-${translate} opacity-${opacity} transition-all  delay-500 `}>Kad</p><p className='text-9xl cursor-pointer capitalize text-[#2B5DA2] absolute'>Pharmaceuticals</p>
         <br/><p className='absolute top-40 right-4 text-white font-sans'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
     </div>
     


    </div>
  )
}
