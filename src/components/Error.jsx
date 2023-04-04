import {useState} from 'react'

const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center font-bold rounded-md uppercase py-3 mb-3'>
        {children}
    </div>
  )
}

export default Error
