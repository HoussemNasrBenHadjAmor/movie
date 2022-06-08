import { Poster, Casts } from '../../components'

const Movie = ({ movieDetails, casts }) => {
  return (
    <div className="flex flex-col gap-3">
      <Poster movieDetails={movieDetails} />
      <Casts
        casts={casts}
        movieName={movieDetails.original_title || movieDetails.title}
      />
    </div>
  )
}

export default Movie

export const getServerSideProps = async (context) => {
  var { id } = context.query

  id = id.split('-')[0]

  const movieDetails = await fetch(
    `${process.env.API_URL}movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  ).then((res) => res.json())

  const casts = await fetch(
    `${process.env.API_URL}movie/${id}/credits?api_key=${process.env.API_KEY}&language=en-US`
  ).then((res) => res.json())

  return {
    props: {
      movieDetails,
      casts: casts,
    },
  }
}
