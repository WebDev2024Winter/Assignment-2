import React from 'react'

const Main = () => {
  return (
    <body className='bg-blue-400'>
        <div className="container mx-auto p-8">
            <div className="bg-cyan-800 p-8 rounded-lg shadow-md">
                
                <div className="mt-6">
                    <h2 className="text-gary-800 text-lg font-semibold">New Generation High School</h2>
                    <p className="mt-2 text-black">
                    If you didnt see us, we were students!
                    </p>

                </div>

                <div className="mt-6">
                <h2 className="text-xl font-semibold">News</h2>
               
                  <div className="mt-4">

                    <div className="bg-blue-200 mt-4 p-4 rounded-lg">
                      <h3>Annual Meeting</h3>
                      <p className="mt-2 text-black">
                      Join ous for our 42nd sports annual meeting!
                      </p>
                    </div>

                    <div className="bg-blue-200 mt-4 p-4 rounded-lg">
                      <h3>No School</h3>
                      <p className="mt-2 text-black">
                      No School April 22, 2024!
                      </p>
                    </div>

                    <div className="bg-blue-200 mt-4 p-4 rounded-lg">
                      <h3>Student/Teacher Meeting!</h3>
                      <p className="mt-2 text-black">
                      Student teacher meeting Feb 29, 2024!
                      </p>
                    </div>

                  </div>
                </div>

            </div>
        </div>
    </body>
  )
}

export default Main