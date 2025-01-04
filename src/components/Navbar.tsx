import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Navbar = () => {
  return (
    <div className="border-b bg-white">
      <div className="flex h-16 items-center px-4 gap-4">
        <div className="flex-1">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-8" />
          </div>
        </div>
        <button className="relative">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
            3
          </span>
        </button>
      </div>
    </div>
  );
};