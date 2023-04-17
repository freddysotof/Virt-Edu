import { createSlice } from '@reduxjs/toolkit';
const initialAuthState= {
    status: 'checking', // 'checking', 'not-authenticated' , 'authenticated'
    id: null,
    email: null,
    displayName: null,
    username: null,
    role:2,
    photoUrl:null,
    phone:null,
    studentId:null,
    // employeeCode: null,
    // authenticationType: 2,
    errorMessage: null,
}
export const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        onLogin: (state, { payload }) => {
            state.status = 'authenticated'; // 'checking', 'not-authenticated' , 'authenticated'
            state.id = payload.id;
            state.email = payload.email;
            state.displayName = `${payload.name} ${payload.lastName}`;
            state.phone = payload.phone;
            state.photoUrl = payload.photoUrl;
            state.role = payload.role??initialAuthState.role;
            state.studentId= payload.studentId;
            // state.authenticationType = payload.authenticationType;
            // state.employeeCode = payload.employeeCode;
            state.errorMessage = null;
        },
        onLogout: (state, { payload }) => {
            state.status = 'not-authenticated'; // 'checking', 'not-authenticated' , 'authenticated'
            state.id = null;
            state.email = null;
            state.displayName = null;
            state.username = null;
            state.phone=null;
            state.photoUrl=null;
            state.role=null;
            state.studentId=null;

            // state.employeeCode = null;
            // state.authenticationType = payload?.authenticationType;
            state.errorMessage = payload?.errorMessage ?? null;
        },
        onCheckingCredentials: (state) => {
            state.errorMessage = null;
            state.status = "checking";
        },
        onSetDisplayName:(state,{payload})=>{
            state.displayName=payload;
        }

    }
});
// Action creators are generated for each case reducer function
export const {
    onLogin,
    onLogout,
    onCheckingCredentials,
    onSetDisplayName
} = authSlice.actions;
//! https://react-redux.js.org/tutorials/quick-start