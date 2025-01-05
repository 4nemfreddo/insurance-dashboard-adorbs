import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { CustomerTable } from "@/components/customers/CustomerTable";
import { CustomerSearch } from "@/components/customers/CustomerSearch";
import { CustomerFilters } from "@/components/customers/CustomerFilters";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Customers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const { toast } = useToast();

  const handleAddCustomer = () => {
    toast({
      title: "Coming Soon",
      description: "Customer creation feature will be available soon.",
    });
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Customer Management</h1>
          <Button onClick={handleAddCustomer} className="w-full md:w-auto">
            <UserPlus className="mr-2 h-4 w-4" />
            Add Customer
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-[2fr,1fr]">
          <CustomerSearch value={searchQuery} onChange={setSearchQuery} />
          <CustomerFilters value={activeFilter} onChange={setActiveFilter} />
        </div>

        <CustomerTable searchQuery={searchQuery} activeFilter={activeFilter} />
      </div>
    </DashboardLayout>
  );
};

export default Customers;