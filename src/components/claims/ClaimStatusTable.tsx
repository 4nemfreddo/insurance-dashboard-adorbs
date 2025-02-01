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
import { Eye, FileText, AlertCircle, Check, X, Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useClaims } from "@/hooks/useClaims";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ClaimStatusTableProps {
  searchQuery: string;
}

export const ClaimStatusTable = ({ searchQuery }: ClaimStatusTableProps) => {
  const navigate = useNavigate();
  const { claims, isLoading, error } = useClaims(searchQuery);

  console.log("Claims status table rendering", { claims, isLoading, error });

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "approved":
        return <Check className="h-4 w-4 text-green-600" />;
      case "pending":
        return <Loader className="h-4 w-4 text-yellow-600 animate-spin" />;
      case "rejected":
        return <X className="h-4 w-4 text-red-600" />;
      case "in_review":
        return <AlertCircle className="h-4 w-4 text-blue-600" />;
      default:
        return <FileText className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "in_review":
        return "bg-blue-100 text-blue-800";
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
            <TableHead>Last Updated</TableHead>
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
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge className={getStatusColor(claim.status)}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(claim.status)}
                          {claim.status.charAt(0).toUpperCase() + claim.status.slice(1)}
                        </span>
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Last updated: {new Date().toLocaleDateString()}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
              <TableCell>{new Date().toLocaleDateString()}</TableCell>
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