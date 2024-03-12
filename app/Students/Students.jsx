"use client"
import React from 'react'
import { useState, useEffect } from "react";
import StudentForm from "./StudentForm";
import StudentInfo from "./StudentInfo";

const Students = () => {
    const [students, setStudents] = useState([]);
    const [message, setMessage] = useState('');

    useEffect (() => {
        fetch("http://localhost:5000/student")
        .then((response) => response.json())
        .then((data) => setStudents(data));
    }, []);

    const addStudent = (newStudent) => {
        fetch("http://localhost:5000/student", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newStudent)
        })
        .then((response) => response.json())
        .then ((nextNewStudent) => setStudents((prevStudents) => [...prevStudents, nextNewStudent]));
    };

    const updateStudent = (student) => {
        fetch(`http://localhost:5000/student/${student.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        })
        .then(() => setStudents(currStudent => currStudent.map(stud => stud.id === student.id ? student : stud)))
    }

    const deleteStudent = (student) => {
        fetch(`http://localhost:5000/student/${student.id}`, {
        method: "DELETE"
        }).then(() => setStudents((prevStudents) => prevStudents.filter((currentStudent) => currentStudent.id !== student.id)));
        };

    const handleStudentSubmit = (studentFormInfo, submitType) => {
        
        const noteElement = <p className='text-sm ml-60 font-bold text-blue-900 no-underline mt-8'> Deleating and editing students works only by identifying students by their ID.</p>
        
        if (submitType === 'Save')
        {
            for(let i = 0; i < students.length; i++)
            {
                if (students[i].id === studentFormInfo.id)
                {
                    setMessage("That student ID already exists!")
                    return false;
                }
            }

            if (studentFormInfo.id === "")
            {
                setMessage("A student must have a ID in order to be added.")
                return false;
            }
            
            setMessage("")
            addStudent(studentFormInfo)
            return true;
        }
        
        if (submitType === 'Edit')
        {
            if (studentFormInfo.id === "")
            {
                setMessage("You must enter a ID in order for the sutdent to be edited.")
                return false;
            }
            
            setMessage("")
            updateStudent(studentFormInfo)
        }
        
        if (submitType === 'Delete')
        {
            if (studentFormInfo.id === "")
            {
                setMessage("A student must have a ID in order the student to be deleted.")
                return false;
            }
            
            setMessage("")
            deleteStudent(studentFormInfo)
        }
    }

  return (
    <div className='bg-blue-300'>
        <h1 className='text-4xl ml-60 font-bold text-blue-900 underline'> Students</h1>

        <div className='flex flex-row' id='studentForm'>
            <StudentForm studentFormInfo={handleStudentSubmit}/>
            
            { message && <p className='text-sm ml-60 font-bold text-blue-900 no-underline mt-8'>{message}</p> }
        </div>

        <div className='flex flex-wrap justify-start items-start'>
        {
            students.map((student) => (
            <StudentInfo key={student.id} student={student}/>
            ))
        }
        </div>

    </div>
    )
}

export default Students