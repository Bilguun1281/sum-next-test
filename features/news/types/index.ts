export type News = {
  slug: string
  title: string
  description: string
  content: string
  category: string
  image: {
    id: string
    filename_disk: string
  } | null
  date_created: string
}
