// features/law/api.ts
import { LawDoc } from "../types"

export const lawDocs: LawDoc[] = [
  {
    title: "Сумын нутгийн өөрөө удирдах тогтолцоо",
    category: "Нутгийн өөрөө удирдах",
    date: "2025-01-10",
    description: "Сумын нутгийн өөрөө удирдах байгууллагын эрх, үүрэг, зохион байгуулалтын тухай.",
    link: "/docs/self-governance.pdf",
  },
  {
    title: "Орон нутгийн татварын журам",
    category: "Татвар",
    date: "2024-12-20",
    description: "Орон нутгийн татвар ногдуулах, бүртгэх, хураах журам.",
    link: "/docs/tax-regulation.pdf",
  },
  {
    title: "Албан тушаалтны ёс зүйн дүрэм",
    category: "Ёс зүй",
    date: "2024-11-30",
    description: "Сумын албан тушаалтны ёс зүйн дүрэм, сахилгын зохицуулалт.",
    link: "/docs/ethics-rule.pdf",
  },
]

// features/law/api.ts
export const lawLinks = [
  {
    label: "Монгол Улсын хууль эрх зүйн портал",
    url: "https://legalinfo.mn",
    icon: "/images/logo.svg", 
  },
  {
    label: "Засгийн газрын албан ёсны сайт",
    url: "https://gov.mn",
    icon: "/images/news_2.jpg", 
  },
  {
    label: "Татварын ерөнхий газар",
    url: "https://www.mta.mn",
    icon: "/images/news_2.jpg", 
  },
]
