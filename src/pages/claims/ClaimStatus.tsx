import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { ClaimStatusTable } from "@/components/claims/ClaimStatusTable";
import { ClaimSearch } from "@/components/claims/ClaimSearch";
import { ClaimHeader } from "@/components/claims/ClaimHeader";

export const ClaimStatus = () => {
  const [searchQuery, setSearchQuery] = useState("");

  console.log("Rendering ClaimStatus page", { searchQuery });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <ClaimHeader title="Claim Status" />

        <Card>
          <CardHeader>
            <CardTitle>Track Claims</CardTitle>
          </CardHeader>
          <CardContent>
            <ClaimSearch 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
            />
            <ClaimStatusTable searchQuery={searchQuery} />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ClaimStatus;