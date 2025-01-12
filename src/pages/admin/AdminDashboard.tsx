import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";
import { Users, BookOpen, MessageSquare, BarChart2 } from "lucide-react";

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-500">
            Manage content and user permissions across the platform
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Users"
            value="1,234"
            icon={Users}
            trend={{ value: 12, isPositive: true }}
          />
          <MetricCard
            title="Knowledge Base Articles"
            value="156"
            icon={BookOpen}
            trend={{ value: 8, isPositive: true }}
          />
          <MetricCard
            title="Support Tickets"
            value="45"
            icon={MessageSquare}
            trend={{ value: 5, isPositive: false }}
          />
          <MetricCard
            title="Active Reports"
            value="28"
            icon={BarChart2}
            trend={{ value: 15, isPositive: true }}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Content Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Company Page Updated",
                    timestamp: "2 hours ago",
                    editor: "John Doe"
                  },
                  {
                    title: "New Knowledge Base Article",
                    timestamp: "5 hours ago",
                    editor: "Jane Smith"
                  },
                  {
                    title: "Support Page Modified",
                    timestamp: "1 day ago",
                    editor: "Mike Johnson"
                  }
                ].map((update, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{update.title}</p>
                      <p className="text-sm text-muted-foreground">
                        by {update.editor}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {update.timestamp}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Report Access Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    report: "Financial Reports",
                    access: "Management Only",
                    users: 12
                  },
                  {
                    report: "User Analytics",
                    access: "Team Leaders",
                    users: 25
                  },
                  {
                    report: "Support Metrics",
                    access: "All Staff",
                    users: 45
                  }
                ].map((report, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{report.report}</p>
                      <p className="text-sm text-muted-foreground">
                        {report.access}
                      </p>
                    </div>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {report.users} users
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;