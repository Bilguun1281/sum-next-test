
import { User, FileText, FileCheck, File } from "lucide-react"
import { ITXTab, ITXSection } from "../types"

export const itxTabs: ITXTab[] = [
  { key: "mendchilgee", title: "ИТХ-ын даргын мэндчилгээ", icon: User },
  { key: "togtool", title: "ИТХ-ын тогтоол", icon: FileText },
  { key: "terguulegch-togtool", title: "ИТХ-ын тэргүүлэгчдийн тогтоол", icon: FileCheck },
  { key: "terguulegch-temdeglel", title: "ИТХ-ын тэргүүлэгчдийн тэмдэглэл", icon: File },
]

export const itxSections: ITXSection[] = [
  {
    title: "Чухал баримт бичиг",
    icon: FileText,
    items: [
      "Сумын хөгжлийн төлөвлөгөө",
      "ИТХ-ын тогтоолууд",
      "Тэргүүлэгчдийн тэмдэглэл",
    ],
  },
]
