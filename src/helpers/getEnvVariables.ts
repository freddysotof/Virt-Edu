export const getEnvVariables = ()=>{

    return{
        VITE_API_URL: import.meta.env.VITE_API_URL,
        VITE_SIGNALR_URL: import.meta.env.VITE_SIGNALR_URL,
        ...import.meta.env
    }
}