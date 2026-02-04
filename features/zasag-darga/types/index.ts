// types/zasag-darga.ts
import { LucideIcon } from "lucide-react"

// Tab type
export type ZDTab = {
  key: string
  title: string
  icon?: LucideIcon
  content: string
}

// Staff type
export type Staff = {
  profile: string
  name: string
  position: string
  email?: string
  phone?: string
  office?: string
}
