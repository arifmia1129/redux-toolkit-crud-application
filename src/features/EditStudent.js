import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { editStudent } from './students/studentSlice';

const EditStudent = () => {
    const location = useLocation();
    const [id, setId] = useState(location.state.id);
    const [name, setName] = useState(location.state.name);
    const [father, setFather] = useState(location.state.father);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const student = { id, name, father };
        dispatch(editStudent(student))
        navigate("/students");
    }
    return (
        <div>
            <h1>Edit a existing student</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Student Name:</label>
                    <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="father">Father Name:</label>
                    <input type="text" name="father" id="father" value={father} onChange={e => setFather(e.target.value)} required />
                </div>
                <input type="submit" value="Update Student" />
            </form>
        </div>
    );
};

export default EditStudent;