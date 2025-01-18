import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { PolicyTable } from "@/components/policies/PolicyTable";
import { PolicySearch } from "@/components/policies/PolicySearch";
import { Button } from "@/components/ui/button";
import { FilePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Policies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Policy Management</h1>
          <Button onClick={() => navigate("/underwriting/new")} className="w-full md:w-auto">
            <FilePlus className="mr-2 h-4 w-4" />
            New Policy
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <PolicySearch value={searchQuery} onChange={setSearchQuery} />
          <PolicyTable searchQuery={searchQuery} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Policies;