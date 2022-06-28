const { createSlice } = require('@reduxjs/toolkit');
const { v4: uuidv4 } = require('uuid');

const initialStudents = {
    students: [
        { id: uuidv4(), name: "Arif", father: "Zaidul" },
        { id: uuidv4(), name: "Binu", father: "Shahzahan" },
    ]
}

export const studentsSlice = createSlice({
    name: "students",
    initialState: initialStudents,
    reducers: {
        showStudents: state => state,
        addStudent: (state, action) => {
            state.students.push(action.payload);
        }
    }
})

export const { showStudents, addStudent } = studentsSlice.actions;
