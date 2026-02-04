export type OrgCategory =
  | "school"
  | "kindergarten"
  | "health"
  | "culture"
  | "government"
  | "other"

export type Organization = {
  slug: string
  name: string
  category: OrgCategory
  categoryName: string // display name
  logo: string
  description: string
  phone?: string
  email?: string
  website?: string
  workingHours?: string
}
