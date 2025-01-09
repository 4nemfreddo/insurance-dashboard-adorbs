import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Printer } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const reports = [
  {
    id: 1,
    title: "Monthly Policy Summary",
    description: "Summary of all policies issued in the current month",
    type: "PDF",
    lastUpdated: "2024-02-15",
  },
  {
    id: 2,
    title: "Renewal Status Report",
    description: "Status report of policy renewals and extensions",
    type: "PDF",
    lastUpdated: "2024-02-14",
  },
  {
    id: 3,
    title: "Premium Collection Report",
    description: "Overview of premium collections and pending payments",
    type: "PDF",
    lastUpdated: "2024-02-13",
  },
];

export const PolicyReports = () => {
  const { toast } = useToast();

  const handleDownload = (reportId: number) => {
    console.log("Downloading report:", reportId);
    toast({
      title: "Download Started",
      description: "Your report download will begin shortly.",
    });
  };

  const handlePrint = (reportId: number) => {
    console.log("Printing report:", reportId);
    toast({
      title: "Preparing Print",
      description: "Setting up the document for printing...",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Policy Reports
          </h1>
          <p className="text-gray-500">
            Access and download policy-related reports
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reports.map((report) => (
            <Card key={report.id} className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="font-medium">{report.title}</h3>
                  <p className="text-sm text-gray-500">{report.description}</p>
                </div>
                <FileText className="h-5 w-5 text-gray-400" />
              </div>
              
              <div className="space-y-2">
                <div className="text-sm text-gray-500">
                  Last updated: {report.lastUpdated}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => handleDownload(report.id)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => handlePrint(report.id)}
                  >
                    <Printer className="mr-2 h-4 w-4" />
                    Print
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};