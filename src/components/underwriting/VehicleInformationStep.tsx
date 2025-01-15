import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface VehicleInformationStepProps {
  formData: any;
  onChange: (field: string, value: any) => void;
}

export const VehicleInformationStep = ({ formData, onChange }: VehicleInformationStepProps) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium mb-1.5 text-gray-600">
          Vehicle Make *
        </label>
        <Input 
          placeholder="Enter vehicle make"
          value={formData.vehicleMake}
          onChange={(e) => onChange('vehicleMake', e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5 text-gray-600">
          Vehicle Model *
        </label>
        <Input 
          placeholder="Enter vehicle model"
          value={formData.vehicleModel}
          onChange={(e) => onChange('vehicleModel', e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5 text-gray-600">
          Registration Number *
        </label>
        <Input 
          placeholder="Enter registration number"
          value={formData.registrationNumber}
          onChange={(e) => onChange('registrationNumber', e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5 text-gray-600">
          Year of Manufacture *
        </label>
        <Input 
          type="number" 
          placeholder="Enter year" 
          min="1900" 
          max={new Date().getFullYear()}
          value={formData.yearOfManufacture}
          onChange={(e) => onChange('yearOfManufacture', e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5 text-gray-600">
          Engine Number
        </label>
        <Input 
          placeholder="Enter engine number"
          value={formData.engineNumber}
          onChange={(e) => onChange('engineNumber', e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5 text-gray-600">
          Chassis Number *
        </label>
        <Input 
          placeholder="Enter chassis number"
          value={formData.chassisNumber}
          onChange={(e) => onChange('chassisNumber', e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5 text-gray-600">
          Vehicle Category *
        </label>
        <Select 
          value={formData.vehicleCategory}
          onValueChange={(value) => onChange('vehicleCategory', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="private">Private</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
            <SelectItem value="psv">PSV</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5 text-gray-600">
          Vehicle Use *
        </label>
        <Select 
          value={formData.vehicleUse}
          onValueChange={(value) => onChange('vehicleUse', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select vehicle use" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="personal">Personal</SelectItem>
            <SelectItem value="business">Business</SelectItem>
            <SelectItem value="hire">Hire</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};