import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProposalFormStepProps {
  onFileUpload: (file: File) => void;
}

export const ProposalFormStep = ({ onFileUpload }: ProposalFormStepProps) => {
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file",
          variant: "destructive",
        });
        return;
      }
      onFileUpload(file);
      toast({
        title: "File uploaded",
        description: "Proposal form has been uploaded successfully",
      });
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Upload Proposal Form</h2>
      <div className="space-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="proposalForm">Proposal Form (PDF)</Label>
          <Input
            id="proposalForm"
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </div>
        <div className="flex items-center gap-2">
          <Upload className="h-4 w-4" />
          <span className="text-sm text-muted-foreground">
            Please upload the completed proposal form in PDF format
          </span>
        </div>
      </div>
    </Card>
  );
};