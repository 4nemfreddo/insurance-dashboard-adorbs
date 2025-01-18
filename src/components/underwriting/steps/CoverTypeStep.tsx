import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { CoverType } from "@/types/policy";

interface CoverTypeStepProps {
  value: CoverType;
  onChange: (value: CoverType) => void;
}

export const CoverTypeStep = ({ value, onChange }: CoverTypeStepProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Specify Cover Type</h2>
      <FormField
        name="coverType"
        render={() => (
          <FormItem>
            <FormLabel>Cover Type</FormLabel>
            <FormControl>
              <Select value={value} onValueChange={onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select cover type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="comprehensive">Comprehensive</SelectItem>
                  <SelectItem value="thirdParty">Third Party</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};