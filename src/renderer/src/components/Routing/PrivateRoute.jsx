import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Navigate } from 'react-router';


export default function PrivateRoute({ children, roles = [] }) {
    const { user, loading } = useSelector((state) => ({ user: state.userSlice.user, loading: state.userSlice.loading }), shallowEqual);
    if (loading) {
        // console.log("loading", { user, loading });
        return <div className="text-green-300">Loading,,,,,</div>
    }
    if (!user) {
        // console.log("user", { user, loading });
        return <Navigate to='/auth' />
    }
    if (roles.length > 0 && !roles.includes(user.role.name)) {
        // console.log("role", { user, loading });
        return <Navigate to='/auth' />
    }
    // console.log(loading, user)
    return children
}