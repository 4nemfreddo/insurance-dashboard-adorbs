import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";
import { Navbar } from "./Navbar";

interface NavbarProps {
  className?: string;
}

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="h-screen flex w-full bg-[#1A1F2C] text-gray-100">
        <AdminSidebar />
        <div className="flex-1 flex flex-col">
          <Navbar className="bg-[#222632] border-b border-gray-800" />
          <main className="flex-1 p-4 overflow-hidden">
            <div className="h-full overflow-y-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};