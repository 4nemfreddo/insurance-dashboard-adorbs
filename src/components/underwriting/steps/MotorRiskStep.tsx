import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { MotorRiskType } from "@/types/policy";

interface MotorRiskStepProps {
  value: MotorRiskType;
  onChange: (value: MotorRiskType) => void;
}

export const MotorRiskStep = ({ value, onChange }: MotorRiskStepProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Select Motor Risk Type</h2>
      <FormField
        name="motorRiskType"
        render={() => (
          <FormItem>
            <FormLabel>Motor Risk Type</FormLabel>
            <FormControl>
              <Select value={value} onValueChange={onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select motor risk type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="private">Private</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="psv">PSV</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};