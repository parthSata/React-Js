import React from 'react'
import Header from './Component/Header/NavBar.jsx'
import Footer from './Component/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
