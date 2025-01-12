import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, UserPlus, UserMinus } from "lucide-react";

const AdminUsers = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              User Management
            </h1>
            <p className="text-gray-500">
              Manage user accounts and permissions
            </p>
          </div>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" /> Add User
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Users</CardTitle>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input placeholder="Search users..." />
                <Button variant="outline" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "John Doe",
                  email: "john@example.com",
                  role: "Admin",
                  status: "Active",
                  lastActive: "2 hours ago"
                },
                {
                  name: "Jane Smith",
                  email: "jane@example.com",
                  role: "Manager",
                  status: "Active",
                  lastActive: "1 day ago"
                },
                {
                  name: "Mike Johnson",
                  email: "mike@example.com",
                  role: "User",
                  status: "Inactive",
                  lastActive: "1 week ago"
                }
              ].map((user, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    <p className="text-sm text-gray-500">
                      Last active: {user.lastActive}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      user.status === "Active" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {user.status}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                      {user.role}
                    </span>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminUsers;