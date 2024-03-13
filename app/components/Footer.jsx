import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-800'>
        <div className='container flex flex-row justify-around px-4 py-4 space-y-4 space-x-6'>
          <div className='flex flex-col justify-between px-4 py-4 space-y-3'>
        
            <div className='mx-8 w-20 h-20 '>
              <a href='http://localhost:3000/'>
              <img src="HighSchoolIconFooter.png"/>
              </a>
            </div>

            
              <a className='flex flex-row text-sm text-white' href='https://twitter.com/NextGenerationHighSchool/'>
              <img src='twitter-icon.svg'/>

              <h6 className='text-sm text-white'>  Follow Us on Twitter</h6>
              </a>
            
          </div>

          <div className='flex flex-col justify-between px-4 py-2 space-y-2'>
            <a href='#' className='text-white'>Home</a>
            <a href='/Students' className='text-white'>Students</a>
            <a href='#' className='text-white'>Community</a>
          </div>

          <div className='flex flex-col justify-between px-4 py-2 space-y-2'>
            <a href='#' className='text-white'>Teachers</a>
            <a href='#' className='text-white'>About</a>
            <a href='#' className='text-white'>Contacts</a>
          </div>

          <div className='flex flex-col text-white text-xm justify-between p-2 space-y-2'>
            <p className='text-sm'>New Generation High School</p>
            <p>Phone: +1-597-683-7783</p>
            <p>1168 Aberfield Heights, NW, San Francisco, California</p>
            <p>Mon-Sat: 7AM - 4PM</p>
          </div>
          
        </div>

      <h6 className='text-xs text-white mt-6'>New Generation High School Copyright &copy; 2024 All rights reserved.</h6>
            
    </footer>
  )
}

export default Footer