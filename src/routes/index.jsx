import React from "react";
import { Navigate } from "react-router-dom";
import { useData } from "../context";
import { MainLayout } from "../layouts";

export default function ProtectedRoute({ redirectTo }) {
  const { user } = useData();

  return user ? <MainLayout /> : <Navigate to={redirectTo} />;
}
