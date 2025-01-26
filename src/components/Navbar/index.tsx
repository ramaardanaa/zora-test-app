import { NAVBAR } from '@/constants/navbar'
import { FaSearch, FaBars } from 'react-icons/fa';
export default function Navbar() {
  return (
    <nav className="flex items-center w-full p-4 bg-whiteborder-b border-b-2 border-beige-2">
      <div className="container flex space-x-4 font-inter font-semibold items-center justify-end ">
        {NAVBAR.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="hover:text-primary"
          >
            {item.label}
          </a>
        ))}
        <button className="p-2 text-gray-600 hover:text-primary">
          <FaSearch />
        </button>
        <button className="p-2 text-gray-600 hover:text-primary">
          <FaBars />
        </button>
      </div>
    </nav>
  );
}