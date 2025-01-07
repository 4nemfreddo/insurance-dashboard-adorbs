import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  SidebarMenuItem as BaseSidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";

interface MenuItemProps {
  icon: LucideIcon;
  label: string;
  path: string;
  isActive: boolean;
  onClick?: () => void;
}

export const MenuItem = ({ icon: Icon, label, path, isActive, onClick }: MenuItemProps) => {
  return (
    <BaseSidebarMenuItem>
      <SidebarMenuButton
        onClick={onClick}
        className={cn(
          "w-full",
          isActive ? "bg-primary/10" : ""
        )}
      >
        <Link to={path} className="flex items-center gap-3 w-full">
          <Icon className="h-4 w-4" />
          <span>{label}</span>
        </Link>
      </SidebarMenuButton>
    </BaseSidebarMenuItem>
  );
};