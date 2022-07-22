import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SearchModel } from './'
import { ArrowSmRightIcon } from '@heroicons/react/outline'

const Search = ({ searchTerm }) => {
  const [results, setResults] = useState(null)

  useEffect(async () => {
    const { results: data } = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
    ).then((res) => res.json())

    setResults(data)
  }, [searchTerm])

  return (
    <div className="rounded-lg bg-zinc-800 p-2 pb-0 shadow-md shadow-zinc-900">
      {results?.length && results ? (
        <div className="flex flex-col gap-3">
          {results?.slice(0, 5)?.map((result, i) => (
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

export default Search
