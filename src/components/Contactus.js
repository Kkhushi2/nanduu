import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function Contact() {
  return (
    <section className=" text-gray-600 body-font relative">
    <div className="  absolute inset-0 bg-gray-300">
      <iframe
        width="100%"
        height="100%"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="map"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style={{}}
      />
    </div>

    <div className="container px-5 py-24 mx-auto flex">
      <div className="lg:w-1/3 md:w-1/2 bg-white rounded-xl p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 className="text-[#0f172a] text-2xl font-bold title-font mb-7 pl-13  ">
          Connect With Us
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          
        </p>
        <div className="relative">
       <MailOutlineIcon/>
          <label htmlFor="email" className="leading-7 text-md text-[#171717] font-semibold">
            Email <div>KadPharma@gmail.com</div>
           
          </label>

        
        </div>
        
        <div className='border-dashed  border-black border-l-2 h-7 border-spacing-2'></div>
     
        <div className="relative">
       <LocalPhoneOutlinedIcon/>
          <label htmlFor="email" className="leading-7 text-md text-[#171717] font-semibold">
            Phone <div>01234567890</div>
           
          </label>

        
        </div>
        <div className='border-dashed  border-black border-l-2 h-7 border-spacing-2'></div>
        <div className="relative">
       <LocationOnOutlinedIcon/>
          <label htmlFor="email" className="leading-7 text-md text-[#171717] font-semibold">
            Location <div>Block No. 10-13, Village: Changodar,
Sarkhej-Bavla Highway,
Taluka: Sanand,
District: Ahmedabad- 382 213.
Gujarat - India.</div>
           
          </label>

        
        </div>

       
      </div>
    </div>
    
    <div className="container px-5 py-24 mx-auto flex">
      <div className="lg:w-1/3 md:w-1/2 bg-white rounded-xl p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 className="text-[#0f172a] text-2xl font-bold title-font mb-7 pl-13  ">
          Send Us A Mail
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          
        </p>
        <div className="relative mb-4">
       <MailOutlineIcon/>
          <label htmlFor="email" className="leading-7 text-lg text-[#171717] font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        
     
        <div className="relative mb-4">
            <MessageOutlinedIcon/>
          <label htmlFor="message" className="leading-7 text-lg text-black font-semibold">
            Message
          </label>
         
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            defaultValue={""}
          />
        </div>
        

        <button className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Send
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Thanks,We will reach you within a day!
        </p>
      </div>
    </div>
  </section>
  
  )
}

export default Contact