import {
  Home,
  FileText,
  Users,
  BarChart2,
  ClipboardList,
  Shield,
  CreditCard,
  Settings,
  HelpCircle,
  BookOpen,
  Building,
} from "lucide-react";
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
  { icon: Shield, label: "Underwriting", path: "/underwriting" },
  { icon: ClipboardList, label: "Claims", path: "/claims" },
  { icon: Users, label: "Customers", path: "/customers" },
  { icon: FileText, label: "Policies", path: "/policies" },
  { icon: CreditCard, label: "Payments", path: "/payments" },
  { icon: BarChart2, label: "Reports", path: "/reports" },
];

const secondaryItems = [
  { icon: Building, label: "Company", path: "/company" },
  { icon: BookOpen, label: "Knowledge Base", path: "/knowledge" },
  { icon: HelpCircle, label: "Support", path: "/support" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4 mb-4">
          <h1 className="text-xl font-bold text-primary">NexusGuard</h1>
          <p className="text-sm text-muted-foreground">Insurance Solutions</p>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    className={location.pathname === item.path ? "bg-primary/10" : ""}
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
        <SidebarGroup>
          <SidebarGroupLabel>Company</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    className={location.pathname === item.path ? "bg-primary/10" : ""}
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