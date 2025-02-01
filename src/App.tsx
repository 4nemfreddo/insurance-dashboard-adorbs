import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AdminAuthGuard } from "./components/auth/AdminAuthGuard";
import { AuthGuard } from "./components/auth/AuthGuard";
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
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCompanyEdit from "./pages/admin/AdminCompanyEdit";

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
            
            {/* Protected Routes */}
            <Route path="/" element={<AuthGuard><Index /></AuthGuard>} />
            <Route path="/underwriting" element={<AuthGuard><Index /></AuthGuard>} />
            <Route path="/underwriting/new" element={<AuthGuard><NewPolicy /></AuthGuard>} />
            <Route path="/underwriting/renewal" element={<AuthGuard><PolicyRenewal /></AuthGuard>} />
            <Route path="/underwriting/inquiry" element={<AuthGuard><PolicyInquiry /></AuthGuard>} />
            <Route path="/underwriting/reports" element={<AuthGuard><PolicyReports /></AuthGuard>} />
            <Route path="/underwriting/payment" element={<AuthGuard><Index /></AuthGuard>} />
            <Route path="/claims" element={<AuthGuard><Index /></AuthGuard>} />
            <Route path="/claims/create" element={<AuthGuard><CreateClaim /></AuthGuard>} />
            <Route path="/claims/listing" element={<AuthGuard><ClaimListing /></AuthGuard>} />
            <Route path="/claims/status" element={<AuthGuard><Index /></AuthGuard>} />
            <Route path="/customers" element={<AuthGuard><Index /></AuthGuard>} />
            <Route path="/policies" element={<AuthGuard><Index /></AuthGuard>} />
            <Route path="/payments" element={<AuthGuard><Index /></AuthGuard>} />
            <Route path="/reports" element={<AuthGuard><Index /></AuthGuard>} />
            <Route path="/reports/gross-statement" element={<AuthGuard><GrossStatement /></AuthGuard>} />
            <Route path="/reports/commission-statement" element={<AuthGuard><CommissionStatement /></AuthGuard>} />
            <Route path="/company" element={<AuthGuard><Company /></AuthGuard>} />
            <Route path="/knowledge" element={<AuthGuard><KnowledgeBase /></AuthGuard>} />
            <Route path="/support" element={<AuthGuard><Support /></AuthGuard>} />
            <Route path="/settings" element={<AuthGuard><Settings /></AuthGuard>} />
            
            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <AdminAuthGuard>
                  <AdminDashboard />
                </AdminAuthGuard>
              }
            />
            <Route
              path="/admin/company/edit"
              element={
                <AdminAuthGuard>
                  <AdminCompanyEdit />
                </AdminAuthGuard>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;