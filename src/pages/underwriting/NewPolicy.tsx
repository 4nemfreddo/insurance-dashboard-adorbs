import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { PolicyFormData } from "@/types/policy";
import { MotorRiskStep } from "@/components/underwriting/steps/MotorRiskStep";
import { CoverTypeStep } from "@/components/underwriting/steps/CoverTypeStep";
import { ProposalFormStep } from "@/components/underwriting/steps/ProposalFormStep";
import { CoverDetailsStep } from "@/components/underwriting/steps/CoverDetailsStep";
import { DocumentUploadStep } from "@/components/underwriting/steps/DocumentUploadStep";
import { PaymentStep } from "@/components/underwriting/steps/PaymentStep";
import { ConfirmationStep } from "@/components/underwriting/steps/ConfirmationStep";

const steps = [
  { id: 1, title: "Motor Risk" },
  { id: 2, title: "Cover Type" },
  { id: 3, title: "Proposal Form" },
  { id: 4, title: "Cover Details" },
  { id: 5, title: "Documents" },
  { id: 6, title: "Payment" },
  { id: 7, title: "Confirmation" },
];

const initialFormData: PolicyFormData = {
  motorRiskType: "private",
  coverType: "comprehensive",
  proposalForm: null,
  startDate: null,
  installmentType: "annual",
  documents: {
    id: null,
    kra: null,
    logbook: null,
  },
  paymentType: "net",
};

export const NewPolicy = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<PolicyFormData>(initialFormData);

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        if (!formData.motorRiskType) {
          toast({
            title: "Required Field",
            description: "Please select a motor risk type",
            variant: "destructive",
          });
          return false;
        }
        break;
      case 2:
        if (!formData.coverType) {
          toast({
            title: "Required Field",
            description: "Please select a cover type",
            variant: "destructive",
          });
          return false;
        }
        break;
      case 3:
        if (!formData.proposalForm) {
          toast({
            title: "Required Field",
            description: "Please upload the proposal form",
            variant: "destructive",
          });
          return false;
        }
        break;
      case 4:
        if (!formData.startDate) {
          toast({
            title: "Required Field",
            description: "Please select a start date",
            variant: "destructive",
          });
          return false;
        }
        break;
      case 5:
        if (!formData.documents.id || !formData.documents.kra || !formData.documents.logbook) {
          toast({
            title: "Required Documents",
            description: "Please upload all required documents",
            variant: "destructive",
          });
          return false;
        }
        break;
    }
    return true;
  };

  const handleConfirm = () => {
    console.log("Policy confirmed:", formData);
    toast({
      title: "Success",
      description: "Policy has been created successfully",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-4 max-h-[calc(100vh-6rem)] overflow-y-auto px-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">New Policy Transaction</h1>
          <p className="text-gray-500">Create a new policy transaction</p>
        </div>

        <div className="flex gap-4 mb-6 overflow-x-auto">
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
              <span className="ml-2 font-medium whitespace-nowrap">{step.title}</span>
              {step.id !== steps.length && (
                <div className="w-8 h-[2px] mx-2 bg-gray-200" />
              )}
            </div>
          ))}
        </div>

        <Card className="p-6">
          {currentStep === 1 && (
            <MotorRiskStep
              value={formData.motorRiskType}
              onChange={(value) => setFormData({ ...formData, motorRiskType: value })}
            />
          )}

          {currentStep === 2 && (
            <CoverTypeStep
              value={formData.coverType}
              onChange={(value) => setFormData({ ...formData, coverType: value })}
            />
          )}

          {currentStep === 3 && (
            <ProposalFormStep
              onFileChange={(file) => setFormData({ ...formData, proposalForm: file })}
            />
          )}

          {currentStep === 4 && (
            <CoverDetailsStep
              startDate={formData.startDate}
              installmentType={formData.installmentType}
              onStartDateChange={(date) => setFormData({ ...formData, startDate: date })}
              onInstallmentTypeChange={(type) => setFormData({ ...formData, installmentType: type })}
            />
          )}

          {currentStep === 5 && (
            <DocumentUploadStep
              onFileChange={(type, file) =>
                setFormData({
                  ...formData,
                  documents: { ...formData.documents, [type]: file },
                })
              }
            />
          )}

          {currentStep === 6 && (
            <PaymentStep
              value={formData.paymentType}
              onChange={(value) => setFormData({ ...formData, paymentType: value })}
            />
          )}

          {currentStep === 7 && (
            <ConfirmationStep formData={formData} onConfirm={handleConfirm} />
          )}

          {currentStep < 7 && (
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              <Button onClick={handleNext}>
                {currentStep === 6 ? "Submit" : "Next"}
              </Button>
            </div>
          )}
        </Card>
      </div>
    </DashboardLayout>
  );
};