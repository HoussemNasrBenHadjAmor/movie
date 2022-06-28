import { Casts, MovieDetails } from './'
const MovieBody = ({ keywords, links, movieDetails, casts, movieName }) => {
  return (
    <div className="mx-auto mt-5 mb-5 flex w-full max-w-7xl flex-col gap-5 px-5 lg:flex-row">
      <div className="w-full lg:w-4/5">
        <Casts casts={casts} movieName={movieName} />
      </div>

      <div className="w-full lg:w-1/5">
        <MovieDetails
          keywords={keywords}
          links={links}
          movieDetails={movieDetails}
        />
      </div>
    </div>
  )
}

export default MovieBody
