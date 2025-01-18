import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

interface DocumentUploadStepProps {
  onFileChange: (type: 'id' | 'kra' | 'logbook', file: File | null) => void;
}

export const DocumentUploadStep = ({ onFileChange }: DocumentUploadStepProps) => {
  const handleFileChange = (type: 'id' | 'kra' | 'logbook') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onFileChange(type, file);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Upload KYC Documents</h2>
      
      {['id', 'kra', 'logbook'].map((type) => (
        <FormField
          key={type}
          name={`documents.${type}`}
          render={() => (
            <FormItem>
              <FormLabel>{type.toUpperCase()}</FormLabel>
              <FormControl>
                <div className="flex items-center gap-4">
                  <Input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange(type as 'id' | 'kra' | 'logbook')}
                    className="hidden"
                    id={`document-${type}`}
                  />
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById(`document-${type}`)?.click()}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload {type.toUpperCase()}
                  </Button>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      ))}
    </div>
  );
};