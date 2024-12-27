import React from 'react'
import { Outlet } from "react-router"
import AdminNavbar from '../../components/admin/AdminNavbar/AdminNavbar'
import AdminFooter from '../../components/admin/AdminFooter/AdminFooter'

function AdminRoot() {
    return (
        <>
            <AdminNavbar />
            <Outlet />
            <AdminFooter />
        </>
    )
}

export default AdminRoot