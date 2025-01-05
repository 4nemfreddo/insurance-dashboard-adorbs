import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface CustomerSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const CustomerSearch = ({ value, onChange }: CustomerSearchProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder="Search customers by name, policy number, or contact..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10"
      />
    </div>
  );
};