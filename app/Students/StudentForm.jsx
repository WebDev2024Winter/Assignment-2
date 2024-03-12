"use client"
import React from 'react'
import { useState } from "react";

const StudentForm = ({studentFormInfo}) => {
    const [id, setId] = useState('')
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [currentGrade, setCurrentGrade] = useState('');
    const [dob, setDob] = useState('');

    const submitForm = (submitType) => {
        
        studentFormInfo({id, firstname, lastname, currentGrade, dob}, submitType)

        setId('')
        setFirstName('')
        setLastName('')
        setCurrentGrade('')
        setDob('')
    }
  
  return (
    <form className="bg-blue-100 p-4 rounded-lg shadow-md w-60 m-4">
            <h3 className='mb-2'>Add New Student</h3>
            
            <div className='flex justify-between mb-1'>
                <span className="font-semibold">Id:</span>
                
                <input className='w-20 text-right'
                    type='number'
                    placeholder='ID'
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </div>
            
            <div className='flex justify-between mb-1'>
                <span className="font-semibold">First Name:</span>
                
                <input className='w-20 text-right'
                    type='text'
                    placeholder='First'
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            
            <div className='flex justify-between mb-1'>
                <span className="font-semibold">Last Name:</span>
                
                <input className='w-20 text-right'
                    type='text'
                    placeholder='Last'
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            
            <div className='flex justify-between mb-1'>
                <span className="font-semibold">Grade:</span>
                
                <input className='w-20 text-right'
                    type='text'
                    placeholder='Grade'
                    value={currentGrade}
                    onChange={(e) => setCurrentGrade(e.target.value)}
                />
            </div>
            
            <div className='flex justify-between mb-1'>
                <span className="font-semibold">Birth Date:</span>
                
                <input className='w-20 text-right'
                    type='text'
                    placeholder='Birth Date'
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                />
            </div>

            <div className='flex flex-row justify-between mt-4'>
            <button type='button' onClick={() => submitForm('Save')}>Save</button>
            <button type='button' onClick={() => submitForm('Edit')}>Edit</button>
            <button type='button' onClick={() => submitForm('Delete')}>Delete</button>
            </div>
        </form>
  )
}

export default StudentForm