import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface KYCDocumentsStepProps {
  onFileUpload: (type: string, file: File) => void;
}

export const KYCDocumentsStep = ({ onFileUpload }: KYCDocumentsStepProps) => {
  const { toast } = useToast();

  const handleFileChange = (type: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(type, file);
      toast({
        title: "File uploaded",
        description: `${type} document has been uploaded successfully`,
      });
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Upload KYC Documents</h2>
      <div className="space-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="idDocument">National ID</Label>
          <Input
            id="idDocument"
            type="file"
            accept="image/*,.pdf"
            onChange={handleFileChange("ID")}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="kraPin">KRA PIN Certificate</Label>
          <Input
            id="kraPin"
            type="file"
            accept="image/*,.pdf"
            onChange={handleFileChange("KRA")}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="logbook">Vehicle Logbook</Label>
          <Input
            id="logbook"
            type="file"
            accept="image/*,.pdf"
            onChange={handleFileChange("Logbook")}
          />
        </div>
        <div className="flex items-center gap-2">
          <FileCheck className="h-4 w-4" />
          <span className="text-sm text-muted-foreground">
            Please upload clear copies of all required documents
          </span>
        </div>
      </div>
    </Card>
  );
};