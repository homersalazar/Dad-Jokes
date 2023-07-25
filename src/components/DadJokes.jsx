import React, { useState } from 'react'
import LOGO from '../assets/favicon.png'


const DadJokes = () => {
    const [joke, setJoke] = useState('');

    const getJoke = () => {
        fetch('https://icanhazdadjoke.com/', {
          headers: {
            'Accept': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => setJoke(data.joke))
        .catch(error => console.error(error));
      };
    return (
        <div className='grid h-screen place-items-center'>
            <img 
                src={LOGO}
                alt="logo" 
            />
            <div className='rounded-md w-full px-10'>
                <div className="p-4 bg-white text-center border-2 border-red-400 rounded-lg shadow sm:p-8">
                    <h5 className="mb-4 text-xl font-medium text-gray-700">{joke}</h5>
                </div>
            </div>
            <div className="self-end bg-[var(--background)] p-5 mb-5 text-center font-bold text-2xl"> 
                <button onClick={getJoke} type="button" className="text-white bg-black hover:bg-white hover:text-black font-xl rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Get jokes</button>
            </div>
        </div>
    )
}

export default DadJokes
