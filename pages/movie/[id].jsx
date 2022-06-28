import { Poster, Casts, MovieDetails, MovieBody } from '../../components'

const Movie = ({ movieDetails, casts, externalLinks, keywords }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <Poster movieDetails={movieDetails} />
      {/* <Casts
        casts={casts}
        movieName={movieDetails.original_title || movieDetails.title}
      />
      <MovieDetails
        links={externalLinks}
        keywords={keywords}
        movieDetails={movieDetails}
      /> */}

      <MovieBody
        links={externalLinks}
        keywords={keywords}
        movieDetails={movieDetails}
        casts={casts}
        movieName={movieDetails.original_title || movieDetails.title}
      />
    </div>
  )
}

export default Movie

export const getServerSideProps = async (ctx) => {
  var { id } = ctx.query

  id = id.split('-')[0]

  const [movieDetails, casts, externalLinks, keywords] = await Promise.all([
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
  ])

  return {
    props: {
      movieDetails,
      casts,
      externalLinks,
      keywords: keywords.keywords,
    },
  }
}
