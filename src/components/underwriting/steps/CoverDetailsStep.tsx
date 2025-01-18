import { Calendar } from "@/components/ui/calendar";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { InstallmentType } from "@/types/policy";

interface CoverDetailsStepProps {
  startDate: Date | null;
  installmentType: InstallmentType;
  onStartDateChange: (date: Date | null) => void;
  onInstallmentTypeChange: (type: InstallmentType) => void;
}

export const CoverDetailsStep = ({
  startDate,
  installmentType,
  onStartDateChange,
  onInstallmentTypeChange,
}: CoverDetailsStepProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Cover Details</h2>
      
      <FormField
        name="startDate"
        render={() => (
          <FormItem className="flex flex-col">
            <FormLabel>Start Date</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate || undefined}
                  onSelect={onStartDateChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FormItem>
        )}
      />

      <FormField
        name="installmentType"
        render={() => (
          <FormItem>
            <FormLabel>Installment Type</FormLabel>
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
          </FormItem>
        )}
      />
    </div>
  );
};