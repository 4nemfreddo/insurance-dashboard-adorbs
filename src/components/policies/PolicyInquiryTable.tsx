import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Eye, FileText, History } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface PolicyInquiryTableProps {
  searchQuery: string;
}

const mockPolicies = [
  {
    id: 1,
    policyNumber: "POL-2024-001",
    holderName: "John Doe",
    type: "Auto Insurance",
    status: "active",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    premium: "KES 25,000",
  },
  {
    id: 2,
    policyNumber: "POL-2024-002",
    holderName: "Jane Smith",
    type: "Health Insurance",
    status: "pending",
    startDate: "2024-02-15",
    endDate: "2025-02-14",
    premium: "KES 50,000",
  },
];

export const PolicyInquiryTable = ({ searchQuery }: PolicyInquiryTableProps) => {
  const { toast } = useToast();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "expired":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleViewDetails = (policyId: number) => {
    console.log("Viewing details for policy:", policyId);
    toast({
      title: "Viewing Policy Details",
      description: "Loading policy information...",
    });
  };

  const filteredPolicies = mockPolicies.filter((policy) =>
    Object.values(policy).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Policy Number</TableHead>
            <TableHead>Holder Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Premium</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPolicies.map((policy) => (
            <TableRow key={policy.id}>
              <TableCell className="font-medium">{policy.policyNumber}</TableCell>
              <TableCell>{policy.holderName}</TableCell>
              <TableCell>{policy.type}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(policy.status)}>
                  {policy.status.charAt(0).toUpperCase() + policy.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>{policy.startDate}</TableCell>
              <TableCell>{policy.endDate}</TableCell>
              <TableCell>{policy.premium}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleViewDetails(policy.id)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>View Details</TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>View Policy</TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <History className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>View History</TooltipContent>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};