import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, FileText, HelpCircle, Search } from "lucide-react";

const categories = [
  {
    title: "Getting Started",
    icon: BookOpen,
    articles: [
      "Insurance Policy Basics",
      "How to File a Claim",
      "Understanding Coverage Types"
    ]
  },
  {
    title: "Policy Management",
    icon: FileText,
    articles: [
      "Updating Policy Information",
      "Premium Payment Options",
      "Policy Renewal Process"
    ]
  },
  {
    title: "Common Questions",
    icon: HelpCircle,
    articles: [
      "Coverage Limits Explained",
      "Deductibles Overview",
      "Claims Processing Timeline"
    ]
  }
];

const KnowledgeBase = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Knowledge Base</h1>
          <p className="text-muted-foreground">
            Find answers to common questions and learn more about our services
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search knowledge base..."
            className="pl-8"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="hover:bg-accent/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <li
                        key={articleIndex}
                        className="text-sm text-muted-foreground hover:text-primary cursor-pointer"
                      >
                        {article}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default KnowledgeBase;