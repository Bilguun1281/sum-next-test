// types/organization.ts
export type Service = {
  name: string
  description: string
}

export type Organization = {
  slug: string
  name: string
  category: OrgCategory          // <-- added for filtering
  categoryName: string           // human-readable name
  description: string
  logo: string
  phone?: string
  email?: string
  website?: string
  workingHours?: string
  address?: string
  services?: Service[]  // Array of services
}

export type OrgCategory =
  | "school"
  | "kindergarten"
  | "health"
  | "culture"
  | "government"
  | "other"
