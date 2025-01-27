import { COURSES_DUMMY_DATA } from "@/constants/courseDatas";
import CoursesPage from "@/pages/CoursesPage";

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
export default async function Courses({
  searchParams,
}: PageProps) {

  const params = (await searchParams).filters

  const filteredCourses = COURSES_DUMMY_DATA.filter((course) => {
    if (!params) return true

    if (Array.isArray(params)) {
      return params.some(param => course.tags.includes(param));
    }
    return course.tags.includes(params);
  })

  if(filteredCourses.length === 0) {
    return {
      status: 404
    }
  }

  return (
    <CoursesPage courses={filteredCourses} params={params} />
  );
}
