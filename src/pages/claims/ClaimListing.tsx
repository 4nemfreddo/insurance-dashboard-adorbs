import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ClaimsTable } from "@/components/claims/ClaimsTable";
import { useToast } from "@/hooks/use-toast";

export const ClaimListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  console.log("Claim listing rendering", { searchQuery });

  const handleNewClaim = () => {
    try {
      navigate("/claims/create");
    } catch (error) {
      console.error("Navigation error:", error);
      toast({
        title: "Error",
        description: "Could not navigate to create claim page. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold tracking-tight">Claims</h1>
          <Button onClick={handleNewClaim} className="gap-2">
            <Plus className="h-4 w-4" />
            New Claim
          </Button>
        </div>

        <div className="flex items-center space-x-2 max-w-sm">
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

        <ClaimsTable searchQuery={searchQuery} />
      </div>
    </DashboardLayout>
  );
};