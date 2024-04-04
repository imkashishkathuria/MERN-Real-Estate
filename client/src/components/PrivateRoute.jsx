import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';


export default function PrivateRoute() {
    const {currentuser} = useSelector(State=>State.user);

  return currentuser ? <Outlet/> : <Navigate to="/sign-in"/>;
}

