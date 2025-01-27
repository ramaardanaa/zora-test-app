import CourseCard from "@/components/CourseCard";
import FilterBar from "@/components/FilterBar";
import { CourseData } from "@/utils/type/course";

type Props = {
  courses: CourseData[]
  params: string | string[] | undefined
}

export default function Courses({ courses, params }: Props) {
  
  const tabs = [
    { name: 'All', href: '/', current: params === undefined },
    { name: 'Introductory', href: '?filters=introductory', current: params === 'introductory' },
    { name: 'Advanced', href: '?filters=advanced', current: params === 'advanced' },
    { name: 'Population Specific', href: '?filters=population_specific', current:  params === 'population_specific' },
  ]

  return (
    <section>
      <FilterBar tabs={tabs} />
      <h2 className="text-sm font-semibold mt-10">COURSES ({courses.length})</h2>
      <div className="flex flex-row w-full flex-wrap gap-6 mt-10">
        {courses.map(({ id, title, description, viewCount, expertInstitution, slug }, index) => (
          <CourseCard
            key={id}
            title={title}
            description={description}
            viewCount={viewCount}
            experts={expertInstitution}
            index={index}
            slug={slug}
          />
        ))}
      </div>
    </section>
  )
}