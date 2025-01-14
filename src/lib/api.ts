import { supabase } from './supabase';
import { Policy, Claim } from '@/types/supabase';

// Policies
export const getPolicies = async () => {
  console.log('Fetching policies');
  const { data, error } = await supabase
    .from('policies')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching policies:', error);
    throw error;
  }

  console.log('Fetched policies:', data);
  return data;
};

export const createPolicy = async (policy: Omit<Policy, 'id' | 'created_at' | 'updated_at'>) => {
  console.log('Creating policy:', policy);
  const { data, error } = await supabase
    .from('policies')
    .insert(policy)
    .select()
    .single();

  if (error) {
    console.error('Error creating policy:', error);
    throw error;
  }

  console.log('Created policy:', data);
  return data;
};

// Claims
export const getClaims = async () => {
  console.log('Fetching claims');
  const { data, error } = await supabase
    .from('claims')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching claims:', error);
    throw error;
  }

  console.log('Fetched claims:', data);
  return data;
};

export const createClaim = async (claim: Omit<Claim, 'id' | 'created_at' | 'updated_at'>) => {
  console.log('Creating claim:', claim);
  const { data, error } = await supabase
    .from('claims')
    .insert(claim)
    .select()
    .single();

  if (error) {
    console.error('Error creating claim:', error);
    throw error;
  }

  console.log('Created claim:', data);
  return data;
};

// File Storage
export const uploadFile = async (
  bucket: string,
  path: string,
  file: File
) => {
  console.log('Uploading file:', { bucket, path, fileName: file.name });
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    console.error('Error uploading file:', error);
    throw error;
  }

  console.log('Uploaded file:', data);
  return data;
};

export const getFileUrl = (bucket: string, path: string) => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
};

// Real-time subscriptions
export const subscribeToClaimUpdates = (
  callback: (payload: any) => void
) => {
  console.log('Setting up claims subscription');
  const subscription = supabase
    .channel('claims_channel')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'claims',
      },
      (payload) => {
        console.log('Received claim update:', payload);
        callback(payload);
      }
    )
    .subscribe();

  return () => {
    console.log('Cleaning up claims subscription');
    subscription.unsubscribe();
  };
};

export const subscribeToPolicyUpdates = (
  callback: (payload: any) => void
) => {
  console.log('Setting up policies subscription');
  const subscription = supabase
    .channel('policies_channel')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'policies',
      },
      (payload) => {
        console.log('Received policy update:', payload);
        callback(payload);
      }
    )
    .subscribe();

  return () => {
    console.log('Cleaning up policies subscription');
    subscription.unsubscribe();
  };
};