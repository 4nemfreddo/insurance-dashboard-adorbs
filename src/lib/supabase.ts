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
  
  try {
    const { data: { user }, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      console.error('Sign in error:', signInError.message);
      console.error('Full error details:', signInError);
      toast({
        title: "Authentication Error",
        description: signInError.message,
        variant: "destructive",
      });
      throw signInError;
    }

    if (!user) {
      const noUserError = new Error('No user returned after successful sign in');
      console.error(noUserError);
      throw noUserError;
    }

    console.log('User signed in successfully:', user.id);

    // Fetch the user's profile to get their role
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (profileError) {
      console.error('Profile fetch error:', profileError.message);
      console.error('Full profile error details:', profileError);
      throw profileError;
    }

    console.log('Profile fetched successfully:', profile);

    toast({
      title: "Welcome back!",
      description: "You have successfully signed in.",
    });

    return { user: { ...user, role: profile.role } };
  } catch (error) {
    console.error('Sign in process error:', error);
    throw error;
  }
};

export const signOut = async () => {
  console.log('Attempting to sign out');
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    console.error('Sign out error:', error.message);
    throw error;
  }
  
  toast({
    title: "Signed out",
    description: "You have been successfully signed out.",
  });
};

// Profile helpers
export const getCurrentProfile = async () => {
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  
  if (authError) {
    console.error('Auth error:', authError.message);
    return null;
  }

  if (!user) {
    return null;
  }

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (profileError) {
    console.error('Profile fetch error:', profileError.message);
    return null;
  }

  return profile;
};

export const updateProfile = async (userId: string, updates: Partial<Database['public']['Tables']['profiles']['Update']>) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();

  if (error) {
    console.error('Profile update error:', error.message);
    toast({
      title: "Update failed",
      description: error.message,
      variant: "destructive",
    });
    throw error;
  }

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