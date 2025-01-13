import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AnalyticsDashboard } from "@/components/dashboard/AnalyticsDashboard";
import { Shield, Users, FileText, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const adminCards = [
    {
      title: "Company Management",
      description: "Manage company details and settings",
      icon: Shield,
      path: "/admin/company/edit",
      metric: "1",
    },
    {
      title: "User Management",
      description: "Manage user accounts and permissions",
      icon: Users,
      path: "/admin/users",
      metric: "15",
    },
    {
      title: "Policy Management",
      description: "Manage insurance policies and claims",
      icon: FileText,
      path: "/admin/policies",
      metric: "156",
    },
    {
      title: "System Settings",
      description: "Configure system-wide settings",
      icon: Settings,
      path: "/admin/settings",
      metric: "3",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6 p-6" data-admin="true">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>

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
                <div className="text-2xl font-bold mb-2">{card.metric}</div>
                <p className="text-xs text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Analytics Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <AnalyticsDashboard />
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;