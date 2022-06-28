import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { deleteStudent } from './studentSlice';
import { Link } from "react-router-dom";

const StudentsView = () => {
    const students = useSelector(state => state.studentsReducer.students);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>All Student</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Father</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(student => {
                            const { id, name, father } = student;
                            return <tr key={id}>
                                <td>{name}</td>
                                <td>{father}</td>
                                <td>
                                    <Link to="/edit-student" state={{ id, name, father }}>
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={() => dispatch(deleteStudent(id))}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default StudentsView;