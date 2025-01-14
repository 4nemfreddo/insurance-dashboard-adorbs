import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAdmin } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

interface AdminAuthGuardProps {
  children: React.ReactNode;
}

export const AdminAuthGuard = ({ children }: AdminAuthGuardProps) => {
  const location = useLocation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const checkAdminAccess = async () => {
      try {
        const adminAccess = await isAdmin();
        setHasAccess(adminAccess);
        if (!adminAccess) {
          toast({
            title: "Access Denied",
            description: "You need admin privileges to access this page.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Error checking admin access:", error);
        setHasAccess(false);
      } finally {
        setLoading(false);
      }
    };

    checkAdminAccess();
  }, [toast]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!hasAccess) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};