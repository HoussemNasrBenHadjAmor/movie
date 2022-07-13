import { TopSeason, Credits } from '../../../components'

const Cast = ({ tv, link, credits }) => {
  return (
    <div className="mx-auto flex max-w-[1500px] flex-col gap-10 px-3 pb-10 sm:px-5">
      <TopSeason season={tv} link={link} type="tv" text="Back to main" />

      <div className="flex flex-col gap-7 sm:flex-row sm:gap-0">
        <div className="w-full sm:w-1/2">
          <Credits data={credits?.cast} all />
        </div>

        <div className="w-full sm:w-1/2">
          <Credits data={credits?.crew} crew all />
        </div>
      </div>
    </div>
  )
}

export default Cast

export const getServerSideProps = async (ctx) => {
  const re = /[^a-zA-Z0-9-]/g

  const id = ctx?.query?.id?.split('-')[0]

  const [credits, tv] = await Promise.all([
    fetch(
      `${process.env.API_URL}tv/${id}/credits?api_key=${process.env.API_KEY}&language=en-US`
    ).then((res) => res.json()),

    fetch(
      `${process.env.API_URL}tv/${id}?api_key=${process.env.API_KEY}&language=en-US`
    ).then((res) => res.json()),
  ])

  const link = [
    tv?.id,
    (tv?.name || tv?.original_name)
      ?.split(' ')
      .join('-')
      .replace(re, '')
      .toLowerCase(),
  ].join('-')

  return {
    props: {
      credits,
      link,
      tv,
    },
  }
}
