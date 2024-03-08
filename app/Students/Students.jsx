"use client"
import React from 'react'
import { useState, useEffect } from "react";
import StudentForm from "./StudentForm";
import StudentInfo from "./StudentInfo";

const Students = () => {
    const [students, setStudents] = useState([]);
    
    useEffect (() => {
        fetch("http://localhost:5000/student")
        .then((response) => response.json())
        .then((data) => setStudents(data));
    }, []);

    const addStudent = (student) => {
        fetch("http://localhost:5000/student", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        })
        .then((response) => response.json())
        .then ((newStudent) => setStudents((oldStudents) => [...oldStudents, newStudent]));
    };

    const deleteStudent = (student) => {
        fetch(`http://localhost:5000/student/${student.id}`, {
            method: "DELETE"
    })  .then(() => setStudents((oldStudents) => oldStudents.filter((currentStudents) => currentStudent.id !== student.id)));
        };

    const handleStudentSubmit = (studentFormInfo) => {
        addStudent(studentFormInfo);
    }

  return (
    <body>
    <div className='flex flex-row'>
        <StudentForm studentFormInfo={handleStudentSubmit}/>
    </div>

    <div className='flex flex-wrap justify-start items-start'>
    {
        students.map((student) => (
            <StudentInfo key={student.id} student={student}/>
        ))
    }
    </div>
    </body>
  )
}

export default Students