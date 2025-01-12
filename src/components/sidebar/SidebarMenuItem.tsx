import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon, ChevronDown, ChevronRight } from "lucide-react";
import {
  SidebarMenuItem as BaseSidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface MenuItemProps {
  icon: LucideIcon;
  label: string;
  path: string;
  isActive: boolean;
  submenu?: Array<{
    icon: LucideIcon;
    label: string;
    path: string;
  }>;
}

export const MenuItem = ({ 
  icon: Icon, 
  label, 
  path, 
  isActive,
  submenu 
}: MenuItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmenuToggle = (e: React.MouseEvent) => {
    if (submenu) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <>
      <BaseSidebarMenuItem>
        <SidebarMenuButton
          onClick={handleSubmenuToggle}
          className={cn(
            "w-full flex items-center gap-3 justify-between",
            isActive ? "bg-primary/10" : "",
            "hover:bg-primary/5 transition-colors"
          )}
        >
          <Link to={path} className="flex items-center gap-3 flex-1">
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </Link>
          {submenu && (
            <span className="text-gray-400">
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </span>
          )}
        </SidebarMenuButton>
      </BaseSidebarMenuItem>

      {submenu && isExpanded && (
        <div className="ml-4 space-y-1">
          {submenu.map((item) => (
            <MenuItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              path={item.path}
              isActive={location.pathname === item.path}
            />
          ))}
        </div>
      )}
    </>
  );
};