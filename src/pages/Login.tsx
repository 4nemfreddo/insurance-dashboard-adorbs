import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Lock, Mail, KeyRound } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Temporary admin credentials
const ADMIN_CREDENTIALS = {
  email: "admin@nexusguard.com",
  password: "admin123"
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Login attempt with:", { email });

    try {
      if (email && password) {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        // Check if admin credentials
        const isAdmin = email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password;
        
        // Store user info in localStorage
        localStorage.setItem('user', JSON.stringify({
          name: email.split('@')[0],
          email: email,
          isAdmin: isAdmin
        }));

        toast({
          title: "Welcome back!",
          description: `Good to see you, ${email.split('@')[0]}!`,
        });

        // Redirect based on user type
        navigate(isAdmin ? "/admin" : "/");
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please enter both email and password",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Please check your credentials and try again",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <Card className="w-full max-w-md backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 shadow-xl border-0">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center mb-4">
            <Lock className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Welcome to NexusGuard</CardTitle>
          <CardDescription className="text-base">
            Sign in to access your insurance dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <KeyRound className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12 bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 text-base font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200" 
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
            <div className="text-center text-sm text-muted-foreground mt-4 space-y-1">
              <p>Demo credentials:</p>
              <p>Admin Email: admin@nexusguard.com</p>
              <p>Admin Password: admin123</p>
              <p>Regular User Email: demo@nexusguard.com</p>
              <p>Regular Password: any password will work</p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;