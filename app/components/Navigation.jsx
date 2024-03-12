import React from 'react'
import Link from "react-router-dom";

const Navigation = () => {
  return (
    <nav className='relative container mx-auto bg-blue-800 text-white p-6'>
        <div className="flex items-center justify-between">

          <div className='mx-12 w-20 h-20 '>
            <a href='http://localhost:3000/'>
            <img src="HighSchoolIcon.png"/>
            </a>
          </div>

          
          <div className='flex flex-row justify space-x-1'>
            <input className='text-black p-2 rounded-xl font-semibold'
            type='text'
            placeholder='Search'
            />

            <button type='button' className='bg-black px-4 py-4 hover:bg-gray-800 font-semibold rounded-md'>Find</button>
          </div>
        
          <div className='flex-row space-x-12 mr-48 text-2xl font-semibold'>
        
            <a href="#">Home</a>
            <a href="/Students">Students</a>
            <a href="#">Teaching and Learning</a>
            <a href="#">About Us</a>
        
          </div>
        </div>
    </nav>
  )
}

export default Navigation