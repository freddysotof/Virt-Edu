export const getEnvVariables = ()=>{

    return{
        VITE_API_URL: import.meta.env.NEXT_API_URL,
        ...import.meta.env
    }
}