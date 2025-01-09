import { TableCell, TableRow } from "@/components/ui/table";
import { StatusBadge } from "./StatusBadge";
import { PolicyActions } from "./PolicyActions";

interface Policy {
  id: number;
  policyNumber: string;
  holderName: string;
  type: string;
  status: string;
  expiryDate: string;
  premium: string;
}

interface PolicyTableRowProps {
  policy: Policy;
}

export const PolicyTableRow = ({ policy }: PolicyTableRowProps) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{policy.policyNumber}</TableCell>
      <TableCell>{policy.holderName}</TableCell>
      <TableCell>{policy.type}</TableCell>
      <TableCell>
        <StatusBadge status={policy.status} />
      </TableCell>
      <TableCell>{policy.expiryDate}</TableCell>
      <TableCell>{policy.premium}</TableCell>
      <TableCell>
        <PolicyActions policyId={policy.id} />
      </TableCell>
    </TableRow>
  );
};