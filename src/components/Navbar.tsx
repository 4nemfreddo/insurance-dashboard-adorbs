import { Menu } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
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
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};