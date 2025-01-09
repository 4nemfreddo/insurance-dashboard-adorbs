import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PolicyTableRow } from "./PolicyTableRow";

interface PolicyInquiryTableProps {
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

export const PolicyInquiryTable = ({ searchQuery }: PolicyInquiryTableProps) => {
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
            <PolicyTableRow key={policy.id} policy={policy} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};