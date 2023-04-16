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
            roleId,
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
                console.log(resp);
                const {status,data} = resp;
                
                if (status===200 || status==204) {
                    localStorage.setItem('token',data.token)
                    localStorage.setItem('authUser', JSON.stringify(data.user));
                    dispatch(onLogin(data.user))
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
        roleName:roleId===2 ?'Estudiante':'Maestro',
        //* Metodos
        startLogin,
        startLogout,
        startSetDisplayName
    }
}