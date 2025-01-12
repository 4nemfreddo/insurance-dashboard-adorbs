import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Temporary admin credentials
const ADMIN_CREDENTIALS = {
  email: "admin@nexusguard.com",
  password: "admin123"
};

export const AdminAuthGuard = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "Please login as admin to access this page",
      });
      navigate('/login');
      return;
    }

    const userData = JSON.parse(user);
    if (userData.email !== ADMIN_CREDENTIALS.email) {
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "You don't have admin privileges",
      });
      navigate('/');
    }
  }, [navigate, toast]);

  return <>{children}</>;
};