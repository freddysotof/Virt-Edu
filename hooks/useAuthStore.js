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
        } = authState
    const dispatch = useDispatch();

    const startLogin = async (credentials) => {
        try {
            dispatch(onCheckingCredentials())
            // resp = await new Promise((resolve,reject) => {
            //     return resolve
            //     ( {
            //         statusCode: 200,
            //         isSuccessStatusCode: true,
            //         data: {
            //             id:1,
            //             email:'', 
            //             displayName:'', 
            //             username :''
    
            //         }
            //     });
            // });
            const resp = await virtEduApi.post('/User/Login',credentials);
            if (resp) {

                if (!resp.isSuccessStatusCode) {
                    dispatch(onLogout({ errorMessage: resp.errorMessage }));
                } else {
                    localStorage.setItem('authUser', JSON.stringify(resp.data));
                    dispatch(onLogin(resp.data))
                }
            }
        } catch (error) {
            dispatch(onLogout({ errorMessage: 'Error de autenticacion' }));
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
        //* Metodos
        startLogin,
        startLogout,
        startSetDisplayName
    }
}