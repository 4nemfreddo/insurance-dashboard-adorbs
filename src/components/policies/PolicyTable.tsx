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
import { Calendar, FileText, RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface PolicyTableProps {
  searchQuery: string;
}

// Mock data - In a real app, this would come from an API
const mockPolicies = [
  {
    id: 1,
    policyNumber: "POL-2024-001",
    holderName: "John Doe",
    type: "Auto Insurance",
    status: "active",
    expiryDate: "2024-12-31",
    premium: "KES 25,000",
  },
  {
    id: 2,
    policyNumber: "POL-2024-002",
    holderName: "Jane Smith",
    type: "Health Insurance",
    status: "expiring",
    expiryDate: "2024-03-15",
    premium: "KES 50,000",
  },
  {
    id: 3,
    policyNumber: "POL-2024-003",
    holderName: "Alice Johnson",
    type: "Property Insurance",
    status: "expired",
    expiryDate: "2024-01-31",
    premium: "KES 100,000",
  },
];

export const PolicyTable = ({ searchQuery }: PolicyTableProps) => {
  const { toast } = useToast();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "expiring":
        return "bg-yellow-100 text-yellow-800";
      case "expired":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleRenewal = (policyId: number) => {
    console.log("Initiating renewal for policy:", policyId);
    toast({
      title: "Renewal Initiated",
      description: "Policy renewal process has started.",
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
            <TableHead>Expiry Date</TableHead>
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
              <TableCell>{policy.expiryDate}</TableCell>
              <TableCell>{policy.premium}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleRenewal(policy.id)}
                      >
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Renew Policy</TooltipContent>
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
                        <Calendar className="h-4 w-4" />
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