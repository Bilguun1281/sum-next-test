// types/itx.ts
import { LucideIcon } from "lucide-react"

export type ITXTab = {
  key: string
  title: string
  icon?: LucideIcon
  content?: string
}

export type ITXSection = {
  title: string
  icon: LucideIcon
  items: string[]
}
