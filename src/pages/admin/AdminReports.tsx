import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const reports = [
  {
    id: 1,
    name: "Financial Reports",
    description: "Detailed financial analysis and metrics",
    accessLevels: ["Management", "Team Leaders", "Staff"],
  },
  {
    id: 2,
    name: "User Analytics",
    description: "User behavior and engagement metrics",
    accessLevels: ["Management", "Team Leaders", "Staff"],
  },
  {
    id: 3,
    name: "Support Metrics",
    description: "Customer support performance indicators",
    accessLevels: ["Management", "Team Leaders", "Staff"],
  },
];

const AdminReports = () => {
  const { toast } = useToast();

  const handleSaveAccess = () => {
    toast({
      title: "Access updated",
      description: "Report access permissions have been updated.",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Manage Report Access
          </h1>
          <p className="text-gray-500">
            Control who can view different types of reports
          </p>
        </div>

        <div className="space-y-4">
          {reports.map((report) => (
            <Card key={report.id}>
              <CardHeader>
                <CardTitle>{report.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {report.description}
                  </p>
                  
                  <div className="space-y-4">
                    {report.accessLevels.map((level) => (
                      <div key={level} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{level}</p>
                          <p className="text-sm text-muted-foreground">
                            Can view {report.name.toLowerCase()}
                          </p>
                        </div>
                        <Switch />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button onClick={handleSaveAccess} className="w-full">
          Save Access Settings
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default AdminReports;