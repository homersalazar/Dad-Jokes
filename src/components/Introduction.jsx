import React from 'react'
import LOGO from '../assets/favicon.png'
const Introduction = () => {
  return (
    <div className='grid h-screen place-items-center bg-[var(--accent)]'>
        <img 
            src={LOGO} 
            alt="" 
        />
        <div className="self-end bg-[var(--background)] w-full p-5 text-center font-bold text-2xl">
            Dad Jokes
        </div>
    </div>
  )
}

export default Introduction
