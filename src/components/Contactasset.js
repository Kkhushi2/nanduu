import React from 'react'

const Contactasset = (props) => {
  return (
    <div className='flex items-center gap-4'>
        <div><img src={props.image} width={30}/></div>
        <div> <div className='text-sm'>{props.data1}</div> <div>{props.data2}</div></div>
    </div>
  )
}

export default Contactasset