import Accordion from "@/components/Accordion";
import CarouselQuote from "@/components/CarouselQuote";
import { CourseData } from "@/utils/type/course";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

export default function CourseSyllabus({course} : {course: CourseData}) {
  if (!course) return null;
  return (
    <div className="container flex flex-row gap-20 flex-wrap mt-10 pb-20">
        <div className="flex flex-col gap-4 flex-grow">
          <div className=" flex flex-row w-full justify-between items-center gap-4">
            <div className="flex flex-row gap-2">
              <TbRosetteDiscountCheckFilled color="#72b9a5" size={40} />
              <div className="font-inter">
                <p>"Full refund within 30 days, no questions asked"</p>
                <p>Eligible for FSA/HSA</p>
              </div>
            </div>
            <div className="font-pt-serif tracking-tighter text-4xl">
              {course.price}
            </div>
          </div>


          <section>
            <h2 className="font-pt-serif text-4xl tracking-tight mt-10">Course Syllabus</h2>
            <div className="flex flex-col mt-5 gap-4">
              <div className="flex flex-col gap-4">
                {course.lessons.map((lesson, index) => (
                  <Accordion
                    key={index}
                    title={
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col">
                          <h3 className="font-inter text-md">{lesson.label}</h3>
                          <h2 className="font-editorial text-2xl">{lesson.title}</h2>
                        </div>
                        <p className="font-inter text-md">{lesson.duration}</p>
                      </div>
                    }
                    id={`lessons-${index}`}
                  >
                    {lesson.sections.map((section, index) => (
                      <div key={index} className="border-y border-gray-200 p-4">
                        <p className="font-inter text-md">{section}</p>
                      </div>
                    ))}
                  </Accordion>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="flex flex-col gap-4">
          <CarouselQuote experts={course.experts}/>
        </div>
      </div>
  )
}