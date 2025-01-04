import { Home, FileText, Users, BarChart2, ClipboardList } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: FileText, label: "Policies", path: "/policies" },
  { icon: ClipboardList, label: "Claims", path: "/claims" },
  { icon: Users, label: "Customers", path: "/customers" },
  { icon: BarChart2, label: "Reports", path: "/reports" },
];

export const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4 mb-4">
          <h1 className="text-xl font-bold text-primary">InsureTech</h1>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    className={location.pathname === item.path ? "bg-secondary/20" : ""}
                  >
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};