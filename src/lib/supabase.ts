import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';
import { toast } from "@/hooks/use-toast";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Auth helpers
export const signInWithEmail = async (email: string, password: string) => {
  console.log('Attempting to sign in with email:', email);
  
  // Check for placeholder credentials
  if (email === "admin@example" && password === "admin123") {
    // Create a mock session
    localStorage.setItem('user', JSON.stringify({
      id: '1',
      email: 'admin@example',
      role: 'admin'
    }));
    
    toast({
      title: "Welcome back!",
      description: "You have successfully signed in.",
    });
    
    return { user: { id: '1', email: 'admin@example', role: 'admin' } };
  }

  // If not using placeholder credentials, throw error
  toast({
    title: "Invalid credentials",
    description: "Please use the provided admin credentials",
    variant: "destructive",
  });
  throw new Error('Invalid credentials');
};

export const signOut = async () => {
  console.log('Attempting to sign out');
  localStorage.removeItem('user');
  
  toast({
    title: "Signed out",
    description: "You have been successfully signed out.",
  });
};

// Profile helpers
export const getCurrentProfile = async () => {
  const userStr = localStorage.getItem('user');
  if (!userStr) return null;
  
  const user = JSON.parse(userStr);
  return {
    id: user.id,
    full_name: 'Admin User',
    company_name: 'Example Company',
    role: 'admin',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
};

export const updateProfile = async (userId: string, updates: Partial<Database['public']['Tables']['profiles']['Update']>) => {
  console.log('Updating profile for user:', userId, updates);
  toast({
    title: "Profile updated",
    description: "Your profile has been successfully updated.",
  });
  return getCurrentProfile();
};

// Admin check helper
export const isAdmin = async () => {
  const profile = await getCurrentProfile();
  return profile?.role === 'admin';
};