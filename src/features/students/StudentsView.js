import React from 'react';
import { useSelector } from 'react-redux/es/exports';

const StudentsView = () => {
    const students = useSelector(state => state.studentsReducer.students);

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
                                    <button>Edit</button>
                                    <button>Delete</button>
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