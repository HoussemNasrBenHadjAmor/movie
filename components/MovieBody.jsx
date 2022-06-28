import { Casts, MovieDetails, Collection } from './'

const MovieBody = ({
  keywords,
  links,
  movieDetails,
  casts,
  movieName,
  collections,
}) => {
  return (
    <div className="mx-auto mt-5 mb-5 flex w-full max-w-[1400px] flex-col gap-5 px-5 lg:flex-row">
      <div className="flex w-full flex-col space-y-8 lg:w-4/5">
        <Casts casts={casts} movieName={movieName} />

        {collections && (
          <>
            <hr className="w-full font-extralight text-gray-200" />

            <Collection
              collectionName={movieDetails?.belongs_to_collection}
              collectionDetails={collections}
            />
          </>
        )}

        <hr className="w-full font-extralight text-gray-200" />
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
