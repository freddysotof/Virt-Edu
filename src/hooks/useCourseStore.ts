import { useDispatch, useSelector } from 'react-redux';
import { virtEduApi } from '../api';
import { onLoadCourses, onSetActiveAssignment, onSetActiveCourse, onSetActiveQuiz, onSetActiveUnit, onSetCoursesLoading } from '../store';
export const useCourseStore = () => {
    const {
        courses,
        activeCourse,
        activeAssignment,
        activeQuiz,
        activeUnit,
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
                dispatch(onSetActiveAssignment(data))
        } catch (error) {
            console.log(error)
        }
    }


    const startLoadingQuizById = async (quizId) => {
        try {
            const { data } = await virtEduApi.get(`/Quizzes/${quizId}`)
            if (data)
                dispatch(onSetActiveQuiz(data))
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

    const setActiveCourse = (course) => {
        dispatch(onSetActiveCourse(course))
    }

    const setActiveUnit = (unit) => {
        dispatch(onSetActiveUnit(unit));
    }

    const setActiveAssignment = (assignment) => {
        dispatch(onSetActiveAssignment(assignment));
    }

    const setActiveQuiz = (quiz) => {
        dispatch(onSetActiveQuiz(quiz));
    }

    const getAssignments = () => {
        const assignments = [];
        if (activeCourse) {
            activeCourse?.units?.map((unit) => {
                unit?.assignments.map(assignment => assignments.push(assignment));
            })
        }

        return assignments;
    }




    return {
        //* Propiedades
        courses,
        activeCourse,
        activeAssignment,
        activeQuiz,
        activeUnit,
        assignments: getAssignments(),
        isLoading,
        errorMessage,
        messageSaved,


        //* Metodos
        startLoadingCourseById,
        startLoadingCoursesByUser,
        startLoadingAssignmentById,
        startLoadingQuizById,
        setActiveCourse,
        setActiveAssignment,
        setActiveQuiz,
        setActiveUnit


    }
}