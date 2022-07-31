import { SearchPins, Pagination } from '../../components'

const Index = ({ data }) => {
  const notEmpty = data?.results?.length

  const info = {
    currentPage: data?.page,
    totalPages: data?.total_pages,
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col gap-5 px-5 pb-10">
      {notEmpty ? (
        <div className="flex flex-col gap-16">
          <SearchPins data={data?.results} />
          <div className="flex items-center justify-center">
            <Pagination info={info} />
          </div>
        </div>
      ) : (
        <div className="grid place-items-center">
          <p>Sorry, there's no results that matched your query. </p>
        </div>
      )}
    </div>
  )
}

export default Index

export const getServerSideProps = async (ctx) => {
  const { query, page } = ctx.query

  const data = await fetch(
    `${process.env.API_URL}search/multi?api_key=${
      process.env.API_KEY
    }&language=en-US&query=${query}&page=${page || 1}&include_adult=false`
  ).then((res) => res.json())

  return {
    props: {
      data,
    },
  }
}
