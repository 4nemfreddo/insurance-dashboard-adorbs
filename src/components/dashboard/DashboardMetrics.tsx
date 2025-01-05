import { ArrowUpRight, Users, FileText, RefreshCw, Clock, DollarSign } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const DashboardMetrics = () => {
  return (
    <TooltipProvider>
      <div className="grid gap-2 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="transition-transform hover:scale-105">
              <MetricCard
                title="Pending Applications"
                value="24"
                icon={Clock}
                trend={{ value: 12, isPositive: true }}
                className="hover:shadow-lg transition-shadow"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Number of insurance applications awaiting review</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="transition-transform hover:scale-105">
              <MetricCard
                title="Active Policies"
                value="1,234"
                icon={FileText}
                trend={{ value: 8, isPositive: true }}
                className="hover:shadow-lg transition-shadow"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Total number of active insurance policies</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="transition-transform hover:scale-105">
              <MetricCard
                title="Upcoming Renewals"
                value="45"
                icon={RefreshCw}
                trend={{ value: 5, isPositive: false }}
                className="hover:shadow-lg transition-shadow"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Policies due for renewal in the next 30 days</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="transition-transform hover:scale-105">
              <MetricCard
                title="Total Clients"
                value="892"
                icon={Users}
                trend={{ value: 15, isPositive: true }}
                className="hover:shadow-lg transition-shadow"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Total number of active insurance clients</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="transition-transform hover:scale-105">
              <MetricCard
                title="Total Commission"
                value="KES 2.4M"
                icon={DollarSign}
                trend={{ value: 23, isPositive: true }}
                className="hover:shadow-lg transition-shadow"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Total commission earned this month</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="transition-transform hover:scale-105">
              <MetricCard
                title="Monthly Growth"
                value="+18%"
                icon={ArrowUpRight}
                trend={{ value: 18, isPositive: true }}
                className="hover:shadow-lg transition-shadow"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Month-over-month business growth rate</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};