import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

interface ProposalFormStepProps {
  onFileChange: (file: File | null) => void;
}

export const ProposalFormStep = ({ onFileChange }: ProposalFormStepProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onFileChange(file);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Upload Proposal Form</h2>
      <FormField
        name="proposalForm"
        render={() => (
          <FormItem>
            <FormLabel>Proposal Form</FormLabel>
            <FormControl>
              <div className="flex items-center gap-4">
                <Input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="proposalForm"
                />
                <Button
                  variant="outline"
                  onClick={() => document.getElementById("proposalForm")?.click()}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Proposal Form
                </Button>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};