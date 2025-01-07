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
  Plus,
  List,
  Clock,
  Search,
  Download,
  Phone,
} from "lucide-react";

export const underwritingSubmenu = [
  { icon: Plus, label: "New Policy", path: "/underwriting/new" },
  { icon: List, label: "Extension/Renewal", path: "/underwriting/renewal" },
  { icon: Search, label: "Policy Inquiry", path: "/underwriting/inquiry" },
  { icon: Download, label: "Policy Reports", path: "/underwriting/reports" },
  { icon: Phone, label: "M-Pesa Payment", path: "/underwriting/payment" },
];

export const claimsSubmenu = [
  { icon: Plus, label: "Create Claim", path: "/claims/create" },
  { icon: List, label: "Claim Listing", path: "/claims/listing" },
  { icon: Clock, label: "Claim Status", path: "/claims/status" },
];

export const menuItems = [
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

export const secondaryItems = [
  { icon: Building, label: "Company", path: "/company" },
  { icon: BookOpen, label: "Knowledge Base", path: "/knowledge" },
  { icon: HelpCircle, label: "Support", path: "/support" },
  { icon: Settings, label: "Settings", path: "/settings" },
];