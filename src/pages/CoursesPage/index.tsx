import ContentCard from "@/components/ContentCard";
import CourseCard from "@/components/CourseCard";
import FilterBar from "@/components/FilterBar";
import TopicCard from "@/components/TopicCard";
import { COURSES_DUMMY_DATA, EXPLORE_TOPICS_DUMMY_DATA, LESSONS_DUMMY_DATA, QUICK_READS_DUMMY_DATA } from "@/constants/courseDatas";

export default function CoursesPage() {
  return (
    <div className="pb-10">
      <div className="bg-beige-1 text-foreground px-10 py-16">
        <h1 className="font-serif tracking-tighter text-[60px]">Courses</h1>
        <p className="font-inter text-md">Explore 30+ Courses and 200+ lessons taught by experts in their field.</p>
      </div>
      <div className="bg-white">
        <section className="px-10">
          <FilterBar />
          <h2 className="text-sm font-semibold mt-10">COURSES ({COURSES_DUMMY_DATA.length})</h2>
          <div className="flex flex-row w-full flex-wrap gap-6 mt-10">
            {COURSES_DUMMY_DATA.map(({ id, title, description, viewCount, expertInstitution }, index) => (
              <CourseCard key={id} title={title} description={description} viewCount={viewCount} experts={expertInstitution} index={index} />
            ))}
          </div>
        </section>

        <section className="px-10">
          <h2 className="text-sm font-semibold mt-10">POPULAR LESSONS</h2>
          <div className="flex w-full flex-wrap mt-10 gap-[20px]">
            {LESSONS_DUMMY_DATA.map(({ id, title, courseLabel }) => (
              <ContentCard className="w-[calc(50%-20px)]" key={id} label={courseLabel} title={title} />
            ))}
          </div>
        </section>

        <section className="px-10">
          <h2 className="text-sm font-semibold mt-10">QUICK READS</h2>
          <div className="flex w-full flex-wrap mt-10 gap-[20px]">
            {QUICK_READS_DUMMY_DATA.map(({ id, title, label }) => (
              <ContentCard className="w-[calc(50%-20px)]" key={id} label={label} title={title} />
            ))}
          </div>
          <div className="flex justify-end px-[20px]">
            <button className="mt-5 font-inter font-semibold cursor-pointer">Show 50 more</button>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold mt-10 px-10">EXPLORE TOPICS</h2>
          <div className="flex flex-col mt-10 gap-[20px]">
            {EXPLORE_TOPICS_DUMMY_DATA.map(({ id, title, viewCount }) => (
              <TopicCard className="w-[calc(50%-20px)]" key={id} title={title} viewCount={viewCount}/>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}