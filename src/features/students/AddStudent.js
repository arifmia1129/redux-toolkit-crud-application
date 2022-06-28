import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { addStudent } from './studentSlice';
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
    const [name, setName] = useState("");
    const [father, setFather] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const student = { id: uuidv4(), name, father };
        dispatch(addStudent(student))
        navigate("/students");
    }
    return (
        <div>
            <h1>Add new student</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Student Name:</label>
                    <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="father">Father Name:</label>
                    <input type="text" name="father" id="father" value={father} onChange={e => setFather(e.target.value)} required />
                </div>
                <input type="submit" value="Add Student" />
            </form>
        </div>
    );
};

export default AddStudent;