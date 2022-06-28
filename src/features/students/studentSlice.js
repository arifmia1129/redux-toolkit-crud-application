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
        },
        editStudent: (state, action) => {
            const { id, name, father } = action.payload;
            const isExist = state.students.find(s => s.id === id);
            if (isExist) {
                isExist.name = name;
                isExist.father = father;
            }
        }
        ,
        deleteStudent: (state, action) => {
            state.students = state.students.filter(student => student.id !== action.payload);
        }
    }
})

export const { showStudents, addStudent, deleteStudent, editStudent } = studentsSlice.actions;
