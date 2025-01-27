import ContentCard from "@/components/ContentCard";
import { QUICK_READS_DUMMY_DATA } from "@/constants/courseDatas";

export default function QuickReads() {
  return (
    <section>
      <h2 className="text-sm font-semibold mt-10">QUICK READS</h2>
      <div className="flex w-full flex-wrap mt-10 gap-[20px]">
        {QUICK_READS_DUMMY_DATA.map(({ id, title, label }) => (
          <ContentCard className="w-full md:w-[calc(50%-20px)]" key={id} label={label} title={title} />
        ))}
      </div>
      <div className="flex justify-end px-[20px]">
        <button className="mt-5 font-inter font-semibold cursor-pointer">Show 50 more</button>
      </div>
    </section>
  )
}