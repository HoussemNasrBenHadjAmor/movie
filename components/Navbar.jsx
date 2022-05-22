import Link from 'next/link'

import { navItems } from '../utils'

import { SearchIcon } from '@heroicons/react/outline'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-zinc-900 p-3 shadow-lg sm:px-10">
      <Link href="/">
        <a className="text-2xl sm:text-3xl">Movies</a>
      </Link>

      <div className="hidden items-center gap-10 md:flex">
        {navItems.map(({ name, to }) => (
          <Link href={to} key={name}>
            <a className="transition-all duration-300 ease-in-out hover:text-cyan-600">
              {name}
            </a>
          </Link>
        ))}
      </div>

      <div className="hidden items-center gap-1 rounded-full bg-slate-50 bg-opacity-10 p-2 md:flex">
        <SearchIcon className="h-5 w-5" />
        <input
          type="text"
          placeholder="Search..."
          className="border-2 border-none bg-transparent outline-none"
        />
      </div>
    </nav>
  )
}

export default Navbar
