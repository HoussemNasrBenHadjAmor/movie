import { Poster, CurrentSeason } from '../../components'

const Collection = ({ collection }) => {
  const nbMovie =
    collection?.parts?.length > 1
      ? `${collection?.parts?.length} Movies`
      : '1 Movie'

  const isEmpty = collection?.parts?.length < 0

  return (
    <div className="flex flex-col gap-y-3 pb-5">
      <Poster movieDetails={collection} />

      <div className="mx-auto mt-10 flex max-w-[1400px] flex-col gap-10 px-5">
        {!isEmpty && (
          <>
            <h1 className="text-2xl font-semibold"> {nbMovie} </h1>
            {collection?.parts?.map((coll) => (
              <CurrentSeason season={coll} />
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

  const collection = await fetch(
    `${process.env.API_URL}collection/${id}?api_key=${process.env.API_KEY}&language=en-US`
  ).then((res) => res.json())

  return {
    props: {
      id,
      collection,
    },
  }
}
