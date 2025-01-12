import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { MenuItem } from "./sidebar/SidebarMenuItem";
import { adminMenuItems } from "./sidebar/AdminMenuData";
import { SidebarHeader } from "./sidebar/SidebarHeader";

export const AdminSidebar = () => {
  const location = useLocation();
  console.log("Current admin location:", location.pathname);

  return (
    <Sidebar className="bg-[#1A1F2C] border-r border-gray-800">
      <SidebarContent>
        <SidebarHeader />
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">Admin Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminMenuItems.map((item) => (
                <MenuItem
                  key={item.path}
                  icon={item.icon}
                  label={item.label}
                  path={item.path}
                  isActive={location.pathname === item.path}
                  submenu={item.submenu}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};