import { Opacity } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import Contactasset from './Contactasset';

import './Navbar.css'
export const Navbar = () => {
  const[shownav,setShownav]=useState('white');
  const[Opacity,setopacity]=useState("0")
  const handleShow=()=>{
       if(window.scrollY>50){
           setShownav("white")
       }

       else{
           setShownav("white")
       }
  }
  useEffect(()=>{
    window.addEventListener('scroll',handleShow)
  },[])
    const [show,setshow]=useState("0")
    const[a,seta]=useState(false)
    const handleShowTrue=()=>{
      setshow("2/12")
      seta(!a)
    }
    const handleShowFalse=()=>{
      setshow("0")
      seta(!a)
    }
    const[showContact,setshowContact]=useState(false)
    const handleNav=()=>{
       if(Opacity=="0"){
        setshowContact(!showContact)
        setopacity("100")
        
       }
       else{
        setshowContact(!showContact)
        setopacity("0")
     
       }
         
        
       
    }
  return (
    <>
    <div className={`fixed top-0 z-50 bg-${shownav}`} >
    <div className="py-3 px-2 bg-transparent w-screen flex ">
      <div className='w-6/12 px-10'>
          <img src="logoo.png" width={300} className="fixed -top-[70px]"/>
      </div>
      <div className='w-6/12 flex gap-10   justify-start px-4 font-semibold  text-2xl py-4 text-[#2B5DA2]' >
             <p className='hover:border-b-2 border-[#2B5DA2]  px-3 cursor-pointer' >
               Home
             </p>
             <p className='hover:border-b-2 border-[#2B5DA2]  px-3 cursor-pointer' onMouseEnter={()=>{setshowContact(false)}}>
               About
             </p >
             <p className='hover:border-b-2 border-[#2B5DA2]  px-3 cursor-pointer' onMouseEnter={()=>{setshowContact(false)}}>
              Products
             </p>
             <div>
              <div>
              <p className=' px-3 cursor-pointer ' onMouseEnter={()=>{setshowContact(true)}}  onClick={()=>{setshowContact(false)}} >
               <a href="#contact" >Contact Us</a>
              </p>
              <div className={showContact?"down":""}></div>
              </div>
           
             </div>
      </div>
      
      </div>
      {
        showContact? <div className='h-[60vh]  flex shadow-lg' onMouseEnter={()=>{setshowContact(true)}}  onMouseLeave={()=>{setshowContact(false)}}>
        <div className='w-8/12   bg-white py-4 px-7 text-[#2B5DA2]'> <p className={`text-4xl font-bold  transition-all ease-in-out delay-150 `}>Let's Connect with us</p>
        <p>Lets talk,send us a message and we will reach <br/> 
within one work day</p>
<div className='flex flex-wrap mt-10'>
    <div className='w-6/12 items-center py-8'><Contactasset  image={"https://cdn-icons-png.flaticon.com/512/126/126341.png"} data1={"Phone"} data2={"+918770100421"}/></div>
    <div className='w-6/12 items-center py-8'><Contactasset  image={"https://cdn-icons-png.flaticon.com/512/3059/3059486.png"} data1={"Email"} data2={"+918770100421"}/></div>
    <div className='w-6/12 items-center py-8'><Contactasset image={"https://cdn-icons-png.flaticon.com/512/3179/3179068.png"} data1={"Address"} data2={"+918770100421"}/></div>
</div>



</div>
        <div className='bg-[#759FD8] w-4/12  '> <img src='https://www.iqvia.com/-/media/iqvia/images/navigation/website-featured_jpg-2213_cheerful-young-colleagues-using-laptop.jpg?h=683&w=1024&hash=D776A849F30494AB90F889BBB8F30041' className='w-full h-full object-cover'/></div>
    </div>:<></>
      }
     
    <div>
        
    </div>
  </div>
  
  </>
  
  )
}