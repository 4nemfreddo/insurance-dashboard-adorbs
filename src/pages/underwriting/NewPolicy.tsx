import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PolicyDetailsStep } from "@/components/underwriting/PolicyDetailsStep";
import { VehicleInformationStep } from "@/components/underwriting/VehicleInformationStep";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { id: 1, title: "Customer Information" },
  { id: 2, title: "Policy Details" },
  { id: 3, title: "Vehicle Information" },
  { id: 4, title: "Documents" },
];

export const NewPolicy = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Customer Information
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    // Policy Details
    policyNumber: "",
    policyType: "",
    startDate: null,
    endDate: null,
    premiumAmount: "",
    paymentTerms: "",
    // Vehicle Information
    vehicleMake: "",
    vehicleModel: "",
    registrationNumber: "",
    yearOfManufacture: "",
    engineNumber: "",
    chassisNumber: "",
    vehicleCategory: "",
    vehicleUse: "",
  });

  const { toast } = useToast();

  const handleFormChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    toast({
      title: "Success",
      description: "Policy has been created successfully",
    });
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">New Policy</h1>
          <p className="text-gray-500">Create a new insurance policy</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex items-center ${
                  step.id !== steps.length && "flex-1"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full border-2 
                    ${
                      step.id === currentStep
                        ? "border-primary bg-primary text-white"
                        : step.id < currentStep
                        ? "border-primary text-primary"
                        : "border-gray-300 text-gray-300"
                    }`}
                >
                  {step.id}
                </div>
                <div
                  className={`ml-2 ${
                    step.id === currentStep
                      ? "text-primary"
                      : step.id < currentStep
                      ? "text-primary"
                      : "text-gray-300"
                  }`}
                >
                  {step.title}
                </div>
                {step.id !== steps.length && (
                  <div
                    className={`flex-1 h-0.5 mx-4 ${
                      step.id < currentStep ? "bg-primary" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="p-6">
          {currentStep === 1 && (
            <div>Customer Information Step (to be implemented)</div>
          )}

          {currentStep === 2 && (
            <PolicyDetailsStep formData={formData} onChange={handleFormChange} />
          )}

          {currentStep === 3 && (
            <VehicleInformationStep formData={formData} onChange={handleFormChange} />
          )}

          {currentStep === 4 && (
            <div>Documents Step (to be implemented)</div>
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
              <Button onClick={handleSubmit}>
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
