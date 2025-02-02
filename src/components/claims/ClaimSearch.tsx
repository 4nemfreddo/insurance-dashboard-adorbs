import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ClaimSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const ClaimSearch = ({ searchQuery, setSearchQuery }: ClaimSearchProps) => {
  console.log("Rendering ClaimSearch component", { searchQuery });

  return (
    <div className="flex items-center space-x-2 max-w-sm mb-6">
      <div className="relative w-full">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search claims..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};