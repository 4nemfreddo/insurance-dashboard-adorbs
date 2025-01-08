import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ClaimsTableProps {
  searchQuery: string;
}

// Mock data - In a real app, this would come from an API
const mockClaims = [
  {
    id: "CLM-001",
    policyNumber: "POL-2024-001",
    claimType: "Auto Accident",
    dateSubmitted: "2024-03-15",
    claimAmount: "$5,000",
    status: "pending",
  },
  {
    id: "CLM-002",
    policyNumber: "POL-2024-003",
    claimType: "Property Damage",
    dateSubmitted: "2024-03-14",
    claimAmount: "$12,500",
    status: "approved",
  },
  {
    id: "CLM-003",
    policyNumber: "POL-2024-002",
    claimType: "Medical",
    dateSubmitted: "2024-03-13",
    claimAmount: "$8,750",
    status: "rejected",
  },
];

export const ClaimsTable = ({ searchQuery }: ClaimsTableProps) => {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredClaims = mockClaims.filter(
    (claim) =>
      claim.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      claim.policyNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      claim.claimType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Claim ID</TableHead>
            <TableHead>Policy Number</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Date Submitted</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredClaims.map((claim) => (
            <TableRow key={claim.id}>
              <TableCell className="font-medium">{claim.id}</TableCell>
              <TableCell>{claim.policyNumber}</TableCell>
              <TableCell>{claim.claimType}</TableCell>
              <TableCell>{claim.dateSubmitted}</TableCell>
              <TableCell>{claim.claimAmount}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(claim.status)}>
                  {claim.status.charAt(0).toUpperCase() + claim.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigate(`/claims/${claim.id}`)}
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};