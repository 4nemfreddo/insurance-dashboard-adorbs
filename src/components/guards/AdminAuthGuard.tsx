import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { adminMenuItems } from "../sidebar/AdminMenuData";

// Temporary admin credentials with roles
const ADMIN_CREDENTIALS = {
  email: "admin@nexusguard.com",
  password: "admin123",
  roles: ["admin", "reports", "users", "support", "settings"]
};

export const AdminAuthGuard = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
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

      // Check route-specific access
      const currentPath = location.pathname;
      const requiredAccess = adminMenuItems.find(item => 
        currentPath.startsWith(item.path)
      )?.accessLevel;

      if (requiredAccess && !ADMIN_CREDENTIALS.roles.includes(requiredAccess)) {
        console.log(`User lacks ${requiredAccess} role`);
        toast({
          variant: "destructive",
          title: "Access Denied",
          description: "You don't have permission to access this section",
        });
        navigate('/admin');
        return;
      }
      
      console.log("Admin access granted");
      document.documentElement.classList.add('admin-theme');
    } catch (error) {
      console.error("Error parsing user data:", error);
      navigate('/login');
    }

    return () => {
      document.documentElement.classList.remove('admin-theme');
    };
  }, [navigate, toast, location]);

  return <>{children}</>;
};