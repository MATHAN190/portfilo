import { Bars4Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
  const [Toggle, setToggle] = useState(false);

  return (
    <header>
      <nav className="flex justify-between items-center h-15 w-full bg-indigo-500 text-center p-5 rounded-xl">
        {/* Logo */}
        <h1 className="text-xl font-bold font-sans text-white">Mathan kumar k</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-5 text-white">
          <li><a href="#about" className="hover:text-black">About</a></li>
          <li><a href="#project" className="hover:text-black">Project</a></li>
          <li><a href="#con" className="hover:text-black">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <Bars4Icon
          onClick={() => setToggle(!Toggle)}
          className="w-6 h-6 text-white md:hidden cursor-pointer"
        />
      </nav>

      {/* Mobile Menu */}
      {Toggle && (
        <ul className="bg-gray-400 w-full text-center space-y-3 p-4 rounded-2xl md:hidden">
          <li
            className="hover:bg-gray-300 rounded-3xl border-b border-white"
            onClick={() => setToggle(false)}
          >
            <a href="#about" className="text-white hover:text-black">About</a>
          </li>
          <li
            className="hover:bg-gray-300 rounded-3xl border-b border-white"
            onClick={() => setToggle(false)}
          >
            <a href="#project" className="text-white hover:text-black">Project</a>
          </li>
          <li
            className="hover:bg-gray-300 rounded-3xl"
            onClick={() => setToggle(false)}
          >
            <a href="#con" className="text-white hover:text-black">Contact</a>
          </li>
        </ul>
      )}
    </header>
  );
}
