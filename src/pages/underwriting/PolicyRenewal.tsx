import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { PolicySearch } from "@/components/policies/PolicySearch";
import { PolicyTable } from "@/components/policies/PolicyTable";

export const PolicyRenewal = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Policy Extension & Renewal
          </h1>
          <p className="text-gray-500">
            Manage policy extensions and renewals
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <PolicySearch value={searchQuery} onChange={setSearchQuery} />
          <PolicyTable searchQuery={searchQuery} />
        </div>
      </div>
    </DashboardLayout>
  );
};