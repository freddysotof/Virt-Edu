
import { Route, Routes, Navigate } from 'react-router-dom'
import { ProfileLayout } from '../../layout/ProfileLayout'
import ProfilePage from '../../student/pages/ProfilePage'

// const {BackTop} = FloatButton;
export const ProfileRoutes = () => {
    return (
        <>
        <ProfileLayout>
        <Routes>
                <Route path='/' element={<ProfilePage />}></Route>
              
            </Routes>
        </ProfileLayout>
        </>

    )
}
