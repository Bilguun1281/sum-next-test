type Props = { params: { tab: string; slug: string } }

export default async function AboutDetailPage({ params }: Props) {
  const { tab, slug } = await params

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{tab.toUpperCase()} Detail</h1>
      <p>Slug: {slug}</p>
    </div>
  )
}
