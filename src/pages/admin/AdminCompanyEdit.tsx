import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const AdminCompanyEdit = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Changes saved",
      description: "Company details have been updated successfully.",
    });
  };

  return (
    <div className="container mx-auto p-6" data-admin="true">
      <h1 className="text-2xl font-bold mb-6">Edit Company Details</h1>
      <Card>
        <CardHeader>
          <CardTitle>Company Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="companyName" className="text-sm font-medium">
              Company Name
            </label>
            <Input id="companyName" placeholder="Enter company name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" type="email" placeholder="company@example.com" />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone
            </label>
            <Input id="phone" placeholder="Enter phone number" />
          </div>
          <Button onClick={handleSave}>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminCompanyEdit;