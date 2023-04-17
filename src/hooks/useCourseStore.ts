import { useDispatch, useSelector } from 'react-redux';
import { virtEduApi } from '../api';
import { onLoadCourses, onSetActiveaAssignment, onSetActiveCourse, onSetCoursesLoading } from '../store';
export const useCourseStore = () => {
    const {
        courses,
        activeCourse,
        isLoading,
        errorMessage,
        messageSaved,

    } = useSelector(state => state.course);

    const {
        id,
        role,
        studentId,

    } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLoadingCourseById = async (courseId) => {
        try {
            const { data } = await virtEduApi.get(`/Course/${courseId}`)
            if (data)
                dispatch(onSetActiveCourse(data))
        } catch (error) {
            console.log(error)
        }
    }

    const startLoadingAssignmentById = async (assignmentId) => {
        try {
            const { data } = await virtEduApi.get(`/Assignments/${assignmentId}`)
            if (data)
                dispatch(onSetActiveaAssignment(data))
        } catch (error) {
            console.log(error)
        }
    }


    const startLoadingQuizById = async (quizId) => {
        try {
            const { data } = await virtEduApi.get(`/Quizzes/${quizId}`)
            if (data)
                dispatch(onSetActiveaAssignment(data))
        } catch (error) {
            console.log(error)
        }
    }

    const startLoadingCoursesByUser = async () => {
        try {
            dispatch(onSetCoursesLoading());
            // Buscar curso por estudiantes
            if (role === 2) {
                // console.log('consultando cursos de estudiante',studentId)
                const { data } = await virtEduApi.get(`/Student/${studentId}/Courses`);
                dispatch(onLoadCourses(data));
            }
        } catch (error) {

        }
    }




    return {
        //* Propiedades
        courses,
        activeCourse,
        isLoading,
        errorMessage,
        messageSaved,


        //* Metodos
        startLoadingCourseById,
        startLoadingCoursesByUser,
        startLoadingAssignmentById,
        startLoadingQuizById


    }
}