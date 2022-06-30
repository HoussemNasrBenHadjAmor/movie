import { Poster, MovieBody } from '../../components'

const Movie = ({
  movieDetails,
  casts,
  externalLinks,
  keywords,
  collections,
  recommendations,
  video,
}) => {
  return (
    <div className="flex flex-col gap-y-3">
      <Poster movieDetails={movieDetails} video={video} />

      <MovieBody
        links={externalLinks}
        keywords={keywords}
        movieDetails={movieDetails}
        casts={casts}
        movieName={movieDetails.title || movieDetails.original_title}
        collections={collections}
        recommendations={recommendations}
      />
    </div>
  )
}

export default Movie

export const getServerSideProps = async (ctx) => {
  var { id } = ctx.query

  id = id.split('-')[0]

  const movieDetails = await fetch(
    `${process.env.API_URL}movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos,keywords,external_ids,recommendations,credits`
  ).then((res) => res.json())

  const index = movieDetails?.videos?.results?.findIndex(
    (v) => v.type.toLowerCase() === 'trailer'
  )

  const trailer = movieDetails?.videos?.results[index]?.key || 'juxTC7hYGTE'

  let collections = {}

  if (movieDetails?.belongs_to_collection?.id) {
    collections = await fetch(
      `${process.env.API_URL}collection/${movieDetails?.belongs_to_collection?.id}?api_key=${process.env.API_KEY}`
    ).then((res) => res.json())
  }

  return {
    props: {
      movieDetails,
      casts: movieDetails?.credits,
      externalLinks: movieDetails?.external_ids,
      keywords: movieDetails?.keywords?.keywords,
      recommendations: movieDetails?.recommendations?.results,
      video: trailer,
      collections:
        collections && collections?.parts ? collections?.parts : null,
    },
  }
}
