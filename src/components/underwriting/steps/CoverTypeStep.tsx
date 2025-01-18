import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface CoverTypeStepProps {
  value: string;
  onChange: (value: string) => void;
}

export const CoverTypeStep = ({ value, onChange }: CoverTypeStepProps) => {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Select Cover Type</h2>
      <RadioGroup value={value} onValueChange={onChange} className="grid gap-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comprehensive" id="comprehensive" />
          <Label htmlFor="comprehensive">Comprehensive</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="thirdParty" id="thirdParty" />
          <Label htmlFor="thirdParty">Third Party Only</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="thirdPartyFire" id="thirdPartyFire" />
          <Label htmlFor="thirdPartyFire">Third Party Fire & Theft</Label>
        </div>
      </RadioGroup>
    </Card>
  );
};