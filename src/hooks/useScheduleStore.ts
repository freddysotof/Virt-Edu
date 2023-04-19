import { useDispatch, useSelector } from 'react-redux';
import { virtEduApi } from '../api';
import { onLoadEvents, onSetActiveEvent, onSetEventsLoading } from '../store';
import { compareDates } from '../helpers';
export const useScheduleStore = () => {
    const {
        events,
        activeEvent,
        isLoading,
        errorMessage,
        messageSaved,
    } = useSelector(state => state.schedule);

    const {
        id,
        role,
        studentId
    } = useSelector(state => state.auth);

    const dispatch = useDispatch();


    const setActiveEvent = (event) => {
        dispatch(onSetActiveEvent(event))
    }

    // const startLoadingEventById = async (eventId) => {
    //     try {
    //         const { data } = await virtEduApi.get(`/Course/${eventId}`)
    //         dispatch(onSetActiveGrade(data))
    //     } catch (error) {

    //     }
    // }

    const startLoadingEventsByUser = async () => {
        try {

            dispatch(onSetEventsLoading());
            if (role === 2) {
                // Buscar notas por estudiantes
                const { data } = await virtEduApi.get(`/Student/${studentId}/Events`);
                dispatch(onLoadEvents(data));
            }
        } catch (error) {

        }
    }



    return {
        //* Propiedades
        events,
        upcomingTasks: events.filter(task => {
            var today = new Date().toLocaleDateString('EN-ES');
            var dueDate = new Date(task.dueDate).toLocaleDateString('EN-ES');
            if (today !== dueDate && compareDates(task.dueDate, new Date().toISOString()) == 1)
                return task;
        }),
        todayTasks: events.filter(task => {
            var today = new Date().toLocaleDateString('EN-ES');
            var dueDate = new Date(task.dueDate).toLocaleDateString('EN-ES');
            if (today === dueDate)
                return task;
        }),
        activeEvent,
        isLoading,
        errorMessage,
        messageSaved,

        //* Metodos
        setActiveEvent,
        startLoadingEventsByUser,


    }
}