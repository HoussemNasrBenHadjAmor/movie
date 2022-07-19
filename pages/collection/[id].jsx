import { Poster, CurrentSeason, Credit, Credits } from '../../components'

const Collection = ({ collection, credits }) => {
  const nbMovie =
    collection?.parts?.length > 1
      ? `${collection?.parts?.length} Movies`
      : '1 Movie'

  const isEmptyCollection = collection?.parts?.length < 0
  const isEmptyCast = credits?.cast?.length < 0
  const isEmptyCrew = credits?.crew?.length < 0

  return (
    <div className="flex min-h-screen flex-col pb-10">
      <Poster movieDetails={collection} />

      <div className="mx-auto mt-10 flex max-w-[1400px] flex-col gap-8 px-5">
        {!isEmptyCast && <Credits data={credits?.cast} bg text="Featured" />}

        {!isEmptyCrew && (
          <Credits data={credits?.crew} crew bg text="Featured" />
        )}

        {!isEmptyCollection && (
          <>
            <h1 className="text-2xl font-semibold text-white"> {nbMovie} </h1>
            {collection?.parts?.map((coll) => (
              <CurrentSeason season={coll} key={coll?.id} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Collection

export const getServerSideProps = async (ctx) => {
  const id = ctx?.query?.id?.split('-')[0]
  var credits = {}

  const collection = await fetch(
    `${process.env.API_URL}collection/${id}?api_key=${process.env.API_KEY}&language=en-US`
  ).then((res) => res.json())

  if (collection?.parts?.length > 0) {
    const movieId = collection?.parts?.slice(-1)[0]?.id

    credits = await fetch(
      `${process.env.API_URL}movie/${movieId}/credits?api_key=${process.env.API_KEY}&language=en-US`
    ).then((res) => res.json())
  }

  return {
    props: {
      collection,
      credits,
    },
  }
}
