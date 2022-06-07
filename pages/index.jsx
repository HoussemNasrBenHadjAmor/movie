import { MovieModel } from '../components'

import {
  trendingMovieFetch,
  trendingTvFetch,
  latestMoviesFetch,
  lastestTvFetch,
  comingMoviesFetch,
  comingTvFetch,
  todayDay,
} from '../utils/index'

const Index = ({ data }) => {
  return (
    <div className="flex flex-col">
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
  const tvTrending = await fetch(trendingTvFetch).then((res) => res.json())

  const movieTrending = await fetch(trendingMovieFetch).then((res) =>
    res.json()
  )

  const movieLatest = await fetch(latestMoviesFetch).then((res) => res.json())

  const tvLatest = await fetch(lastestTvFetch).then((res) => res.json())

  const movieUpcoming = await fetch(comingMoviesFetch).then((res) => res.json())

  const tvUpcoming = await fetch(comingTvFetch).then((res) => res.json())

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
