import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { Navbar } from "./Navbar";

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="h-screen flex w-full bg-gray-50/50 dark:bg-gray-900/50 overflow-hidden">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 p-2 md:p-4 overflow-hidden">
            <div className="h-full overflow-y-auto rounded-lg bg-background">
              <div className="container mx-auto py-4">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};