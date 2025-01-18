import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6">Welcome to Insurance Management System</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium mb-4">Underwriting</h2>
            <div className="space-y-3">
              <Button 
                className="w-full"
                onClick={() => navigate('/underwriting/new')}
              >
                New Policy
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/underwriting/renewal')}
              >
                Policy Renewal
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/underwriting/inquiry')}
              >
                Policy Inquiry
              </Button>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium mb-4">Claims</h2>
            <div className="space-y-3">
              <Button 
                className="w-full"
                onClick={() => navigate('/claims/create')}
              >
                Create Claim
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/claims/listing')}
              >
                Claims Listing
              </Button>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium mb-4">Reports</h2>
            <div className="space-y-3">
              <Button 
                className="w-full"
                onClick={() => navigate('/reports/gross-statement')}
              >
                Gross Statement
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/reports/commission-statement')}
              >
                Commission Statement
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;