import { formatNumberWithMetricPrefix } from "@/utils/formatNumberWithMetricPrefix"
import { FiEye } from "react-icons/fi"


type Props = {
  title: string
  viewCount: number
  className?: string
}

export default function TopicCard({ title, viewCount, className }: Props) {
  return (
    <div className={`${className} flex flex-row items-center cursor-pointer`}>
      <div className="flex flex-row items-center">
        <div className="bg-peach w-10 h-[3px] rounded-full"></div>
        <div className="bg-peach w-20 h-20 rounded-full"></div>
      </div>
      <div className="p-4 gap-2 flex flex-row">
        <h2 className="font-editorial text-2xl md:text-5xl tracking-tight">{title}</h2>
        <div className="font-inter text-md flex flex-row items-start">
          <p className="flex flex-row items-center font-semibold gap-1 text-sm mt-2"><FiEye />{formatNumberWithMetricPrefix(viewCount)}</p>
        </div>
      </div>
    </div>
  )
}