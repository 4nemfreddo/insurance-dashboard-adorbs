import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data - In a real app, this would come from an API
const mockClaims = [
  {
    id: 1,
    claimNumber: "CLM-2024-001",
    insuranceClaimNumber: "INS-2024-001",
    riskId: "RISK-001",
    claimDate: "2024-02-20",
    lossDescription: "Vehicle accident - Front collision",
    bookedBy: "John Doe",
    bookedDate: "2024-02-21",
  },
  {
    id: 2,
    claimNumber: "CLM-2024-002",
    insuranceClaimNumber: "INS-2024-002",
    riskId: "RISK-002",
    claimDate: "2024-02-19",
    lossDescription: "Property damage - Storm",
    bookedBy: "Jane Smith",
    bookedDate: "2024-02-19",
  },
];

export const ClaimListing = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClaims = mockClaims.filter((claim) =>
    claim.claimNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 w-full max-w-sm">
          <Input
            placeholder="Claim No"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-[240px]"
          />
        </div>
        <Button
          onClick={() => navigate("/claims/create")}
          className="bg-green-700 hover:bg-green-800"
        >
          <Plus className="mr-2 h-4 w-4" />
          New Claim
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Index</TableHead>
              <TableHead>Claim Number</TableHead>
              <TableHead>Insurance Claim Number</TableHead>
              <TableHead>Risk ID</TableHead>
              <TableHead>Claim Date</TableHead>
              <TableHead>Loss Desc</TableHead>
              <TableHead>Booked By</TableHead>
              <TableHead>Booked Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredClaims.map((claim, index) => (
              <TableRow key={claim.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">{claim.claimNumber}</TableCell>
                <TableCell>{claim.insuranceClaimNumber}</TableCell>
                <TableCell>{claim.riskId}</TableCell>
                <TableCell>{claim.claimDate}</TableCell>
                <TableCell>{claim.lossDescription}</TableCell>
                <TableCell>{claim.bookedBy}</TableCell>
                <TableCell>{claim.bookedDate}</TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate(`/claims/${claim.id}`)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};