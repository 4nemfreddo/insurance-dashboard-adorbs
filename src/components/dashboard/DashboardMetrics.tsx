import { MetricCard } from "@/components/MetricCard";
import { DollarSign, ShieldCheck, AlertTriangle, TrendingUp } from "lucide-react";

export const DashboardMetrics = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Total Premium"
        value="Ksh. 177,918.00"
        icon={DollarSign}
        trend={{ value: 12.5, isPositive: true }}
        className="bg-blue-50"
      />
      <MetricCard
        title="Active Policies"
        value="245"
        icon={ShieldCheck}
        trend={{ value: 8.2, isPositive: true }}
        className="bg-green-50"
      />
      <MetricCard
        title="Claims Ratio"
        value="32.5%"
        icon={AlertTriangle}
        trend={{ value: 2.1, isPositive: false }}
        className="bg-orange-50"
      />
      <MetricCard
        title="Customer Growth"
        value="+15%"
        icon={TrendingUp}
        trend={{ value: 15, isPositive: true }}
        className="bg-purple-50"
      />
    </div>
  );
};