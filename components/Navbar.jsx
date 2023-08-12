import { useState } from 'react'
import Link from 'next/link'
import { useDebounce } from 'use-debounce'
import { Search } from './'
import { navItems } from '../utils'
import { SearchIcon } from '@heroicons/react/outline'

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [focus, setFocus] = useState(false)
  const [searchValue] = useDebounce(searchTerm, 2000)

  return (
    <nav className="flex items-center justify-between bg-zinc-900 p-3 shadow-lg sm:px-10">
      <Link href="/">
        <a className="text-2xl sm:text-3xl">Movies</a>
      </Link>

      <div
        className="relative flex w-2/6 flex-col"
        // onBlur={() => {
        //   setFocus(false)
        //   setSearchTerm('')
        // }}
      >
        <div className="hidden items-center gap-1 rounded-full bg-slate-50 bg-opacity-10 p-2 sm:flex">
          <SearchIcon className="h-5 w-5" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full border-2 border-none bg-transparent outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setFocus(true)}
            // onBlur={() => setFocus(false)}
          />
        </div>

        {searchValue && searchTerm !== '' && focus && (
          <div
            className="absolute top-12 z-[999] w-full"
            onBlur={() => {
              setFocus(false)
              setSearchTerm('')
            }}
          >
            <Search searchTerm={searchValue} setFocus={setFocus} />
          </div>
        )}
      </div>

      <div className="hidden items-center gap-10 md:flex">
        {navItems.map(({ name, to }) => (
          <Link href={to} key={name}>
            <a className="transition-all duration-300 ease-in-out hover:text-cyan-600">
              {name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
