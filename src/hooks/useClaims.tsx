import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

interface Claim {
  id: string;
  policyNumber: string;
  claimType: string;
  dateSubmitted: string;
  claimAmount: string;
  status: string;
}

// Mock API call - in real app, this would be an actual API call
const fetchClaims = async (): Promise<Claim[]> => {
  console.log("Fetching claims data");
  return [
    {
      id: "CLM-001",
      policyNumber: "POL-2024-001",
      claimType: "Auto Accident",
      dateSubmitted: "2024-03-15",
      claimAmount: "$5,000",
      status: "pending",
    },
    {
      id: "CLM-002",
      policyNumber: "POL-2024-003",
      claimType: "Property Damage",
      dateSubmitted: "2024-03-14",
      claimAmount: "$12,500",
      status: "approved",
    },
    {
      id: "CLM-003",
      policyNumber: "POL-2024-002",
      claimType: "Medical",
      dateSubmitted: "2024-03-13",
      claimAmount: "$8,750",
      status: "rejected",
    },
  ];
};

export const useClaims = (searchQuery: string) => {
  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);

  // Use useEffect for debouncing search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const {
    data: claims,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["claims", debouncedSearch],
    queryFn: fetchClaims,
  });

  const filteredClaims = claims?.filter(
    (claim) =>
      claim.id.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      claim.policyNumber.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      claim.claimType.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return {
    claims: filteredClaims,
    isLoading,
    error,
  };
};