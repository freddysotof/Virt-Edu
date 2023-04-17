import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onCheckingCredentials, onLogin, onLogout, onSetDisplayName } from "../store";
import { virtEduApi } from '../api'
const petitionHandler = {
    data: {}
}
export const useAuthStore = () => {
    const authState = useSelector(state => state.auth);
    const
        {
            username,
            employeeCode,
            displayName,
            status,
            errorMessage,
            authenticationType,
            id,
            email,
            role,
            photoUrl,
            studentId
        } = authState
    const dispatch = useDispatch();

    const startLogin = async (credentials) => {
        try {
            dispatch(onCheckingCredentials())
            const resp = await virtEduApi.post('/User/Login', credentials);

            if (resp) {
                const { status, data } = resp;

                if (status === 200 || status == 204) {
                    // Obtener id estudiante si tiene rol estudiante
                    if (data.user.role === 2) {
                        const { data: userInfo } = await virtEduApi.get(`/User/${data.user.id}`);
                    // dispatch(onLogin({ ...data.user }));
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('authUser', JSON.stringify({ ...data.user, studentId: userInfo?.student?.id }));
                   
                    dispatch(onLogin({ ...data.user, studentId: userInfo?.student?.id }));
                    }
                } else {
                    dispatch(onLogout({ errorMessage: resp.statusText }));
                }
            }
        } catch (error) {
            dispatch(onLogout({ errorMessage: 'Usuario o contrasena inorrecta' }));
        }


    }


    const startLogout = async () => {
        try {
            localStorage.clear();
            dispatch(onLogout())
        } catch (error) {

        }
    }

    const startSetDisplayName = (displayName) => {
        dispatch(onSetDisplayName(displayName));
    }

    return {
        //* Propiedades
        username,
        employeeCode,
        displayName,
        status,
        errorMessage,
        authenticationType,
        id,
        email,
        roleName: role === 2 ? 'Estudiante' : 'Maestro',
        studentId,
        photoUrl,
        //* Metodos
        startLogin,
        startLogout,
        startSetDisplayName
    }
}