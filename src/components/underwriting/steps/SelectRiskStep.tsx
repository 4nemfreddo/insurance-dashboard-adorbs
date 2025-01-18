import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface SelectRiskStepProps {
  value: string;
  onChange: (value: string) => void;
}

export const SelectRiskStep = ({ value, onChange }: SelectRiskStepProps) => {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Select Motor Risk Type</h2>
      <RadioGroup value={value} onValueChange={onChange} className="grid gap-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="private" id="private" />
          <Label htmlFor="private">Private Motor Vehicle</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="commercial" id="commercial" />
          <Label htmlFor="commercial">Commercial Motor Vehicle</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="psv" id="psv" />
          <Label htmlFor="psv">Public Service Vehicle</Label>
        </div>
      </RadioGroup>
    </Card>
  );
};