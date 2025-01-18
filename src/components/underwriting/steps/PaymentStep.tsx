import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { PaymentType } from "@/types/policy";

interface PaymentStepProps {
  value: PaymentType;
  onChange: (value: PaymentType) => void;
}

export const PaymentStep = ({ value, onChange }: PaymentStepProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Payment Details</h2>
      <FormField
        name="paymentType"
        render={() => (
          <FormItem>
            <FormLabel>Payment Type</FormLabel>
            <FormControl>
              <RadioGroup value={value} onValueChange={onChange} className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="gross" id="gross" />
                  <Label htmlFor="gross">Gross</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="net" id="net" />
                  <Label htmlFor="net">Net</Label>
                </div>
              </RadioGroup>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};