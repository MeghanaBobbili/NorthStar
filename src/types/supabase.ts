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
      broucher_downloads: {
        Row: {
          id: string
          created_at: string
          first_name: string
          last_name: string
          email: string
          phone: string
          project_name: string
        }
        Insert: {
          id?: string
          created_at?: string
          first_name: string
          last_name: string
          email: string
          phone: string
          project_name: string
        }
        Update: {
          id?: string
          created_at?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string
          project_name?: string
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