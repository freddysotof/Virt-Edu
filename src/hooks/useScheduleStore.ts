import { useDispatch, useSelector } from 'react-redux';
import { virtEduApi } from '../api';
import { onLoadEvents, onSetActiveEvent, onSetEventsLoading } from '../store';
export const useScheduleStore = () => {
    const {
        events,
        activeEvent,
        isLoading,
        errorMessage,
        messageSaved,
    } = useSelector(state => state.event);
    const dispatch = useDispatch();

    const {
        id,
        roleId,
    } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const setActiveEvent = (event) => {
        dispatch(onSetActiveEvent(event))
    }

    const startLoadingEventsByUser = async () => {
        try {

            dispatch(onSetEventsLoading());
            if (roleId === 2) {
                // Buscar notas por estudiantes
                const { data } = await virtEduApi.get(`/Users/${id}/schedule`);
                dispatch(onLoadEvents(data));
            }
        } catch (error) {

        }
    }





    return {
        //* Propiedades
        events,
        activeEvent,
        isLoading,
        errorMessage,
        messageSaved,

        //* Metodos
        setActiveEvent,
        startLoadingEventsByUser,


    }
}