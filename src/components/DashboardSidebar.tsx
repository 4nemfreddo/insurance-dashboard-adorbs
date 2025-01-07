import { useState } from "react";
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
import { SubMenuItem } from "./sidebar/SubMenuItem";
import { SidebarHeader } from "./sidebar/SidebarHeader";
import { menuItems, secondaryItems } from "./sidebar/MenuData";

export const DashboardSidebar = () => {
  const location = useLocation();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleSubmenu = (path: string) => {
    setExpandedItem(expandedItem === path ? null : path);
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarHeader />
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <div key={item.label}>
                  <MenuItem
                    icon={item.icon}
                    label={item.label}
                    path={item.path}
                    isActive={location.pathname === item.path}
                    onClick={() => item.submenu && toggleSubmenu(item.path)}
                    hasSubmenu={!!item.submenu}
                    isExpanded={expandedItem === item.path}
                  />
                  {item.submenu && expandedItem === item.path && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <SubMenuItem
                          key={subItem.label}
                          icon={subItem.icon}
                          label={subItem.label}
                          path={subItem.path}
                          isActive={location.pathname === subItem.path}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Company</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryItems.map((item) => (
                <MenuItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  path={item.path}
                  isActive={location.pathname === item.path}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};