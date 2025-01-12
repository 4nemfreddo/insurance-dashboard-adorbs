import {
  Users,
  Settings,
  BookOpen,
  Building,
  MessageSquare,
  BarChart2,
  Shield,
} from "lucide-react";

export const adminMenuItems = [
  { icon: Shield, label: "Admin Dashboard", path: "/admin" },
  { icon: Building, label: "Edit Company", path: "/admin/company" },
  { icon: BookOpen, label: "Manage Knowledge Base", path: "/admin/knowledge" },
  { icon: MessageSquare, label: "Manage Support", path: "/admin/support" },
  { icon: BarChart2, label: "Report Access", path: "/admin/reports" },
  { icon: Users, label: "User Management", path: "/admin/users" },
  { icon: Settings, label: "Admin Settings", path: "/admin/settings" },
];