import { DashboardLayout } from "@/components/DashboardLayout";
import { PolicySearch } from "@/components/policies/PolicySearch";
import { PolicyInquiryTable } from "@/components/policies/PolicyInquiryTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PolicyInquiry = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Policy Inquiry
            </h1>
            <p className="text-gray-500">
              Search and manage policy information
            </p>
          </div>
          <Button onClick={() => navigate("/underwriting/new")}>
            <Plus className="mr-2 h-4 w-4" />
            New Policy
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <PolicySearch value={searchQuery} onChange={setSearchQuery} />
          <PolicyInquiryTable searchQuery={searchQuery} />
        </div>
      </div>
    </DashboardLayout>
  );
};