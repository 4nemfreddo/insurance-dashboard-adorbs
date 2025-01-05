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
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Eye, FileText, Phone } from "lucide-react";

interface CustomerTableProps {
  searchQuery: string;
  activeFilter: string;
}

// Mock data - In a real app, this would come from an API
const mockCustomers = [
  {
    id: 1,
    name: "John Doe",
    policyNumber: "POL-2024-001",
    contact: "+254 712 345 678",
    status: "active",
    policyType: "Auto Insurance",
    lastRenewal: "2024-01-01",
  },
  {
    id: 2,
    name: "Jane Smith",
    policyNumber: "POL-2024-002",
    contact: "+254 723 456 789",
    status: "pending",
    policyType: "Health Insurance",
    lastRenewal: "2023-12-15",
  },
  // Add more mock data as needed
];

export const CustomerTable = ({ searchQuery, activeFilter }: CustomerTableProps) => {
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

  const filteredCustomers = mockCustomers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.policyNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.contact.includes(searchQuery);

    const matchesFilter =
      activeFilter === "all" || customer.status === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer Name</TableHead>
            <TableHead>Policy Number</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Policy Type</TableHead>
            <TableHead>Last Renewal</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCustomers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell className="font-medium">{customer.name}</TableCell>
              <TableCell>{customer.policyNumber}</TableCell>
              <TableCell>{customer.contact}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(customer.status)}>
                  {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>{customer.policyType}</TableCell>
              <TableCell>{customer.lastRenewal}</TableCell>
              <TableCell>
                <TooltipProvider>
                  <div className="flex gap-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon">
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
                          <Phone className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Contact Customer</TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};