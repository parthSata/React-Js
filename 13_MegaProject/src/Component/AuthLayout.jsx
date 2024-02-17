import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AuthLayout({ children, authentication = true }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loader, setLoader] = useState(true)
  const authStatus = useSelector(state => state.auth.status)


  useEffect(() => {
        //true && false 
    if (authentication && authStatus !== authentication) {
      navigate("/login")
    } else if (!authentication && authStatus !== authentication) {
      navigate("/")
    }
    setLoader(false)
  }, [authStatus, navigate, authentication])


  return loader ? <h1> Loading ....</h1> : <>{children}</>
}


