import React from 'react'

const AboutUs = () => {
  return (
<div className='flex h-screen'>
  <div className='w-6/12  '>
  <div className="mt-12 md:mt-0 lg:absolute left-10 lg:w-7/12">
  <div className="relative w-full">
    <div
      aria-hidden="true"
      className="absolute scale-75 md:scale-110 left-0 top-[100px] m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-2xl"
    />
    
  </div>
</div>

  </div>
  <div className='w-6/12 flex flex-col items-center py-[30vh]'>
       <p className='text-7xl text-[#2B5DA2] font-semibold '>About Us</p>
       <p className='text-xl text-[#2B5DA2] font-semibold text-center'>Today, we introspect and look back with pride on the niche we have carved for ourselves in the exceedingly competitive and quality-conscious field of pharmaceuticals manufacturing.</p>
  </div>

</div>                   
    
  )
}

export default AboutUs
