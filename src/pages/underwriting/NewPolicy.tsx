import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const steps = [
  { id: 1, title: "Insured Details" },
  { id: 2, title: "Policy Details" },
  { id: 3, title: "Vehicle Information" },
];

export const NewPolicy = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  return (
    <DashboardLayout>
      <div className="space-y-4 max-h-[calc(100vh-6rem)] overflow-y-auto px-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">New Policy Transaction</h1>
          <p className="text-gray-500">Create a new policy transaction</p>
        </div>

        <div className="flex gap-4 mb-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex items-center ${
                currentStep === step.id
                  ? "text-primary"
                  : currentStep > step.id
                  ? "text-green-600"
                  : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  currentStep === step.id
                    ? "border-primary bg-primary/10"
                    : currentStep > step.id
                    ? "border-green-600 bg-green-50"
                    : "border-gray-300"
                }`}
              >
                {step.id}
              </div>
              <span className="ml-2 font-medium">{step.title}</span>
              {step.id !== steps.length && (
                <div className="w-8 h-[2px] mx-2 bg-gray-200" />
              )}
            </div>
          ))}
        </div>

        <Card className="p-6">
          {currentStep === 1 && (
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-600">
                  Product *
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="motor">Motor Insurance</SelectItem>
                    <SelectItem value="health">Health Insurance</SelectItem>
                    <SelectItem value="property">Property Insurance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-600">
                  Pin Number *
                </label>
                <Input placeholder="Enter PIN number" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-600">
                  Policy Holder *
                </label>
                <Input placeholder="Enter policy holder name" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-600">
                  Email Address
                </label>
                <Input type="email" placeholder="Enter email address" />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1.5 text-gray-600">
                  Commission Type *
                </label>
                <RadioGroup defaultValue="net" className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="net" id="net" />
                    <Label htmlFor="net">Net</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="gross" id="gross" />
                    <Label htmlFor="gross">Gross</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label className="text-sm font-medium mb-1.5 text-gray-600">
                  Policy Number *
                </Label>
                <Input placeholder="Enter policy number" />
              </div>

              <div>
                <Label className="text-sm font-medium mb-1.5 text-gray-600">
                  Policy Type *
                </Label>
                <Select>
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
                <Label className="text-sm font-medium mb-1.5 text-gray-600">
                  Start Date *
                </Label>
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
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label className="text-sm font-medium mb-1.5 text-gray-600">
                  End Date *
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label className="text-sm font-medium mb-1.5 text-gray-600">
                  Premium Amount *
                </Label>
                <Input type="number" placeholder="Enter premium amount" />
              </div>

              <div>
                <Label className="text-sm font-medium mb-1.5 text-gray-600">
                  Payment Terms *
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment terms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="annual">Annual</SelectItem>
                    <SelectItem value="semiannual">Semi-Annual</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-600">
                  Vehicle Make *
                </label>
                <Input placeholder="Enter vehicle make" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-600">
                  Vehicle Model *
                </label>
                <Input placeholder="Enter vehicle model" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-600">
                  Registration Number *
                </label>
                <Input placeholder="Enter registration number" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-600">
                  Year of Manufacture *
                </label>
                <Input type="number" placeholder="Enter year" min="1900" max={new Date().getFullYear()} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-600">
                  Engine Number
                </label>
                <Input placeholder="Enter engine number" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-600">
                  Chassis Number *
                </label>
                <Input placeholder="Enter chassis number" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-600">
                  Vehicle Category *
                </label>
                <Select>
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
                <Select>
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
          )}

          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            {currentStep === steps.length ? (
              <Button onClick={() => console.log("Submit form")}>
                Submit
              </Button>
            ) : (
              <Button
                onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length))}
              >
                Next
              </Button>
            )}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};
