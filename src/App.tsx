import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Login from "./pages/Login";
import { CreateClaim } from "./components/claims/CreateClaim";
import { ClaimListing } from "./pages/claims/ClaimListing";
import { NewPolicy } from "./pages/underwriting/NewPolicy";
import { PolicyRenewal } from "./pages/underwriting/PolicyRenewal";
import { PolicyInquiry } from "./pages/underwriting/PolicyInquiry";
import { PolicyReports } from "./pages/underwriting/PolicyReports";
import { GrossStatement } from "./pages/reports/GrossStatement";
import { CommissionStatement } from "./pages/reports/CommissionStatement";
import Company from "./pages/Company";
import KnowledgeBase from "./pages/KnowledgeBase";
import Support from "./pages/Support";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="system" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Index />} />
            <Route path="/underwriting" element={<Index />} />
            <Route path="/underwriting/new" element={<NewPolicy />} />
            <Route path="/underwriting/renewal" element={<PolicyRenewal />} />
            <Route path="/underwriting/inquiry" element={<PolicyInquiry />} />
            <Route path="/underwriting/reports" element={<PolicyReports />} />
            <Route path="/underwriting/payment" element={<Index />} />
            <Route path="/claims" element={<Index />} />
            <Route path="/claims/create" element={<CreateClaim />} />
            <Route path="/claims/listing" element={<ClaimListing />} />
            <Route path="/claims/status" element={<Index />} />
            <Route path="/customers" element={<Index />} />
            <Route path="/policies" element={<Index />} />
            <Route path="/payments" element={<Index />} />
            <Route path="/reports" element={<Index />} />
            <Route path="/reports/gross-statement" element={<GrossStatement />} />
            <Route path="/reports/commission-statement" element={<CommissionStatement />} />
            <Route path="/company" element={<Company />} />
            <Route path="/knowledge" element={<KnowledgeBase />} />
            <Route path="/support" element={<Support />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;