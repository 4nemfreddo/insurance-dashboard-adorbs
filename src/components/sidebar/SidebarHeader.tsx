import { Menu } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const SidebarHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 mb-2">
      <div>
        <h1 className="text-xl font-bold text-primary">NexusGuard</h1>
        <p className="text-sm text-muted-foreground">Insurance Solutions</p>
      </div>
      <SidebarTrigger className="lg:hidden">
        <Menu className="h-6 w-6" />
      </SidebarTrigger>
    </div>
  );
};