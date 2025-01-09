import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FileText, Eye, History } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface PolicyActionsProps {
  policyId: number;
}

export const PolicyActions = ({ policyId }: PolicyActionsProps) => {
  const { toast } = useToast();

  const handleViewDetails = (policyId: number) => {
    console.log("Viewing details for policy:", policyId);
    toast({
      title: "Viewing Policy Details",
      description: "Loading policy details...",
    });
  };

  return (
    <div className="flex gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleViewDetails(policyId)}
          >
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
            <History className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>View History</TooltipContent>
      </Tooltip>
    </div>
  );
};