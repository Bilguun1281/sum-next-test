export type TenderItem = {
  content: any;
  slug: string;        // unique identifier for detail page
  title: string;
  status: "active" | "closed";
  deadline: string;
  budget: string;
  description?: string; // optional, for detailed page
};
