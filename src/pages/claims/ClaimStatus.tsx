import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { ClaimStatusTable } from "@/components/claims/ClaimStatusTable";

export const ClaimStatus = () => {
  const [searchQuery, setSearchQuery] = useState("");

  console.log("Rendering ClaimStatus page", { searchQuery });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold tracking-tight">Claim Status</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Track Claims</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 max-w-sm mb-6">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search claims..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <ClaimStatusTable searchQuery={searchQuery} />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ClaimStatus;