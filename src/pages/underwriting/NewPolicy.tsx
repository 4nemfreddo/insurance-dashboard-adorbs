import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { SelectRiskStep } from "@/components/underwriting/steps/SelectRiskStep";
import { CoverTypeStep } from "@/components/underwriting/steps/CoverTypeStep";
import { ProposalFormStep } from "@/components/underwriting/steps/ProposalFormStep";
import { CoverDetailsStep } from "@/components/underwriting/steps/CoverDetailsStep";
import { KYCDocumentsStep } from "@/components/underwriting/steps/KYCDocumentsStep";
import { PaymentStep } from "@/components/underwriting/steps/PaymentStep";
import { Check } from "lucide-react";

const steps = [
  { id: 1, title: "Select Risk" },
  { id: 2, title: "Cover Type" },
  { id: 3, title: "Proposal Form" },
  { id: 4, title: "Cover Details" },
  { id: 5, title: "KYC Documents" },
  { id: 6, title: "Payment" },
  { id: 7, title: "Confirmation" },
];

export const NewPolicy = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    riskType: "",
    coverType: "",
    proposalForm: null as File | null,
    startDate: undefined as Date | undefined,
    installmentType: "",
    kycDocuments: {
      id: null,
      kra: null,
      logbook: null,
    } as Record<string, File | null>,
    paymentType: "gross",
    isPaid: false,
  });

  const { toast } = useToast();

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setFormData(prev => ({ ...prev, isPaid: true }));
      toast({
        title: "Payment successful",
        description: "Your policy has been created successfully",
      });
      handleNext();
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">New Policy</h1>
          <p className="text-muted-foreground">Create a new motor insurance policy</p>
        </div>

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
                {step.id < currentStep ? <Check className="h-4 w-4" /> : step.id}
              </div>
              <span
                className={`ml-2 text-sm hidden md:inline ${
                  step.id === currentStep
                    ? "text-primary font-medium"
                    : step.id < currentStep
                    ? "text-primary"
                    : "text-gray-500"
                }`}
              >
                {step.title}
              </span>
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

        <div className="mt-8">
          {currentStep === 1 && (
            <SelectRiskStep
              value={formData.riskType}
              onChange={(value) => setFormData({ ...formData, riskType: value })}
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
              onFileUpload={(file) => setFormData({ ...formData, proposalForm: file })}
            />
          )}

          {currentStep === 4 && (
            <CoverDetailsStep
              startDate={formData.startDate}
              installmentType={formData.installmentType}
              onStartDateChange={(date) => setFormData({ ...formData, startDate: date })}
              onInstallmentTypeChange={(value) =>
                setFormData({ ...formData, installmentType: value })
              }
            />
          )}

          {currentStep === 5 && (
            <KYCDocumentsStep
              onFileUpload={(type, file) =>
                setFormData({
                  ...formData,
                  kycDocuments: { ...formData.kycDocuments, [type.toLowerCase()]: file },
                })
              }
            />
          )}

          {currentStep === 6 && (
            <PaymentStep
              paymentType={formData.paymentType}
              amount={50000} // This would be calculated based on the policy details
              onPaymentTypeChange={(value) =>
                setFormData({ ...formData, paymentType: value })
              }
              onMakePayment={handlePayment}
            />
          )}

          {currentStep === 7 && (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Policy Created Successfully</h2>
              <p className="text-muted-foreground">
                Your policy has been created and payment has been confirmed
              </p>
            </div>
          )}

          {currentStep !== 7 && (
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              {currentStep !== 6 && (
                <Button onClick={handleNext}>Next</Button>
              )}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};