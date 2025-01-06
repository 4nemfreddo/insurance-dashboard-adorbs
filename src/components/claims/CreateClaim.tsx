import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const CreateClaim = () => {
  const [lossDate, setLossDate] = useState<Date>();
  const [notificationDate, setNotificationDate] = useState<Date>();

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-6">CLAIM DETAILS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Loss Date *</label>
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
            <label className="block text-sm mb-1">Risk</label>
            <Select>
              <option value="">Select Risk</option>
              <option value="fire">Fire</option>
              <option value="theft">Theft</option>
              <option value="accident">Accident</option>
            </Select>
          </div>

          <div>
            <label className="block text-sm mb-1">Loss Description</label>
            <Textarea 
              placeholder="Enter loss description"
              className="min-h-[120px]"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Notification Date *</label>
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
            <label className="block text-sm mb-1">Location</label>
            <Input placeholder="Enter location" />
          </div>

          <div>
            <label className="block text-sm mb-1">Claim File</label>
            <Input type="file" className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <Button variant="outline">Cancel</Button>
        <Button>Confirm</Button>
      </div>
    </Card>
  );
};