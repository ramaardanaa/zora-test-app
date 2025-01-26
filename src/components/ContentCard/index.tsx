import Link from "next/link";

type Props = {
  title: string
  label: string
  className?: string
}

export default function ContentCard({ title, label, className }: Props) {
  return (
    <div className={`${className} bg-beige-3 rounded-lg cursor-pointer`}>
      <div className="p-4 gap-2 flex flex-col">
        <p className="font-inter text-sm font-semibold">{label.toUpperCase()}</p>
        <h2 className="font-editorial text-3xl">{title}</h2>
      </div>
    </div>
  )
}
