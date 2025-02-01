import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getCurrentProfile } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const location = useLocation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const profile = await getCurrentProfile();
        setHasAccess(!!profile);
        if (!profile) {
          toast({
            title: "Access Denied",
            description: "Please sign in to access this page.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Error checking access:", error);
        setHasAccess(false);
      } finally {
        setLoading(false);
      }
    };

    checkAccess();
  }, [toast]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!hasAccess) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};