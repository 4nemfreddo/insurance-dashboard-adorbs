import { AdminLayout } from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Clock } from "lucide-react";

const AdminSupport = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-100 mb-2">
            Support Management
          </h1>
          <p className="text-gray-400">
            Manage support tickets and inquiries
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="bg-[#222632] border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Open Tickets
              </CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-gray-400">
                +5 since yesterday
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#222632] border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Agents
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-gray-400">
                2 offline
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#222632] border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Response Time
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.5h</div>
              <p className="text-xs text-gray-400">
                -30min from last week
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#222632] border-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-100">Recent Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: "T-1234",
                  subject: "Policy Renewal Issue",
                  priority: "High",
                  status: "Open",
                  created: "2 hours ago"
                },
                {
                  id: "T-1233",
                  subject: "Payment Processing Error",
                  priority: "Medium",
                  status: "In Progress",
                  created: "5 hours ago"
                },
                {
                  id: "T-1232",
                  subject: "Document Upload Problem",
                  priority: "Low",
                  status: "Open",
                  created: "1 day ago"
                }
              ].map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between p-4 border rounded-lg bg-[#1A1F2C]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-100">{ticket.id}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-400">{ticket.subject}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Created {ticket.created}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      ticket.priority === "High" 
                        ? "bg-red-100 text-red-800" 
                        : ticket.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}>
                      {ticket.priority}
                    </span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminSupport;
