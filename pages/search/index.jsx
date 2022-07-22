import { CurrentSeason, SearchPins } from '../../components'

const Index = ({ data }) => {
  return (
    <div className="mx-auto flex max-w-[1400px] flex-col gap-5 px-5 pb-10">
      {/* {data?.results?.map((result) => (
        <CurrentSeason season={result} key={result?.id} show={false} />
      ))} */}
      <SearchPins data={data?.results} />
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
