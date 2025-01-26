"use client"
import Accordion from "@/components/Accordion"
import CarouselQuote from "@/components/CarouselQuote"
import CourseCard from "@/components/CourseCard"
import { COURSES_DUMMY_DATA } from "@/constants/courseDatas"
import { CourseData } from "@/utils/type/course"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FiClock } from "react-icons/fi"
import { LuPresentation } from "react-icons/lu"
import { TbRosetteDiscountCheckFilled } from "react-icons/tb"

type Props = {
  course: CourseData
}

export default function CourseDetailPage({ course }: Props) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false)

  useEffect(() => {
    setAccordionOpen(false)
  }, [])

  return (
    <div className="mb-20">
      <div className="bg-beige-1">
        <div className="w-[100vw] h-[15vw] relative">
          <Image src="/assets/wave-long-6.svg" fill objectFit="cover" alt="wave-long" />
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
      <div className="container flex flex-row gap-20 flex-wrap mt-10">
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
      <section className="bg-beige-1 mt-10">
        <div className="container py-20">
          <h2 className="font-pt-serif text-4xl tracking-tight mb-4">What you'll learn</h2>
          <div className="w-3/5">
            IVF is complicated and-while we wish we could say that it's possible to absorb all the details during
            the 5-30 minute visits with your doctor-that's really not the case. TThis comprehensive gulde to IVF
            boils down every major issue you'll encounter-a high level overview of the IVF process, a deeper
            dive into the IVF process, IVF success rates and how they diffedepending on diagnosis and age,the
            medication protocols that can be used during IVF, the choice of inseminating eggs either using ICSI
            fertilization or conventional insemination, the pros and cons of growing embryos to Day 3 cleavage
            stage or Day 5 blastocyst stage, the decisions around geneticscreening of embryos, deciding which
            embryo to transfer, deciding how many embryos to transfer at once, the ways the IVF laboratory can
            impact your odds of success and the things you need to knowup front to avoid going to the wrong
            lab for you, the risks of IVF, and the costs of IVF.We're always ssure to provide details about how data
            might be different depending on unique types of patients-because inthe world of fertility, it's really
            not one-size-fits-all. We truly believe this guide is the foundation every fertility patient should start
            with when they're navigating the world of treatments.
          </div>
        </div>
      </section>

      <section className="container mt-20">
        <h2 className="font-pt-serif text-4xl tracking-tight mb-4">Other Courses You Might Like</h2>
        <div className="flex flex-row w-full flex-wrap gap-6 mt-10">
          {COURSES_DUMMY_DATA.slice(0, 7).map(({ id, title, description, viewCount, expertInstitution, slug }, index) => (
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
    </div>
  )
}