import { AdminLayout } from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const AdminCompanyEdit = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Changes saved",
      description: "Company page has been updated successfully.",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Edit Company Page
          </h1>
          <p className="text-gray-500">
            Update company information and metrics
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Company Name</label>
                <Input defaultValue="NexusGuard Insurance" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">About Us</label>
                <Textarea 
                  defaultValue="We are a leading insurance solutions provider committed to delivering innovative and reliable coverage options."
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Total Employees</label>
                  <Input defaultValue="250+" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Global Presence</label>
                  <Input defaultValue="15+" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Years of Excellence</label>
                  <Input defaultValue="25+" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Annual Growth</label>
                  <Input defaultValue="30%" />
                </div>
              </div>

              <Button onClick={handleSave} className="w-full">
                Save Changes
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminCompanyEdit;
