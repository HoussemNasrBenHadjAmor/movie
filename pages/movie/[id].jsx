import { Poster, Casts } from '../../components'

const Movie = ({ movieDetails, casts }) => {
  return (
    <div className="flex flex-col gap-3">
      <Poster movieDetails={movieDetails} />
      <Casts casts={casts} />
    </div>
  )
}

export default Movie

export const getServerSideProps = async (context) => {
  const { id } = context.query

  const movieDetails = await fetch(
    `${process.env.API_URL}movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  ).then((res) => res.json())

  const casts = await fetch(
    `${process.env.API_URL}movie/${id}/credits?api_key=${process.env.API_KEY}&language=en-US`
  ).then((res) => res.json())

  return {
    props: {
      id,
      movieDetails,
      casts: casts.cast,
    },
  }
}
