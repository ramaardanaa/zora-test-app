import { COURSES_DUMMY_DATA } from "@/constants/courseDatas";
import CourseDetailPage from "@/pages/CourseDetail";

export const revalidate = 3600 // 1 hour

export const dynamicParams = false

export async function generateStaticParams() {
  return COURSES_DUMMY_DATA.map((course) => ({
    slug: course.slug
  }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function CourseDetail({ params }: PageProps) {
  const slug = (await params).slug

  const relatedCourse = COURSES_DUMMY_DATA
    .filter((course) => course.slug !== slug)
    .slice(0, 8)
  
  const course = COURSES_DUMMY_DATA.find((course) => course.slug === slug)

  if (!course) {
    return {
      status: 404
    }
  }

  return <CourseDetailPage course={course} relatedCourse={relatedCourse} />
}