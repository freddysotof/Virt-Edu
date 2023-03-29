// import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {onCheckingCredentials,onLogin,onLogout,onSetDisplayName} from '../store'
export const useCheckAuth = () => {

    const { status, authenticationType, employeeCode } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        let logged;
        let authUser;
        const userInfo = localStorage.getItem('authUser');
        if (userInfo) {
            authUser = JSON.parse(userInfo)
            logged = !!authUser;
        } else
            logged = false;

        if (!logged) dispatch(onLogout({ authenticationType }));
        else {
            dispatch(onLogin(authUser));
        }


    }, [])




    return {
        status
    }
}
