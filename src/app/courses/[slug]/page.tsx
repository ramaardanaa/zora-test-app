import { COURSES_DUMMY_DATA } from "@/constants/courseDatas";
import CourseDetailPage from "@/pages/CourseDetail";

export default function CourseDetail(){
  return <CourseDetailPage course={COURSES_DUMMY_DATA[0]}/>
}