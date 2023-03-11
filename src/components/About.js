import React from 'react'

export const About = () => {
    return (
        <>
            <div className=' flex ' style={{ background: ` rgb(255,255,255)`, background: `radial-gradient(circle, rgba(234,234,234,1) 64%, rgba(169,192,220,1) 100%)` }}>
                <div className='w-6/12 h-screen relative' >

                    <div className=" absolute left-20  translate-x-16 max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl hover:z-40 hover:translate-x-0">
                        <img
                            src="https://images.unsplash.com/photo-1478476868527-002ae3f3e159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                            alt="plant"
                            className="h-auto w-fit"
                        />
                    </div>
                    <div className=" absolute  left-20 translate-y-3/4  max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl hover:z-40 hover:translate-x-10">
                        <img
                            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                            alt="plant"
                            className="h-full w-fit"
                        />
                    </div>
                    <div className=" absolute left-30 translate-x-full translate-y-3 max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl hover:z-40">
                        <img
                            src="https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                            alt="plant"
                            className="h-auto w-fit object-cover"
                        />
                    </div >


                </div>
                <div className='  w-6/12 h-screen flex flex-col px-10 justify-center items-center text-black'>
                    <p className='text-7xl text-right w-full'>Our Mission</p>
                    <p className='text-right	'>Our Mission is to improve the quality of life and longevity of Patients.

                        <br />We are developing and implementing Innovative approaches in BioPharmaceuticals to better serve Patients with life-impacting diseases.

                        Every Patient in the world has the right to Quality Medical treatment. Our goal is to make it affordable.</p>
                </div>



            </div>
        </>
    )
}
