import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DollarSign,
  FileText,
  Users,
  Search,
  Edit2,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const revenueData = [
  { month: "Jan", premium: 17271.4 },
  { month: "Feb", premium: 17271.6 },
  { month: "Mar", premium: 17271.8 },
  { month: "Apr", premium: 17272.0 },
  { month: "May", premium: 17272.2 },
  { month: "Jun", premium: 17272.4 },
];

const productData = [
  { name: "MOTOR PRIVATE", value: 85 },
  { name: "MOTOR COMMERCIAL", value: 15 },
];

const COLORS = ["#60A5FA", "#34D399"];

const transactions = [
  {
    policyNumber: "P/MRU-A13820/2024/12/00021",
    client: "Daniel Kibogo Mundia",
    product: "MOTOR PRIVATE",
    premium: 1712,
  },
  {
    policyNumber: "P/MRU-A13820/2024/12/00011",
    client: "Caroline Kathure Muriuki",
    product: "MOTOR PRIVATE",
    premium: 3424,
  },
];

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Welcome to the Monarch General Insurance Portal!</h1>
          <p className="text-gray-500">Monitor your insurance operations and performance</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Wallet Balance"
            value="Coming Soon"
            icon={DollarSign}
            className="bg-cyan-50"
          />
          <MetricCard
            title="Claims Incurred"
            value="1 Claims"
            icon={FileText}
            className="bg-emerald-50"
          />
          <MetricCard
            title="Premium"
            value="Ksh. 177,918.00"
            icon={DollarSign}
            className="bg-blue-50"
          />
          <MetricCard
            title="Commission Earned"
            value="Ksh. 17,793.00"
            icon={Users}
            className="bg-green-50"
          />
        </div>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">UNAUTHORIZED TRANSACTIONS</h2>
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input placeholder="Search..." className="pl-8" />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Policy Number</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Premium</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.policyNumber}>
                  <TableCell>{transaction.policyNumber}</TableCell>
                  <TableCell>{transaction.client}</TableCell>
                  <TableCell>{transaction.product}</TableCell>
                  <TableCell>{transaction.premium.toLocaleString()}</TableCell>
                  <TableCell>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit2 className="h-4 w-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">PRODUCTION ANALYTICS</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="premium"
                    stroke="#60A5FA"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">PRODUCTION BY PRODUCT</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={productData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {productData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-4">
                {productData.map((entry, index) => (
                  <div key={entry.name} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;