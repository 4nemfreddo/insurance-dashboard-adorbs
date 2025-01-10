import { Menu, Bell, User, LogOut } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

export const Navbar = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { toggleSidebar } = useSidebar();

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    
    toast({
      title: "Logged out successfully",
      description: "See you next time!",
    });
    
    navigate("/login");
  };

  // Mock notifications - in a real app, these would come from your backend
  const notifications = [
    {
      id: 1,
      title: "New Policy Request",
      description: "A new policy request needs your review",
      time: "5m ago"
    },
    {
      id: 2,
      title: "Claim Update",
      description: "Claim #1234 has been processed",
      time: "1h ago"
    }
  ];

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center gap-4 px-4">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleSidebar}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
        <div className="flex flex-1 items-center justify-between">
          <nav className="flex items-center space-x-4">
            {/* Add navigation items here if needed */}
          </nav>
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                    2
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0" align="end">
                <div className="p-4">
                  <h4 className="font-medium">Notifications</h4>
                </div>
                <Separator />
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="p-4 hover:bg-muted/50 cursor-pointer"
                    >
                      <h5 className="font-medium">{notification.title}</h5>
                      <p className="text-sm text-muted-foreground">
                        {notification.description}
                      </p>
                      <span className="text-xs text-muted-foreground mt-1">
                        {notification.time}
                      </span>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-60" align="end">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">
                      {localStorage.getItem('user') 
                        ? JSON.parse(localStorage.getItem('user')!).name 
                        : 'User'}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {localStorage.getItem('user') 
                        ? JSON.parse(localStorage.getItem('user')!).email 
                        : 'user@example.com'}
                    </p>
                  </div>
                  <Separator />
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
