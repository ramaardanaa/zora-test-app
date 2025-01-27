"use client"
import { CourseData } from "@/utils/type/course"
import Hero from "./sections/Hero"
import Experts from "./sections/Experts"
import CourseSyllabus from "./sections/CourseSyllabus"
import WhatYouWillLearn from "./sections/WhatYouWillLearn"
import CoursesYouMightLike from "./sections/CoursesYouMightLike"

type Props = {
  course: CourseData
  relatedCourse: CourseData[]
}

export default function CourseDetailPage({ course, relatedCourse }: Props) {
  return (
    <div className="mb-20">
      <Hero course={course} />
      <Experts course={course} />
      <CourseSyllabus course={course} />
      <WhatYouWillLearn />
      <CoursesYouMightLike relatedCourse={relatedCourse} />
    </div>
  )
}