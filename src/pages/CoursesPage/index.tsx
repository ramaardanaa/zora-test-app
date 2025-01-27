'use client'
import LazyLoad from "@/components/LazyLoad";
import { CourseData } from "@/utils/type/course";
import dynamic from 'next/dynamic'
import Courses from "./sections/Courses";

type Props = {
  courses: CourseData[]
  params: string | string[] | undefined
}

const PopularLessons = dynamic(() => import('./sections/PopularLessons'))
const QuickReads = dynamic(() => import('./sections/QuickReads'))
const ExploreTopics = dynamic(() => import('./sections/ExploreTopics'))



export default function CoursesPage({ courses, params }: Props) {
  return (
    <div className="pb-10">
      <div className="bg-beige-1 text-foreground py-16">
        <div className="container">
          <h1 className="font-serif tracking-tighter text-[60px]">Courses</h1>
          <p className="font-inter text-md">Explore 30+ Courses and 200+ lessons taught by experts in their field.</p>
        </div>
      </div>
      <div className="container bg-white">
        <Courses courses={courses} params={params} />
        <LazyLoad>
          <PopularLessons />
          <QuickReads />
          <ExploreTopics />
        </LazyLoad>
      </div>
    </div>
  );
}