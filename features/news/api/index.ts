import directus from "@/lib/directus";
import { readItems, aggregate } from "@directus/sdk";
import { News } from "../types";


/* -----------------------------------------
   1. Latest News (Home Page)
------------------------------------------ */
export const getLatestNews = async (limit = 4): Promise<News[]> => {
  return (await directus.request(
    readItems("news", {
      fields: [
        "slug",
        "title",
        "description",
        "content",
        "category",
        "date_created",
        { image: ["id", "filename_disk"] },
      ],
      filter: {
        status: { _eq: "published" },
      },
      sort: ["-date_created"],
      limit,
    })
  )) as unknown as News[];
};

/* -----------------------------------------
   2. All News (Listing Page)
------------------------------------------ */
export const getAllNews = async (params: {
  search?: string;
  category?: string;
  page?: number;
  limit?: number;
}) => {
  const { search, category, page = 1, limit = 9 } = params;

  const filters: Record<string, unknown> = {
    status: { _eq: "published" },
  };

  // Search
  if (search) {
    filters._or = [
      { title: { _icontains: search } },
      { description: { _icontains: search } },
      { content: { _icontains: search } },
    ];
  }

  // Category filter
  if (category && category !== "all") {
    filters.category = { _eq: category };
  }

  const [newsResult, countResult] = await Promise.all([
    directus.request(
      readItems("news", {
        fields: [
          "slug",
          "title",
          "description",
          "category",
          "date_created",
          { image: ["id", "filename_disk"] },
        ],
        filter: filters,
        sort: ["-date_created"],
        page,
        limit,
      })
    ),
    directus.request(
      aggregate("news", {
        aggregate: { count: "*" },
        filter: filters,
      })
    ),
  ]);

  const total = Number(countResult[0]?.count) || 0;

  return {
    data: newsResult as unknown as News[],
    total,
  };
};

/* -----------------------------------------
   3. Single News by Slug
------------------------------------------ */
export const getNewsBySlug = async (slug: string): Promise<News> => {
  const news = await directus.request(
    readItems("news", {
      filter: {
        slug: { _eq: slug },
        status: { _eq: "published" },
      },
      fields: [
        "slug",
        "title",
        "description",
        "content",
        "date_created",
        { image: ["id", "filename_disk"] },
      ],
      limit: 1,
    })
  );

  return news[0] as unknown as News;
};
