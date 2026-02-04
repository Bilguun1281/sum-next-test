// data/zdtsData.ts
import { FileText, Users, Briefcase, ClipboardCheck, FileCheck } from "lucide-react"
import { ZDTGTab, ZDTGSection } from "../types"

export const zdtsTabs: ZDTGTab[] = [
  { key: "durem", title: "ЗДТГ-ын дүрэм", icon: FileText, content: "ЗДТГ-ын дүрмийн агуулга энд..." },
  { key: "yos-zuin-durem", title: "Төрийн албан хаагчийн ёс зүйн дүрэм", icon: ClipboardCheck, content: "Ёс зүйн дүрмийн агуулга энд..." },
  { key: "zorilgo", title: "ЗДТГ-ын зорилго, зорилт", icon: Briefcase, content: "Зорилго, зорилтын агуулга энд..." },
  { key: "tushaal", title: "ЗДТГ-ын даргын тушаал", icon: FileCheck, content: "Тушаалын жагсаалт энд..." },
  { key: "butset", title: "ЗДТГ-ын бүтэц", icon: Users, content: "ЗДТГ-ын бүтэц энд..." },
]

export const zdtsSections: ZDTGSection[] = [
  {
    title: "Чухал баримт бичиг",
    icon: FileText,
    items: [
      "ЗДТГ-ын дүрэм",
      "Төрийн албан хаагчийн ёс зүйн дүрэм",
      "ЗДТГ-ын зорилго, зорилт",
      "Тушаалууд",
    ],
  },
]
