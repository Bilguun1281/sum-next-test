// types/zdts.ts
import { LucideIcon } from "lucide-react"

export type ZDTGTab = {
  key: string
  title: string
  icon?: LucideIcon // store the actual component, not a string
  content?: string
}

export type ZDTGSection = {
  title: string
  icon: LucideIcon
  items: string[]
}
