import { NAVBAR } from '@/constants/navbar'
import Link from 'next/link';
import { LuSearch } from 'react-icons/lu';
export default function Navbar() {
  return (
    <nav className="flex items-center w-full p-4 bg-whiteborder-b border-b-2 border-beige-2">
      <div className="container flex space-x-4 font-inter font-semibold items-center justify-end text-sm">
        <div className="hidden md:flex gap-x-4">
          {NAVBAR.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button className="p-2 text-foreground hover:text-primary text-2xl">
          <LuSearch />
        </button>
        <button className="p-2 text-foreground hover:text-primary">
          <span className="flex flex-col gap-y-2">
            <span className="h-[2px] bg-black w-6"></span>
            <span className="h-[2px] bg-black w-6"></span>
          </span>
        </button>
      </div>
    </nav>
  );
}