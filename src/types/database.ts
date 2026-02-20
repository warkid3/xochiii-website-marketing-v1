export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    public: {
        Tables: {
            wishlist: {
                Row: {
                    channel_link: string | null
                    created_at: string
                    email: string
                    id: string
                    name: string | null
                    organization: string | null
                    phone: string
                    type: string
                    website: string | null
                }
                Insert: {
                    channel_link?: string | null
                    created_at?: string
                    email: string
                    id?: string
                    name?: string | null
                    organization?: string | null
                    phone: string
                    type: string
                    website?: string | null
                }
                Update: {
                    channel_link?: string | null
                    created_at?: string
                    email?: string
                    id?: string
                    name?: string | null
                    organization?: string | null
                    phone?: string
                    type?: string
                    website?: string | null
                }
                Relationships: []
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
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
