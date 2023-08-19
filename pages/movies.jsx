import { latestMoviesFetch } from '../utils/index'

import { MovieModel } from '../components'

const movies = ({ movies }) => {
  return (
    <div className="min-h-screen px-5">
      <MovieModel data={movies} title="Movies" />
    </div>
  )
}

export default movies

export const getServerSideProps = async () => {
  let movies = await fetch(latestMoviesFetch).then((res) => res.json())
  movies = movies?.results
  return {
    props: { movies },
  }
}
