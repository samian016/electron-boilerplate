import { useDispatch } from 'react-redux';
// import Private from './Private';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Lazy from '@renderer/Features/Lazy';
import PrivateRoute from './PrivateRoute';
import Versions from '../Versions';
// import Loading from '@/pages/Loading/Landing';
// import Refund from '@/pages/Refund/Refund';

// const DashboardLayout = lazy(() => import('../layout/DashboardLayout'));
// const AuthWrapper = lazy(() => import('../feature/Authentication/AuthWrapper'));

function Routers() {
  //   const dispatch = useDispatch();
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute roles={['member']}><Lazy name="Dashboard" /></PrivateRoute>}>
        <Route index element={<PrivateRoute roles={['member']}><Lazy name="Tasks" /></PrivateRoute>} />
        <Route path="/notifications" element={<PrivateRoute roles={['member']}><Lazy name="Notifications" /></PrivateRoute>} />
      </Route>
      <Route path="/auth">
        <Route index element={<Lazy name="Login" />} />
        {/* <Route path="forget" element={<Forget />} /> */}
      </Route>
    </Routes>
  );
}

export default Routers;