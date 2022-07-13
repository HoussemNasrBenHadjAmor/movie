import { TopSeason, Credits } from '../../../components'

const Cast = ({ movie, link, credits }) => {
  return (
    <div className="mx-auto flex max-w-[1500px] flex-col gap-10 px-3 pb-10 sm:px-5">
      <TopSeason season={movie} link={link} type="movie" text="Back to main" />
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

  const [credits, movie] = await Promise.all([
    fetch(
      `${process.env.API_URL}movie/${id}/credits?api_key=${process.env.API_KEY}&language=en-US`
    ).then((res) => res.json()),

    fetch(
      `${process.env.API_URL}movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
    ).then((res) => res.json()),
  ])

  // console.log('credits', credits)

  const link = [
    movie?.id,
    (movie?.title || movie?.original_title)
      ?.split(' ')
      .join('-')
      .replace(re, '')
      .toLowerCase(),
  ].join('-')

  return {
    props: {
      credits,
      link,
      movie,
    },
  }
}
