import { useDispatch, useSelector } from 'react-redux';
import { virtEduApi } from '../api';
import { onLoadCourses, onSetActiveCourse, onSetCoursesLoading } from '../store';
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

    const setActiveCourse = (course) => {
        dispatch(onSetActiveCourse(course))
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
        setActiveCourse,
        startLoadingCoursesByUser


    }
}