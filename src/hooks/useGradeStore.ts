import { useDispatch, useSelector } from 'react-redux';
import { virtEduApi } from '../api';
import { onLoadGrades, onSetActiveGrade, onSetGradesLoading } from '../store';
export const useGradeStore = () => {
    const {
        grades,
        activeGrade,
        isLoading,
        errorMessage,
        messageSaved,
    } = useSelector(state => state.grade);
    const dispatch = useDispatch();

    const {
        id,
        roleId,
    } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const setActiveGrade = (grade) => {
        dispatch(onSetActiveGrade(grade))
    }

    const startLoadingGradesByStudentId = async () => {
        try {
            // Buscar notas por estudiantes
            if (roleId === 2) {
                dispatch(onSetGradesLoading());
                const { data } = await virtEduApi.get(`/Users/${id}/Grades`);
                dispatch(onLoadGrades(data));
            }
        } catch (error) {

        }
    }





    return {
        //* Propiedades
        grades,
        activeGrade,
        isLoading,
        errorMessage,
        messageSaved,

        //* Metodos
        setActiveGrade,
        startLoadingGradesByStudentId,


    }
}