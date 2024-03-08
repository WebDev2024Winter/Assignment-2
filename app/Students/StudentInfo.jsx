"use client"
import React from 'react'

const StudentInfo = ({student}) => {
  return (
            <div className='bg-blue-200 text-black p-4 rounded-sm shadow-md w-72 my-6 mx-4'>
            <div className='text-sm'>

                <div className='flex justify-between mb-1'>
                    <span className='font-semibold'>Student ID: </span>
                    <span className='text-black text-right'>{student.id}</span>
                </div>

                <div className='flex justify-between mb-1'>
                    <span className='font-semibold'>First Name: </span>
                    <span className='text-black text-right'>{student.firstname}</span>
                </div>

                <div className='flex justify-between mb-1'>
                    <span className='font-semibold'>Last Name: </span>
                    <span className='text-black text-right'>{student.lastname}</span>
                </div>

                <div className='flex justify-between mb-1'>
                    <span className='font-semibold'>Grade: </span>
                    <span className='text-black text-right'>{student.currentGrade}</span>
                </div>

                <div className='flex justify-between mb-1'>
                    <span className='font-semibold'>Date-of-Birth: </span>
                    <span className='text-black text-right'>{student.dob}</span>
                </div>
            </div>
        </div>
  )
}

export default StudentInfo