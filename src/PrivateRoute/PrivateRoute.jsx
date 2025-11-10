
import React from "react";
import { useAuth } from '../Context/AuthProvider';
import Loader from "../Components/Loader"
import { Navigate, useLocation } from "react-router";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Loader />;
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
  return children;
}
