import { configureStore } from "@reduxjs/toolkit";
import { authSlice, courseSlice, gradeSlice, scheduleSlice } from ".";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        course: courseSlice.reducer,
        grade: gradeSlice.reducer,
        schedule: scheduleSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
        .concat()
})