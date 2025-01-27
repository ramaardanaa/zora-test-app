import { CourseData } from "@/utils/type/course";
import Image from "next/image";
import { FiClock } from "react-icons/fi";
import { LuPresentation } from "react-icons/lu";

export default function Hero({ course }: { course: CourseData }) {
  if (!course) return null;
  return (
    <div className="bg-beige-1">
      <div className="w-[100vw] h-[15vw] relative">
        <Image src={`/assets/wave-long-${course.id % 6 + 1}.svg`} fill objectFit="cover" alt="wave-long" />
      </div>
      <section className="container pb-28 flex flex-col gap-5">
        <div className="flex flex-row gap-7">
          <div className="flex flex-row gap-1 items-center">
            <LuPresentation className="text-md" />
            <p className="text-md font-semibold">{course.lessons.length} Lessons</p>
          </div>

          <div className="flex flex-row gap-1 items-center">
            <FiClock className="text-md" />
            <p className="text-md font-semibold">{course.courseDuration}</p>
          </div>
        </div>

        <div className="font-editorial tracking-tighter text-7xl">{course.title}</div>
        <div className="font-inter text-md mb-10">{course.description}</div>
        <div>
          <button className="px-5 py-3 mb-4 text-center text-white rounded-lg bg-[#d75555]">Start Learning</button><br />
          <button>Buy This Course {'>'}</button>
        </div>
      </section>
    </div>
  )
}