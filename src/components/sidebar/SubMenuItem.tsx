import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";

interface SubMenuItemProps {
  icon: LucideIcon;
  label: string;
  path: string;
  isActive: boolean;
}

export const SubMenuItem = ({ icon: Icon, label, path, isActive }: SubMenuItemProps) => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        className={cn(
          "pl-6",
          isActive ? "bg-primary/10" : ""
        )}
      >
        <Link to={path} className="flex items-center gap-3">
          <Icon className="h-4 w-4" />
          <span className="text-sm">{label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};