import { Bell, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
    navigate("/login");
  };

  return (
    <div className="border-b bg-white">
      <div className="flex h-16 items-center px-4 gap-4">
        <div className="flex-1">
          <h2 className="text-lg font-semibold">NexusGuard Dashboard</h2>
        </div>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
            3
          </span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-primary/10">
          <User className="h-4 w-4 text-primary" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Logout</span>
        </Button>
      </div>
    </div>
  );
};