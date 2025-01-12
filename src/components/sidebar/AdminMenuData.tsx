import {
  BarChart2,
  FileText,
  Users,
  Settings,
  Building,
  MessageSquare,
  Shield,
} from "lucide-react";

// Organize menu items by access level
export const adminMenuItems = [
  // Core Admin Functions
  {
    icon: Shield,
    label: "Dashboard",
    path: "/admin",
    accessLevel: "admin",
  },
  {
    icon: Building,
    label: "Company Settings",
    path: "/admin/company",
    accessLevel: "admin",
  },
  
  // Report Management
  {
    icon: BarChart2,
    label: "Reports",
    path: "/admin/reports",
    accessLevel: "reports",
    submenu: [
      {
        icon: FileText,
        label: "Financial Reports",
        path: "/admin/reports/financial",
      },
      {
        icon: FileText,
        label: "User Analytics",
        path: "/admin/reports/analytics",
      },
      {
        icon: FileText,
        label: "Support Metrics",
        path: "/admin/reports/support",
      },
    ],
  },

  // User Management
  {
    icon: Users,
    label: "User Management",
    path: "/admin/users",
    accessLevel: "users",
  },

  // Support & Knowledge Base
  {
    icon: MessageSquare,
    label: "Support Management",
    path: "/admin/support",
    accessLevel: "support",
  },

  // Settings
  {
    icon: Settings,
    label: "Admin Settings",
    path: "/admin/settings",
    accessLevel: "settings",
  },
];

export type AdminMenuItem = {
  icon: any;
  label: string;
  path: string;
  accessLevel: string;
  submenu?: AdminMenuItem[];
};