import summarizeList from "@/utils/summarizeList"
import { FiEye } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { formatNumberWithMetricPrefix } from "@/utils/formatNumberWithMetricPrefix";

type Props = {
  title: string
  description: string
  experts?: string[] | null
  viewCount?: number | null
  index: number
  slug: string
}

export default function CourseCard({ title, description, experts, viewCount, slug, index }: Props) {
  return (
    <Link className="flex flex-col justify-start items-stretch bg-beige-1 rounded-lg w-full md:w-[400px] relative" href={`/courses/${slug}`}>
      <div className="w-full h-[170px] rounded-lg relative">
        <Image src={`/assets/wave-${index % 6 + 1}.svg`} fill alt="wave pattern" />
      </div>
      <div className="flex flex-col gap-6 px-10 pb-20">
        <h2 className="font-editorial text-4xl md:text-5xl">{title}</h2>
        <p className="font-inter text-md">{description}</p>
        {experts?.length ? <p className="font-inter text-md w-10/12">Featuring Expert from <b>{summarizeList(experts)}</b></p> : null}
      </div>
      {viewCount ? <div className="absolute bottom-0 right-0 bg-beige-3 rounded-lg px-12 py-4 flex flex-row items-center gap-2 font-bold text-beige-4"><FiEye /> {formatNumberWithMetricPrefix(viewCount)} </div> : null}
    </Link>
  )
}