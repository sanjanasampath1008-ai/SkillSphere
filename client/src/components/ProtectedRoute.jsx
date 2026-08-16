import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({
  allowedRoles,
}) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>Loading SkillSphere...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (
    allowedRoles &&
    allowedRoles.length > 0 &&
    !allowedRoles.includes(
      String(user.role || "employee").toLowerCase()
    )
  ) {
    const role =
      String(user.role || "employee").toLowerCase();

    return (
      <Navigate
        to={`/${role}/dashboard`}
        replace
      />
    );
  }

  return <Outlet />;
}