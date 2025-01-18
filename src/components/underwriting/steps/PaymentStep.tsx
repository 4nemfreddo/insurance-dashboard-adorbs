import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

interface PaymentStepProps {
  paymentType: string;
  amount: number;
  onPaymentTypeChange: (value: string) => void;
  onMakePayment: () => void;
}

export const PaymentStep = ({
  paymentType,
  amount,
  onPaymentTypeChange,
  onMakePayment,
}: PaymentStepProps) => {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
      <div className="space-y-6">
        <div>
          <Label className="text-base">Payment Type</Label>
          <RadioGroup value={paymentType} onValueChange={onPaymentTypeChange} className="mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="gross" id="gross" />
              <Label htmlFor="gross">Gross Premium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="net" id="net" />
              <Label htmlFor="net">Net Premium</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div>
          <Label className="text-base">Amount to Pay</Label>
          <p className="text-2xl font-bold mt-1">KES {amount.toLocaleString()}</p>
        </div>

        <Button onClick={onMakePayment} className="w-full">
          <CreditCard className="mr-2 h-4 w-4" />
          Make Payment
        </Button>
      </div>
    </Card>
  );
};