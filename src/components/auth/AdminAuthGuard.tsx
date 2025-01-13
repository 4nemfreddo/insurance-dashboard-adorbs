import { Navigate, useLocation } from "react-router-dom";

// Mock admin check - replace with actual authentication logic
const isAdmin = () => {
  // For demo purposes, checking if user has admin role in localStorage
  const userRole = localStorage.getItem("userRole");
  return userRole === "admin";
};

interface AdminAuthGuardProps {
  children: React.ReactNode;
}

export const AdminAuthGuard = ({ children }: AdminAuthGuardProps) => {
  const location = useLocation();

  if (!isAdmin()) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};