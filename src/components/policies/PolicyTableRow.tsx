import { TableCell, TableRow } from "@/components/ui/table";
import { StatusBadge } from "./StatusBadge";
import { PolicyActions } from "./PolicyActions";

interface Policy {
  id: number;
  policyNumber: string;
  insurancePolicyNumber: string;
  clientName: string;
  product: string;
  coverFrom: string;
  coverTo: string;
  netPremium: string;
  createdBy: string;
  status: string;
}

interface PolicyTableRowProps {
  policy: Policy;
  index: number;
}

export const PolicyTableRow = ({ policy, index }: PolicyTableRowProps) => {
  return (
    <TableRow>
      <TableCell>{index}</TableCell>
      <TableCell className="font-medium">{policy.policyNumber}</TableCell>
      <TableCell>{policy.insurancePolicyNumber}</TableCell>
      <TableCell>{policy.clientName}</TableCell>
      <TableCell>{policy.product}</TableCell>
      <TableCell>{policy.coverFrom}</TableCell>
      <TableCell>{policy.coverTo}</TableCell>
      <TableCell>{policy.netPremium}</TableCell>
      <TableCell>{policy.createdBy}</TableCell>
      <TableCell>
        <StatusBadge status={policy.status} />
      </TableCell>
      <TableCell>
        <PolicyActions policyId={policy.id} />
      </TableCell>
    </TableRow>
  );
};