type Props = { params: { tab: string } }

export default async function AboutTabPage({ params }: Props) {
  const { tab } = await params

  switch (tab) {
    case "taniltsuulga":
      return <div>📖 Танилцуулгын агуулга энд</div>
    case "sumyn-bilegdel":
      return <div>🏞 Сумын билэгдлийн агуулга энд</div>
    case "aldartnuud":
      return <div>🌟 Алдартнуудын жагсаалт энд</div>
    case "tuuhen-dursgalt-gazuud":
      return <div>🏰 Түүхэн дурсгалт газруудын мэдээлэл энд</div>
    case "baigaliin-uzesgelen-gazuud":
      return <div>🏔 Байгалийн үзэсгэлэн газрууд энд</div>
    case "nutgiin-udirdlaga":
      return <div>🧑‍💼 Нутгийн удирдлагын мэдээлэл энд</div>
    default:
      return <div>❌ Tab not found</div>
  }
}
