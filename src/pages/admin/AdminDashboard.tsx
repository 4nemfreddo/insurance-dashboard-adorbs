import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Shield, Users, FileText, Settings } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const adminCards = [
    {
      title: "Company Management",
      description: "Manage company details and settings",
      icon: Shield,
      path: "/admin/company/edit",
    },
    {
      title: "User Management",
      description: "Manage user accounts and permissions",
      icon: Users,
      path: "/admin/users",
    },
    {
      title: "Policy Management",
      description: "Manage insurance policies and claims",
      icon: FileText,
      path: "/admin/policies",
    },
    {
      title: "System Settings",
      description: "Configure system-wide settings",
      icon: Settings,
      path: "/admin/settings",
    },
  ];

  return (
    <div className="container mx-auto p-6" data-admin="true">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {adminCards.map((card) => (
          <Card
            key={card.title}
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(card.path)}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <card.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;