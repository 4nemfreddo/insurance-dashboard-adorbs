import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Globe, TrendingUp } from "lucide-react";

const CompanyMetrics = [
  {
    title: "Total Employees",
    value: "250+",
    icon: Users,
    description: "Across multiple locations"
  },
  {
    title: "Global Presence",
    value: "15+",
    icon: Globe,
    description: "Countries worldwide"
  },
  {
    title: "Years of Excellence",
    value: "25+",
    icon: Building,
    description: "Industry experience"
  },
  {
    title: "Annual Growth",
    value: "30%",
    icon: TrendingUp,
    description: "Year over year"
  }
];

const Company = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Company Overview</h1>
          <p className="text-muted-foreground">
            Learn more about our company's mission, values, and achievements
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {CompanyMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    {metric.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>About Us</CardTitle>
              <CardDescription>Our story and mission</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We are a leading insurance solutions provider committed to delivering
                innovative and reliable coverage options. Our mission is to protect
                what matters most to our clients through comprehensive insurance
                solutions and exceptional service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Values</CardTitle>
              <CardDescription>What drives us forward</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Integrity in all our dealings</li>
                <li>Customer-first approach</li>
                <li>Innovation in solutions</li>
                <li>Excellence in service</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Company;