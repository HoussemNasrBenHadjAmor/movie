import { useEffect, useState } from 'react'
import { SearchModel } from '../../components'
import { ArrowSmRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const index = () => {
  const [results, setResults] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(async () => {
    const { results: data } = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
    ).then((res) => res.json())

    setResults(data)
  }, [searchTerm])

  return (
    <div className="flex min-h-screen flex-col gap-5 px-5 pb-10">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-lg border-2 border-none bg-zinc-900 p-2 outline-none"
      />

      {results?.length && results ? (
        <div className="flex flex-col gap-3">
          {results?.slice(0, 10)?.map((result, i) => (
            <SearchModel data={result} bg={i % 2 !== 0} key={result?.id} />
          ))}

          <div className="-mx-2">
            <Link href={`/search?query=${searchTerm}`}>
              <a className="flex w-full items-center justify-center gap-2 rounded-b-lg bg-zinc-900 py-1 transition-all duration-300 ease-in-out hover:text-white">
                View all results
                <ArrowSmRightIcon className="h-5 w-5" />
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <p className="pb-2 text-center">Sorry, there's no results founded.</p>
      )}
    </div>
  )
}

export default index
