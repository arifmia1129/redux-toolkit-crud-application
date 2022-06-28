import { configureStore } from '@reduxjs/toolkit'
import { studentsSlice } from '../features/students/studentSlice'
const store = configureStore({
    reducer: {
        studentsReducer: studentsSlice.reducer
    }
})

export default store;