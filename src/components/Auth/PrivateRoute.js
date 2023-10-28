import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function PrivateRoute({ element }) {
  const { user } = useAuth();

  return user ? (
    <Routes>{element}</Routes>
  ) : (
    <Navigate to="/" replace />
  );
}

export default PrivateRoute;
