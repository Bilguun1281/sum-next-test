import directus from "@/lib/directus"
import { readItems, aggregate } from "@directus/sdk"
import { Tender } from "../types"

/* -----------------------------------------
   1. Latest Tenders (for homepage or limited lists)
------------------------------------------ */
export const getLatestTenders = async (limit = 4): Promise<Tender[]> => {
  const tenders = await directus.request(
    readItems("tender", {
      fields: [
        "slug",
        "title",
        "status",
        "deadline",
        "budget",
        "description",
        "date_created",
      ],
      sort: ["-date_created"],
      limit,
    })
  )

  return tenders as unknown as Tender[]
}

/* -----------------------------------------
   2. All Tenders (with optional status filter, pagination)
------------------------------------------ */
export const getAllTenders = async (params?: {
  status?: "active" | "closed" | "all"
  page?: number
  limit?: number
}) => {
  const { status = "all", page = 1, limit = 10 } = params || {}

  const filters: Record<string, unknown> = {}

  if (status !== "all") {
    filters.status = { _eq: status }
  }

  const [tendersResult, countResult] = await Promise.all([
    directus.request(
      readItems("tender", {
        fields: [
          "slug",
          "title",
          "status",
          "deadline",
          "budget",
          "description",
          "date_created",
        ],
        filter: filters,
        sort: ["-date_created"],
        page,
        limit,
      })
    ),
    directus.request(
      aggregate("tender", {
        aggregate: { count: "*" },
        filter: filters,
      })
    ),
  ])

  const total = Number(countResult[0]?.count) || 0

  return {
    data: tendersResult as unknown as Tender[],
    total,
  }
}

/* -----------------------------------------
   3. Single Tender by Slug
------------------------------------------ */
export const getTenderBySlug = async (slug: string): Promise<Tender | null> => {
  const tender = await directus.request(
    readItems("tender", {
      filter: { slug: { _eq: slug } },
      fields: [
        "slug",
        "title",
        "status",
        "deadline",
        "budget",
        "description",
        "content",
        "date_created",
        "files.*", // Fetch all file fields for related files
      ],
      limit: 1,
    })
  )
  return (tender[0] as unknown as Tender) ?? null
}
