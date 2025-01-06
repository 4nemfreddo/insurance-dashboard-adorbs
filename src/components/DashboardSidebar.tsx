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
  Menu,
  Plus,
  List,
  Clock,
  Search,
  Download,
  Phone,
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
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useState } from "react";
import { cn } from "@/lib/utils";

const underwritingSubmenu = [
  { icon: Plus, label: "New Policy", path: "/underwriting/new" },
  { icon: List, label: "Extension/Renewal", path: "/underwriting/renewal" },
  { icon: Search, label: "Policy Inquiry", path: "/underwriting/inquiry" },
  { icon: Download, label: "Policy Reports", path: "/underwriting/reports" },
  { icon: Phone, label: "M-Pesa Payment", path: "/underwriting/payment" },
];

const claimsSubmenu = [
  { icon: Plus, label: "Create Claim", path: "/claims/create" },
  { icon: List, label: "Claim Listing", path: "/claims/listing" },
  { icon: Clock, label: "Claim Status", path: "/claims/status" },
];

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  {
    icon: Shield,
    label: "Underwriting",
    path: "/underwriting",
    submenu: underwritingSubmenu,
  },
  { 
    icon: ClipboardList, 
    label: "Claims", 
    path: "/claims",
    submenu: claimsSubmenu,
  },
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
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleSubmenu = (path: string) => {
    setExpandedItem(expandedItem === path ? null : path);
  };

  return (
    <Sidebar>
      <SidebarContent>
        <div className="flex items-center justify-between p-4 mb-2">
          <div>
            <h1 className="text-xl font-bold text-primary">NexusGuard</h1>
            <p className="text-sm text-muted-foreground">Insurance Solutions</p>
          </div>
          <SidebarTrigger className="lg:hidden">
            <Menu className="h-6 w-6" />
          </SidebarTrigger>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <div key={item.label}>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => item.submenu && toggleSubmenu(item.path)}
                      className={cn(
                        "w-full",
                        location.pathname === item.path ? "bg-primary/10" : ""
                      )}
                    >
                      <Link to={item.path} className="flex items-center gap-3 w-full">
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {item.submenu && expandedItem === item.path && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <SidebarMenuItem key={subItem.label}>
                          <SidebarMenuButton
                            asChild
                            className={cn(
                              "pl-6",
                              location.pathname === subItem.path ? "bg-primary/10" : ""
                            )}
                          >
                            <Link to={subItem.path} className="flex items-center gap-3">
                              <subItem.icon className="h-4 w-4" />
                              <span className="text-sm">{subItem.label}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
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

