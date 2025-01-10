import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const KnowledgeBase = () => {
  const categories = [
    {
      title: "Getting Started",
      articles: [
        "Introduction to NexusGuard",
        "Creating your first policy",
        "Understanding coverage types",
        "Managing your account",
      ],
    },
    {
      title: "Policy Management",
      articles: [
        "How to renew a policy",
        "Making policy changes",
        "Understanding policy terms",
        "Policy cancellation process",
      ],
    },
    {
      title: "Claims Process",
      articles: [
        "Filing a new claim",
        "Required documentation",
        "Claim status tracking",
        "Appeals process",
      ],
    },
    {
      title: "Billing & Payments",
      articles: [
        "Payment methods",
        "Setting up auto-pay",
        "Understanding your bill",
        "Managing payment schedules",
      ],
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Knowledge Base</h1>
          <p className="text-muted-foreground mt-2">Find answers to common questions and learn more about our services</p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search knowledge base..."
            className="pl-10 w-full md:max-w-xl"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.articles.map((article) => (
                    <li key={article}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-primary hover:underline"
                      >
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default KnowledgeBase;