import { CourseData } from "@/utils/type/course";
import Image from "next/image";

export default function Experts({ course }: { course: CourseData }) {
  return (
    <div>
      <section className="container mt-20">
        <h2 className="font-pt-serif text-4xl tracking-tight">Experts you'll learn from</h2>
        <div className="flex flex-row flex-wrap gap-6 my-10">
          {course.experts.map(({ name, title, work, avatar }, index) => (
            <div key={index} className="flex w-[400px] p-5 border border-gray-200 rounded-xl">
              <div>
                <Image className="rounded-full" src={avatar} width={80} height={80} alt={name} />
              </div>
              <div className="flex-1 ms-5">
                <p className="font-semibold text-xl mb-1">{name}</p>
                <p className="leading-5">{title}</p>
                <p className="leading-5">{work}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button>Show 18 More</button>
        </div>
      </section>
    </div>
  )
}