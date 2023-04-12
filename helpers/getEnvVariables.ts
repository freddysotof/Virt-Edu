export const getEnvVariables = ()=>{

    return{
        NEXT_API_URL: process.env.NEXT_API_URL,
        ...process.env
    }
}