import CourseCard from "@/components/CourseCard";
import { CourseData } from "@/utils/type/course";

export default function CoursesYouMightLike({relatedCourse} : {relatedCourse: CourseData[]}) {
  return (
    <section className="container mt-20">
      <h2 className="font-pt-serif text-4xl tracking-tight mb-4">Other Courses You Might Like</h2>
      <div className="flex flex-row w-full flex-wrap gap-6 mt-10">
        {relatedCourse.map(({ id, title, description, viewCount, expertInstitution, slug }, index) => (
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