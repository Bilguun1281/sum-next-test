import { DirectusFile } from "@/types";

export type Tender = {
  content: unknown;
  slug: string;        // unique identifier for detail page
  title: string;
  status: "active" | "closed";
  deadline: string;
  budget: string;
  description?: string; // optional, for detailed page 
  date_created?: string; // optional, for sorting if needed
  files?: DirectusFile[]
};
