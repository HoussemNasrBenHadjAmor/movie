import { lastestTvFetch } from '../utils/index'

import { MovieModel } from '../components'

const TvShows = ({ tvshows }) => {
  return (
    <div className="min-h-screen px-5">
      <MovieModel data={tvshows} title="Tv Shows" />
    </div>
  )
}

export default TvShows

export const getServerSideProps = async () => {
  let tvshows = await fetch(lastestTvFetch).then((res) => res.json())
  tvshows = tvshows?.results
  return {
    props: { tvshows },
  }
}
