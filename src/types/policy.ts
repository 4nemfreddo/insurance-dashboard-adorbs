export type MotorRiskType = 'private' | 'commercial' | 'psv';
export type CoverType = 'comprehensive' | 'thirdParty';
export type InstallmentType = 'annual' | 'quarterly' | 'monthly';
export type PaymentType = 'gross' | 'net';

export interface PolicyFormData {
  motorRiskType: MotorRiskType;
  coverType: CoverType;
  proposalForm: File | null;
  startDate: Date | null;
  installmentType: InstallmentType;
  documents: {
    id: File | null;
    kra: File | null;
    logbook: File | null;
  };
  paymentType: PaymentType;
}