import ContentCard from "@/components/ContentCard";
import { LESSONS_DUMMY_DATA } from "@/constants/courseDatas";

export default function PopularLessons() {
  return (
    <section>
      <h2 className="text-sm font-semibold mt-10">POPULAR LESSONS</h2>
      <div className="flex w-full flex-wrap mt-10 gap-[20px]">
        {LESSONS_DUMMY_DATA.map(({ id, title, courseLabel }) => (
          <ContentCard className="w-full md:w-[calc(50%-20px)]" key={id} label={courseLabel} title={title} />
        ))}
      </div>
    </section>
  )
}