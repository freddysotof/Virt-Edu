import { Route, Routes } from "react-router-dom"
import DashboardPage from "../../student/pages/DashboardPage"
import { StudentRoutes } from "./StudentRoutes"
import { ProfileRoutes } from "./ProfileRoutes"

export const VirtEduRoutes = () => {
    return (
        <Routes>
             <Route path='/*' element={<StudentRoutes />}/>
            <Route path='/profile/*' element={<ProfileRoutes />}/>
           

        </Routes>
    )
}
