import { Button } from "@/components/ui/button";

interface CustomerFiltersProps {
  value: string;
  onChange: (value: string) => void;
}

export const CustomerFilters = ({ value, onChange }: CustomerFiltersProps) => {
  const filters = [
    { id: "all", label: "All Customers" },
    { id: "active", label: "Active Policies" },
    { id: "pending", label: "Pending" },
    { id: "expired", label: "Expired Policies" },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={value === filter.id ? "default" : "outline"}
          size="sm"
          onClick={() => onChange(filter.id)}
          className="flex-1 md:flex-none"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};