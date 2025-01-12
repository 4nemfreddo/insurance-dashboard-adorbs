import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminKnowledgeBase = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Article saved",
      description: "Knowledge base article has been updated successfully.",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Manage Knowledge Base
            </h1>
            <p className="text-gray-500">
              Create and edit knowledge base articles
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Article
          </Button>
        </div>

        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Getting Started Guide",
                    category: "Basics",
                    lastUpdated: "2 days ago"
                  },
                  {
                    title: "Policy Management",
                    category: "Advanced",
                    lastUpdated: "1 week ago"
                  },
                  {
                    title: "Claims Process",
                    category: "Claims",
                    lastUpdated: "3 days ago"
                  }
                ].map((article, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{article.title}</h3>
                      <p className="text-sm text-gray-500">
                        {article.category} • Last updated {article.lastUpdated}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminKnowledgeBase;