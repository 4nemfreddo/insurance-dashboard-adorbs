import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import {
  SidebarMenuItem as BaseSidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface MenuItemProps {
  icon: LucideIcon;
  label: string;
  path: string;
  isActive: boolean;
}

export const MenuItem = ({ 
  icon: Icon, 
  label, 
  path, 
  isActive
}: MenuItemProps) => {
  return (
    <BaseSidebarMenuItem>
      <SidebarMenuButton
        className={cn(
          "w-full flex items-center gap-3",
          isActive ? "bg-primary/10" : ""
        )}
      >
        <Link to={path} className="flex items-center gap-3 flex-1">
          <Icon className="h-4 w-4" />
          <span>{label}</span>
        </Link>
      </SidebarMenuButton>
    </BaseSidebarMenuItem>
  );
};