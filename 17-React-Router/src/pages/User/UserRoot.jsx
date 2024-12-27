import React from 'react'
import { Outlet } from "react-router"
import UserNavbar from '../../components/user/UserNavbar/UserNavbar'
import UserFooter from '../../components/user/UserFooter/UserFooter'
function UserRoot() {
    return (
        <>
            <UserNavbar />
            <Outlet />
            <UserFooter />
        </>
    )
}

export default UserRoot