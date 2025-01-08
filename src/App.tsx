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
            <Route path="/underwriting/renewal" element={<Index />} />
            <Route path="/underwriting/inquiry" element={<Index />} />
            <Route path="/underwriting/reports" element={<Index />} />
            <Route path="/underwriting/payment" element={<Index />} />
            <Route path="/claims" element={<Index />} />
            <Route path="/claims/create" element={<CreateClaim />} />
            <Route path="/claims/listing" element={<ClaimListing />} />
            <Route path="/claims/status" element={<Index />} />
            <Route path="/customers" element={<Index />} />
            <Route path="/policies" element={<Index />} />
            <Route path="/payments" element={<Index />} />
            <Route path="/reports" element={<Index />} />
            <Route path="/company" element={<Index />} />
            <Route path="/knowledge" element={<Index />} />
            <Route path="/support" element={<Index />} />
            <Route path="/settings" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;