import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SearchResults = ({ query }) => {
  const router = useRouter()
  const routerPath = router.pathname.slice(8, router.pathname.length)

  const [results, setResults] = useState({
    movies: null,
    tv: null,
    collections: null,
    keywords: null,
    people: null,
    companies: null,
    networks: null,
  })

  const getSearchResults = async () => {
    const [
      { total_results: movies },
      { total_results: tv },
      { total_results: collections },
      { total_results: keywords },
      { total_results: people },
      { total_results: companies },
      //   { total_results: networks },
    ] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      ).then((res) => res.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}search/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      ).then((res) => res.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}search/collection?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      ).then((res) => res.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}search/keyword?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      ).then((res) => res.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}search/person?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      ).then((res) => res.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}search/company?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      ).then((res) => res.json()),
      //   fetch(
      //     `${process.env.NEXT_PUBLIC_API_URL}search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      //   ),
    ])

    setResults({
      ...results,
      movies,
      tv,
      collections,
      keywords,
      people,
      companies,
    })
  }

  useEffect(() => {
    getSearchResults()
  }, [query])

  const ModalLink = ({ name, nb, path }) => {
    const isSamePath = path === routerPath || (!routerPath && path === 'movie')
    const linkTo = `/search/${path}?query=${query}`
    return (
      <Link href={linkTo}>
        <a
          className={`${
            isSamePath && 'bg-zinc-600'
          } group -mx-5 rounded-sm py-2.5 transition-all duration-300 ease-in-out hover:bg-zinc-600`}
        >
          <div
            className={`mx-5 flex items-center justify-between ${
              isSamePath && 'font-semibold text-white'
            }`}
          >
            <p> {name} </p>
            <p
              className={` ${
                isSamePath ? 'bg-gray-200' : 'bg-zinc-500'
              } flex items-center justify-center rounded-xl px-2 py-[1px] font-thin text-black transition-all duration-300 ease-in-out group-hover:bg-gray-200`}
            >
              {nb}
            </p>
          </div>
        </a>
      </Link>
    )
  }

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-zinc-800 px-5 pb-3 shadow-md shadow-zinc-900">
      <div className="-mx-5 flex items-center rounded-t-md bg-blue-800 py-5 text-xl font-semibold text-white">
        <h3 className="px-5">Search Results</h3>
      </div>
      <ModalLink name="Movies" nb={results.movies} path="movie" />
      <ModalLink name="TV Shows" nb={results.tv} path="tv" />
      <ModalLink
        name="Collections"
        nb={results.collections}
        path="collection"
      />
      <ModalLink name="Keywords" nb={results.keywords} path="keyword" />
      <ModalLink name="People" nb={results.people} path="person" />
      <ModalLink name="Companies" nb={results.companies} path="company" />
      <ModalLink name="Networks" nb={results.networks} path="network" />
    </div>
  )
}

export default SearchResults
