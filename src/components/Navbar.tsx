import { Bell, User, LogOut, Settings, HelpCircle } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { signOut, getCurrentProfile } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { Database } from "@/lib/database.types";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

type Profile = Database['public']['Tables']['profiles']['Row'];

export const Navbar = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const userProfile = await getCurrentProfile();
        setProfile(userProfile);
      } catch (error) {
        console.error('Error loading profile:', error);
      }
    };

    loadProfile();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut();
      setProfile(null);
      navigate("/login");
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const handleTabChange = (index: number | null) => {
    if (index === null) return;
    
    // Handle tab actions based on index
    switch (index) {
      case 0: // Notifications
        // Handle notifications
        break;
      case 2: // Settings
        navigate("/settings");
        break;
      case 3: // Support
        navigate("/support");
        break;
      case 4: // Profile
        // Handle profile actions
        break;
    }
  };

  const tabs = [
    { title: "Notifications", icon: Bell },
    { type: "separator" as const },
    { title: "Settings", icon: Settings },
    { title: "Support", icon: HelpCircle },
    { title: "Profile", icon: User },
  ];

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center gap-4 px-4">
        <SidebarTrigger className="lg:hidden">
          <Menu className="h-6 w-6" />
        </SidebarTrigger>
        <div className="flex flex-1 items-center justify-between">
          <nav className="flex items-center space-x-4">
            {/* Add navigation items here if needed */}
          </nav>
          <div className="flex items-center gap-4">
            <ExpandableTabs 
              tabs={tabs} 
              onChange={handleTabChange}
              className="border-primary/20"
              activeColor="text-primary"
            />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
