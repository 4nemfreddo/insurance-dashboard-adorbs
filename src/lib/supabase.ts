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
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error('Sign in error:', error.message);
    toast({
      title: "Error signing in",
      description: error.message,
      variant: "destructive",
    });
    throw error;
  }

  console.log('Sign in successful:', data);
  toast({
    title: "Welcome back!",
    description: "You have successfully signed in.",
  });
  return data;
};

export const signUp = async (email: string, password: string) => {
  console.log('Attempting to sign up with email:', email);
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`,
      data: {
        role: 'user', // Default role for new users
      }
    },
  });

  if (error) {
    console.error('Sign up error:', error.message);
    toast({
      title: "Error signing up",
      description: error.message,
      variant: "destructive",
    });
    throw error;
  }

  console.log('Sign up successful:', data);
  toast({
    title: "Welcome!",
    description: "Please check your email to confirm your account.",
  });
  return data;
};

export const signOut = async () => {
  console.log('Attempting to sign out');
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    console.error('Sign out error:', error.message);
    toast({
      title: "Error signing out",
      description: error.message,
      variant: "destructive",
    });
    throw error;
  }

  console.log('Sign out successful');
  toast({
    title: "Signed out",
    description: "You have been successfully signed out.",
  });
};

// Profile helpers
export const getCurrentProfile = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  console.log('Fetching profile for user:', user.id);
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) {
    console.error('Error fetching profile:', error.message);
    throw error;
  }

  console.log('Profile fetched:', profile);
  return profile;
};

export const updateProfile = async (userId: string, updates: Partial<Database['public']['Tables']['profiles']['Update']>) => {
  console.log('Updating profile for user:', userId, updates);
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();

  if (error) {
    console.error('Error updating profile:', error.message);
    toast({
      title: "Error updating profile",
      description: error.message,
      variant: "destructive",
    });
    throw error;
  }

  console.log('Profile updated:', data);
  toast({
    title: "Profile updated",
    description: "Your profile has been successfully updated.",
  });
  return data;
};

// Admin check helper
export const isAdmin = async () => {
  const profile = await getCurrentProfile();
  return profile?.role === 'admin';
};