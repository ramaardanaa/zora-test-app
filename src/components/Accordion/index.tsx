'use client'

import { useState, useEffect } from 'react'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'

type AccordionpProps = {
  children: React.ReactNode
  title: string | React.ReactNode
  id: string,
  active?: boolean
}

export default function Accordion({
  children,
  title,
  id,
  active = false
}: AccordionpProps) {

  const [accordionOpen, setAccordionOpen] = useState<boolean>(false)

  useEffect(() => {
    setAccordionOpen(active)
  }, [])

  return (
    <div className="border border-gray-200 rounded-lg">
      <h2 className='py-4 px-4'>
        <button
          className="flex items-center justify-between w-full text-left font-semibold py-2"
          onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
        >
          {title}
          <GoChevronDown className={`transform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        className={`grid text-md text-black overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}