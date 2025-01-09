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
import { useClaims } from "@/hooks/useClaims";

interface ClaimsTableProps {
  searchQuery: string;
}

export const ClaimsTable = ({ searchQuery }: ClaimsTableProps) => {
  const navigate = useNavigate();
  const { claims, isLoading, error } = useClaims(searchQuery);

  console.log("Claims table rendering", { claims, isLoading, error });

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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-48 text-red-500">
        Error loading claims. Please try again later.
      </div>
    );
  }

  if (!claims?.length) {
    return (
      <div className="flex items-center justify-center h-48 text-gray-500">
        No claims found.
      </div>
    );
  }

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
          {claims.map((claim) => (
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