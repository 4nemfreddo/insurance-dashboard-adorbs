import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardMetrics } from "@/components/dashboard/DashboardMetrics";
import { DashboardCharts } from "@/components/dashboard/DashboardCharts";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Welcome to NexusGuard Insurance Portal
          </h1>
          <p className="text-gray-500">
            Monitor your insurance operations and performance metrics
          </p>
        </div>
        <DashboardMetrics />
        <DashboardCharts />
      </div>
    </DashboardLayout>
  );
};

export default Index;