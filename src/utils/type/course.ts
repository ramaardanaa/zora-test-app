export type CourseData = {
  id: number
  title: string
  description: string
  lessons: Lesson[]
  experts: Expert[]
  price: string
  courseDuration: string
  viewCount: number | null
  slug: string
  expertInstitution: string[] | null
}

export type Lesson = {
  id: number
  title: string
  label: string
  duration: string
  sections: string[]
}

export type Expert = {
  name: string
  title: string
  avatar: string
  work: string
  quote: string
}