import React from 'react'
import authService from '../../appwrite/Auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../Store/AuthSlice'



function LogOutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout()
            .then(() => {
                dispatch(logout())
            })
    }
    return (
        <div>
            <button
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                onClick={logoutHandler}
            >Logout</button>
        </div>
    )
}

export default LogOutBtn

