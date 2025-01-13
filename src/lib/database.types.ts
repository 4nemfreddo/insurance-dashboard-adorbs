export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          company_name: string | null
          role: 'admin' | 'user'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          company_name?: string | null
          role?: 'admin' | 'user'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          company_name?: string | null
          role?: 'admin' | 'user'
          created_at?: string
          updated_at?: string
        }
      }
      companies: {
        Row: {
          id: string
          name: string
          address: string | null
          contact_email: string | null
          phone: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          address?: string | null
          contact_email?: string | null
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          address?: string | null
          contact_email?: string | null
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      policies: {
        Row: {
          id: string
          policy_number: string
          customer_id: string
          company_id: string
          type: string
          status: 'active' | 'expired' | 'cancelled' | 'pending'
          start_date: string
          end_date: string
          premium: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          policy_number: string
          customer_id: string
          company_id: string
          type: string
          status?: 'active' | 'expired' | 'cancelled' | 'pending'
          start_date: string
          end_date: string
          premium: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          policy_number?: string
          customer_id?: string
          company_id?: string
          type?: string
          status?: 'active' | 'expired' | 'cancelled' | 'pending'
          start_date?: string
          end_date?: string
          premium?: number
          created_at?: string
          updated_at?: string
        }
      }
      claims: {
        Row: {
          id: string
          claim_number: string
          policy_id: string
          customer_id: string
          status: 'pending' | 'approved' | 'rejected' | 'in_review'
          description: string | null
          amount: number | null
          submitted_date: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          claim_number: string
          policy_id: string
          customer_id: string
          status?: 'pending' | 'approved' | 'rejected' | 'in_review'
          description?: string | null
          amount?: number | null
          submitted_date: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          claim_number?: string
          policy_id?: string
          customer_id?: string
          status?: 'pending' | 'approved' | 'rejected' | 'in_review'
          description?: string | null
          amount?: number | null
          submitted_date?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}