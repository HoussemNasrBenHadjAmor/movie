import Link from 'next/link'
import { MovieModel } from '../components'
import {
  trendingMovieFetch,
  trendingTvFetch,
  latestMoviesFetch,
  lastestTvFetch,
  comingMoviesFetch,
  comingTvFetch,
} from '../utils/index'

const Index = ({ data }) => {
  return (
    <div className="flex flex-col px-5">
      <div className="mb-10 flex items-center justify-center gap-4 lg:hidden">
        <Link href="/movies">
          <a className="rounded-lg bg-zinc-800 p-1 px-5">Movies</a>
        </Link>

        <Link href="/tv-shows">
          <a className="rounded-lg bg-zinc-800 p-1 px-5">Tv</a>
        </Link>
      </div>

      <MovieModel
        tvTrending={data.tvTrending}
        movieTrending={data.movieTrending}
        isTrending
        title="Trending"
      />
      <MovieModel title="Latest Movies" data={data.movieLatest} />
      <MovieModel title="Latest TV Shows" data={data.tvLatest} />
      <MovieModel title="Coming Soon Movies" data={data.movieUpcoming} />
      <MovieModel title="Coming Soon TV Shows" data={data.tvUpcoming} />
    </div>
  )
}

export default Index

export const getServerSideProps = async () => {
  const [
    tvTrending,
    movieTrending,
    movieLatest,
    tvLatest,
    movieUpcoming,
    tvUpcoming,
  ] = await Promise.all([
    fetch(trendingTvFetch).then((res) => res.json()),
    fetch(trendingMovieFetch).then((res) => res.json()),
    fetch(latestMoviesFetch).then((res) => res.json()),
    fetch(lastestTvFetch).then((res) => res.json()),
    fetch(comingMoviesFetch).then((res) => res.json()),
    fetch(comingTvFetch).then((res) => res.json()),
  ])

  const data = {
    tvTrending: tvTrending.results,
    movieTrending: movieTrending.results,
    movieLatest: movieLatest.results,
    tvLatest: tvLatest.results,
    movieUpcoming: movieUpcoming.results,
    tvUpcoming: tvUpcoming.results,
  }

  return {
    props: {
      data,
    },
  }
}
