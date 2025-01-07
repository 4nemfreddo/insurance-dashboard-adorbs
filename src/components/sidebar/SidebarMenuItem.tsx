import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, LucideIcon } from "lucide-react";
import {
  SidebarMenuItem as BaseSidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface MenuItemProps {
  icon: LucideIcon;
  label: string;
  path: string;
  isActive: boolean;
  onClick?: () => void;
  hasSubmenu?: boolean;
  isExpanded?: boolean;
}

export const MenuItem = ({ 
  icon: Icon, 
  label, 
  path, 
  isActive, 
  onClick,
  hasSubmenu,
  isExpanded 
}: MenuItemProps) => {
  return (
    <BaseSidebarMenuItem>
      <SidebarMenuButton
        onClick={onClick}
        className={cn(
          "w-full flex items-center justify-between",
          isActive ? "bg-primary/10" : ""
        )}
      >
        <Link to={path} className="flex items-center gap-3 flex-1">
          <Icon className="h-4 w-4" />
          <span>{label}</span>
        </Link>
        {hasSubmenu && (
          <div className="ml-2">
            {isExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </div>
        )}
      </SidebarMenuButton>
    </BaseSidebarMenuItem>
  );
};