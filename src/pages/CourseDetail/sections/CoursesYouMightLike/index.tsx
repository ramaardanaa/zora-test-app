import CourseCard from "@/components/CourseCard";
import { CourseData } from "@/utils/type/course";
import Link from "next/link";

export default function CoursesYouMightLike({ relatedCourse }: { relatedCourse: CourseData[] }) {
  if (!relatedCourse) return null;
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
      <div className="flex justify-center mt-10">
        <Link href="/courses">
          <button className="mx-auto bg-red text-white font-semibold p-4 rounded-lg mt-4">Explore All Courses</button>
        </Link>
      </div>
    </section>
  )
}