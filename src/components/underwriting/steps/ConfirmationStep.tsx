import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { PolicyFormData } from "@/types/policy";

interface ConfirmationStepProps {
  formData: PolicyFormData;
  onConfirm: () => void;
}

export const ConfirmationStep = ({ formData, onConfirm }: ConfirmationStepProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center">
        <div className="rounded-full bg-green-100 p-3">
          <Check className="h-8 w-8 text-green-600" />
        </div>
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Policy Created Successfully</h2>
        <p className="text-gray-500 mt-2">Your policy has been created and payment processed.</p>
      </div>

      <Card className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Motor Risk Type</p>
            <p className="font-medium">{formData.motorRiskType}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Cover Type</p>
            <p className="font-medium">{formData.coverType}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Start Date</p>
            <p className="font-medium">
              {formData.startDate?.toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Payment Type</p>
            <p className="font-medium">{formData.paymentType}</p>
          </div>
        </div>
      </Card>

      <div className="flex justify-center">
        <Button onClick={onConfirm}>Download Policy Document</Button>
      </div>
    </div>
  );
};