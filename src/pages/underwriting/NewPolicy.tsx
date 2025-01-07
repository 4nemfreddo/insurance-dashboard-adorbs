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
import { useState } from "react";

const steps = [
  { id: 1, title: "Insured Details" },
  { id: 2, title: "Policy Details" },
  { id: 3, title: "Vehicle Information" },
];

export const NewPolicy = () => {
  const [currentStep, setCurrentStep] = useState(1);

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
                <Label className="text-sm font-medium mb-1.5 text-gray-600">
                  Product *
                </Label>
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
                <Label className="text-sm font-medium mb-1.5 text-gray-600">
                  Pin Number *
                </Label>
                <Input placeholder="Enter PIN number" />
              </div>

              <div>
                <Label className="text-sm font-medium mb-1.5 text-gray-600">
                  Policy Holder *
                </Label>
                <Input placeholder="Enter policy holder name" />
              </div>

              <div>
                <Label className="text-sm font-medium mb-1.5 text-gray-600">
                  Email Address
                </Label>
                <Input type="email" placeholder="Enter email address" />
              </div>

              <div className="col-span-2">
                <Label className="text-sm font-medium mb-1.5 text-gray-600">
                  Commission Type *
                </Label>
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

          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            <Button
              onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length))}
              disabled={currentStep === steps.length}
            >
              Next
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};