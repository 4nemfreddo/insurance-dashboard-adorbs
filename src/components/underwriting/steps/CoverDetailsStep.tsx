import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { DatePicker } from "@/components/ui/date-picker";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CoverDetailsStepProps {
  startDate: Date | undefined;
  installmentType: string;
  onStartDateChange: (date: Date | undefined) => void;
  onInstallmentTypeChange: (value: string) => void;
}

export const CoverDetailsStep = ({
  startDate,
  installmentType,
  onStartDateChange,
  onInstallmentTypeChange,
}: CoverDetailsStepProps) => {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Cover Details</h2>
      <div className="space-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Cover Start Date</Label>
          <DatePicker date={startDate} onChange={onStartDateChange} />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Installment Type</Label>
          <Select value={installmentType} onValueChange={onInstallmentTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select installment type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="annual">Annual</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
};