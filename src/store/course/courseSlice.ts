import { createSlice } from '@reduxjs/toolkit';

export const courseSlice = createSlice({
    name: 'course',
    initialState: {
        courses: [],
        activeCourse: null,
        activeUnit: null,
        activeAssignment:null,
        activeQuiz:null,
        messageSaved: '',
        isLoading: false,
        errorMessage: null,
    },
    reducers: {
        onSetCoursesLoading: (state) => {
            state.isLoading = true;
        },
        onLoadCourses: (state, { payload }) => {
            state.isLoading = false;
            if (payload) {
                payload.forEach(course => {
                    const exists = state.courses
                        .some(dbCourse => dbCourse.id === course.id);
                    if (!exists)
                        state.courses.push(course);

                });
            }
        },
        onSetActiveCourse: (state, { payload }) => {
            state.activeCourse = payload
            state.isLoading = false;
        },
        onSetActiveUnit: (state, { payload }) => {
            state.activeUnit = payload
            state.isLoading = false;
        },
        onSetActiveAssignment: (state, { payload }) => {
            state.activeAssignment = payload
            state.isLoading = false;
        },
        onSetActiveQuiz: (state, { payload }) => {
            state.activeAssignment = payload
            state.isLoading = false;
        },
        onClearCourses:(state)=>{
            state.courses=[];
            state.activeCourse=null;
        
        }
    }
});
// Action creators are generated for each case reducer function
export const { 
    onSetCoursesLoading,
    onLoadCourses,
    onSetActiveCourse,
    onSetActiveQuiz,
    onSetActiveUnit,
    onSetActiveAssignment,
    onClearCourses 
} = courseSlice.actions;
//! https://react-redux.js.org/tutorials/quick-start