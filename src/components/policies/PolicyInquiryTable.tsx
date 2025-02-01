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
    insurancePolicyNumber: "INS-001-2024",
    clientName: "John Doe",
    product: "Motor Vehicle Insurance",
    coverFrom: "2024-01-01",
    coverTo: "2024-12-31",
    netPremium: "KES 25,000",
    createdBy: "Jane Smith",
    status: "active",
  },
  {
    id: 2,
    policyNumber: "POL-2024-002",
    insurancePolicyNumber: "INS-002-2024",
    clientName: "Jane Smith",
    product: "Health Insurance",
    coverFrom: "2024-02-01",
    coverTo: "2025-01-31",
    netPremium: "KES 50,000",
    createdBy: "John Doe",
    status: "expiring",
  },
  {
    id: 3,
    policyNumber: "POL-2024-003",
    insurancePolicyNumber: "INS-003-2024",
    clientName: "Alice Johnson",
    product: "Property Insurance",
    coverFrom: "2024-03-01",
    coverTo: "2025-02-28",
    netPremium: "KES 100,000",
    createdBy: "Bob Wilson",
    status: "expired",
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
            <TableHead>Index</TableHead>
            <TableHead>Policy Number</TableHead>
            <TableHead>Insurance Policy Number</TableHead>
            <TableHead>Client Name</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Cover From</TableHead>
            <TableHead>Cover To</TableHead>
            <TableHead>Net Premium</TableHead>
            <TableHead>Created By</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPolicies.map((policy, index) => (
            <PolicyTableRow key={policy.id} policy={policy} index={index + 1} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};