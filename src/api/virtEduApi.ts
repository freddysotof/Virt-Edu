import axios from 'axios';
import { getEnvVariables } from '../helpers';


const {VITE_API_URL} = getEnvVariables();
export const virtEduApi = axios.create({
    baseURL: VITE_API_URL,

})


// virtEduApi.interceptors.response.use(
//     response => {
//         const { status, statusText } = response;
//         const { Messages, Data, IsSuccessStatusCode } = response.data;

//         return {
//             status,
//             statusText,
//             data: Data,
//             messages: Messages,
//             isSuccessStatusCode: IsSuccessStatusCode
//         }
//     },
//     error => {
//         let status, statusText, Errors=null, IsSuccessStatusCode=false;
//         if (error.response) {
//             ({ status, statusText } = error);
//             ({ Errors, IsSuccessStatusCode } = error.response.data);
//         }
//         else {
//             status = error.code;
//             statusText = error.message
//             Errors=[{ Message: error.message, StatusError: error.code }];
//             IsSuccessStatusCode=false;
//         }
//         throw {
//             isSuccessStatusCode: IsSuccessStatusCode,
//             statusText,
//             statusCode: status,
//             details:  Errors.map(error => {
//                 return {
//                     message: error.Message,
//                     statusError: error.StatusError,
//                     description: error.Description,
//                     stackTrace: error.StackTrace
//                 };
//             }) 
//         }
//     },
// )