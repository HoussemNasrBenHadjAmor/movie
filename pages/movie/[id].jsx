import { Poster, MovieBody } from '../../components'

const Movie = ({
  movieDetails,
  casts,
  externalLinks,
  keywords,
  collections,
  recommendations,
}) => {
  return (
    <div className="flex flex-col gap-y-3">
      <Poster movieDetails={movieDetails} />

      <MovieBody
        links={externalLinks}
        keywords={keywords}
        movieDetails={movieDetails}
        casts={casts}
        movieName={movieDetails.original_title || movieDetails.title}
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

  const [movieDetails, casts, externalLinks, keywords, recommendations] =
    await Promise.all([
      fetch(
        `${process.env.API_URL}movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
      ).then((res) => res.json()),
      fetch(
        `${process.env.API_URL}movie/${id}/credits?api_key=${process.env.API_KEY}&language=en-US`
      ).then((res) => res.json()),
      fetch(
        `${process.env.API_URL}movie/${id}/external_ids?api_key=${process.env.API_KEY}`
      ).then((res) => res.json()),
      fetch(
        `${process.env.API_URL}movie/${id}/keywords?api_key=${process.env.API_KEY}`
      ).then((res) => res.json()),
      fetch(
        `${process.env.API_URL}movie/${id}/recommendations?api_key=${process.env.API_KEY}&language=en-US&page=1`
      ).then((res) => res.json()),
    ])

  let collections = {}

  if (movieDetails?.belongs_to_collection?.id) {
    collections = await fetch(
      `${process.env.API_URL}collection/${movieDetails?.belongs_to_collection?.id}?api_key=${process.env.API_KEY}`
    ).then((res) => res.json())
  }

  return {
    props: {
      movieDetails,
      casts,
      externalLinks,
      keywords: keywords?.keywords,
      collections:
        collections && collections?.parts ? collections?.parts : null,
      recommendations: recommendations?.results,
    },
  }
}
