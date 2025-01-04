import { Bell, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Navbar = () => {
  return (
    <div className="border-b bg-white">
      <div className="flex h-16 items-center px-4 gap-4">
        <div className="flex-1">
          <h2 className="text-lg font-semibold">MRU-A13820 - JULIUS KABERIA LINGUYA</h2>
        </div>
        <button className="relative">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
            3
          </span>
        </button>
        <button className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="h-4 w-4 text-primary" />
        </button>
      </div>
    </div>
  );
};