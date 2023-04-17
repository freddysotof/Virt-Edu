import { createSlice } from '@reduxjs/toolkit';

export const gradeSlice = createSlice({
    name: 'grade',
    initialState: {
        grades: [],
        activeGrade: null,
        messageSaved: '',
        isLoading: false,
        errorMessage: null,
    },
    reducers: {
        onSetGradesLoading: (state) => {
            state.isLoading = true;
        },
        onLoadGrades: (state, { payload }) => {
            state.isLoading = false;
            if (payload) {
                payload.forEach(grade => {
                    const exists = state.grades
                        .some(dbGrade => dbGrade.id === grade.id);
                    if (!exists)
                        state.grades.push(grade);

                });
            }
        },
        onSetActiveGrade: (state, { payload }) => {
            state.activeGrade = payload
            state.isLoading = false;
        },
      
        onClearGrades:(state)=>{
            state.grades=[];
            state.activeGrade=null;
        
        }
    }
});
// Action creators are generated for each case reducer function
export const { 
    onSetGradesLoading,
    onLoadGrades,
    onSetActiveGrade,
    onClearGrades 
} = gradeSlice.actions;
//! https://react-redux.js.org/tutorials/quick-start