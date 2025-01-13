import { DashboardLayout } from "../DashboardLayout";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="admin-theme min-h-screen">
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
};