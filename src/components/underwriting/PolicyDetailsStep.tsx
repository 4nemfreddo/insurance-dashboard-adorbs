import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PolicyDetailsStepProps {
  formData: any;
  onChange: (field: string, value: any) => void;
}

export const PolicyDetailsStep = ({ formData, onChange }: PolicyDetailsStepProps) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium mb-1.5 text-gray-600">
          Policy Number *
        </label>
        <Input 
          placeholder="Enter policy number" 
          value={formData.policyNumber}
          onChange={(e) => onChange('policyNumber', e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5 text-gray-600">
          Policy Type *
        </label>
        <Select 
          value={formData.policyType}
          onValueChange={(value) => onChange('policyType', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select policy type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="comprehensive">Comprehensive</SelectItem>
            <SelectItem value="thirdParty">Third Party</SelectItem>
            <SelectItem value="thirdPartyFire">Third Party Fire & Theft</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5 text-gray-600">
          Start Date *
        </label>
        <DatePicker 
          date={formData.startDate}
          onChange={(date) => onChange('startDate', date)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5 text-gray-600">
          End Date *
        </label>
        <DatePicker 
          date={formData.endDate}
          onChange={(date) => onChange('endDate', date)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5 text-gray-600">
          Premium Amount *
        </label>
        <Input 
          type="number" 
          placeholder="Enter premium amount"
          value={formData.premiumAmount}
          onChange={(e) => onChange('premiumAmount', e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5 text-gray-600">
          Payment Terms *
        </label>
        <Select 
          value={formData.paymentTerms}
          onValueChange={(value) => onChange('paymentTerms', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select payment terms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="annual">Annual</SelectItem>
            <SelectItem value="biannual">Bi-annual</SelectItem>
            <SelectItem value="quarterly">Quarterly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};