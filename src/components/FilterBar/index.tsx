import Link from "next/link"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function FilterBar({tabs}: {tabs: {name: string, href: string, current: boolean}[]}) {
  return (
    <div>
      <div className="hidden sm:block">
        <div className="border-b-2 border-beige-2"> 
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? 'border-red text-foreground border-b-[3px]'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
