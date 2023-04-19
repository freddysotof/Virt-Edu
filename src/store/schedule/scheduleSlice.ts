import { createSlice } from '@reduxjs/toolkit';

export const scheduleSlice = createSlice({
    name: 'schedule',
    initialState: {
        events: [],
        activeEvent: null,
        messageSaved: '',
        isLoading: false,
        errorMessage: null,
    },
    reducers: {
        onSetEventsLoading: (state) => {
            state.isLoading = true;
        },
        onLoadEvents: (state, { payload }) => {
            state.isLoading = false;
            if (payload) {
                payload.forEach(event => {
                    const exists = state.events
                        .some(dbEvent => {
                            if (dbEvent.taskType === "Assignment") {
                                return dbEvent.assignment?.id === event.assignment?.id
                            }


                            if (dbEvent.taskType === "Quiz") {
                                return dbEvent.quiz?.id === event.quiz?.id
                            }

                        });
                    if (!exists)
                        state.events.push(event);

                });
            }
        },
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload
            state.isLoading = false;
        },

        onClearEvents: (state) => {
            state.events = [];
            state.activeEvent = null;

        }
    }
});
// Action creators are generated for each case reducer function
export const {
    onSetEventsLoading,
    onLoadEvents,
    onSetActiveEvent,
    onClearEvents
} = scheduleSlice.actions;
//! https://react-redux.js.org/tutorials/quick-start