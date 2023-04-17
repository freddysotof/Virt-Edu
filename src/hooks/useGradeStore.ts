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

    const {
        id,
        role,
        studentId
    } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const setActiveGrade = (grade) => {
        dispatch(onSetActiveGrade(grade))
    }

    const startLoadingGradeById = async (gradeId) => {
        try {
            const { data } = await virtEduApi.get(`/Grade/${gradeId}`)
            dispatch(onSetActiveGrade(data))
        } catch (error) {

        }
    }

    const startLoadingGradesByStudentId = async () => {
        try {
            // Buscar notas por estudiantes
            if (role === 2) {
                dispatch(onSetGradesLoading());
                const { data } = await virtEduApi.get(`/Student/${studentId}/Grades`);
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
        startLoadingGradeById,


    }
}