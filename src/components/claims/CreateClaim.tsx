import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useToast } from "@/components/ui/use-toast";
import { createClaim, uploadFile } from "@/lib/api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const CreateClaim = () => {
  const [lossDate, setLossDate] = useState<Date>();
  const [notificationDate, setNotificationDate] = useState<Date>();
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [risk, setRisk] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!lossDate || !notificationDate || !risk) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Create the claim
      const claim = await createClaim({
        claim_number: `CLM-${Date.now()}`,
        policy_id: "placeholder", // You'll need to get this from the selected policy
        customer_id: "placeholder", // You'll need to get this from the current user
        status: "pending",
        description,
        submitted_date: new Date().toISOString(),
      });

      // Upload file if present
      if (file) {
        const path = `claims/${claim.id}/${file.name}`;
        await uploadFile('claims', path, file);
      }

      toast({
        title: "Success",
        description: "Claim created successfully",
      });

      // Reset form
      setLossDate(undefined);
      setNotificationDate(undefined);
      setDescription("");
      setLocation("");
      setRisk("");
      setFile(null);
    } catch (error) {
      console.error('Error creating claim:', error);
      toast({
        title: "Error",
        description: "Failed to create claim. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-4 max-h-[calc(100vh-6rem)] overflow-y-auto px-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Create New Claim</h1>
          <p className="text-gray-500">Fill in the details to submit a new claim</p>
        </div>
        
        <Card className="p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-6 text-primary">Claim Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-600">Loss Date *</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !lossDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {lossDate ? format(lossDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={lossDate}
                      onSelect={setLossDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-600">Risk *</label>
                <Select value={risk} onValueChange={setRisk}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Risk" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fire">Fire</SelectItem>
                    <SelectItem value="theft">Theft</SelectItem>
                    <SelectItem value="accident">Accident</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-600">Loss Description</label>
                <Textarea 
                  placeholder="Enter loss description"
                  className="min-h-[100px] resize-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-600">Notification Date *</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !notificationDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {notificationDate ? format(notificationDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={notificationDate}
                      onSelect={setNotificationDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-600">Location</label>
                <Input 
                  placeholder="Enter location" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-600">Claim File</label>
                <Input 
                  type="file" 
                  className="cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <Button variant="outline" disabled={isSubmitting}>Cancel</Button>
            <Button 
              className="bg-success hover:bg-success/90" 
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Claim"}
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};