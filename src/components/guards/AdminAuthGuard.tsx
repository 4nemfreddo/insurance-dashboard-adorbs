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
    console.log("Checking admin authentication...");
    const user = localStorage.getItem('user');
    
    if (!user) {
      console.log("No user found in localStorage");
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "Please login as admin to access this page",
      });
      navigate('/login');
      return;
    }

    try {
      const userData = JSON.parse(user);
      console.log("User data:", userData);
      
      if (userData.email !== ADMIN_CREDENTIALS.email) {
        console.log("User is not an admin");
        toast({
          variant: "destructive",
          title: "Access Denied",
          description: "You don't have admin privileges",
        });
        navigate('/');
        return;
      }
      
      console.log("Admin access granted");
      document.documentElement.classList.add('admin-theme');
    } catch (error) {
      console.error("Error parsing user data:", error);
      navigate('/login');
    }

    // Cleanup function to remove admin styling when component unmounts
    return () => {
      document.documentElement.classList.remove('admin-theme');
    };
  }, [navigate, toast]);

  return <>{children}</>;
};