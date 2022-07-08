import { TopSeason, NextPrevSeason, Episodes } from '../../../../components'

const Season = ({ season, id, seasons, link }) => {
  return (
    <div className="mx-auto flex max-w-[1500px] flex-col gap-10 px-3 pb-10 sm:px-5">
      <TopSeason season={season} id={id} allSeasons={seasons} link={link} />

      {season?.episodes && <Episodes season={season} />}

      {season?.episodes?.length > 0 && (
        <NextPrevSeason season={season} allSeasons={seasons} link={link} />
      )}
    </div>
  )
}

export default Season

export const getServerSideProps = async (ctx) => {
  const re = /[^a-zA-Z0-9-]/g

  var { slug, id } = ctx.query

  const idSeason = id?.split('-')[0]

  const [season, { seasons, name, original_name, id: tvId }] =
    await Promise.all([
      fetch(
        `${process.env.API_URL}tv/${idSeason}/season/${slug}?api_key=${process.env.API_KEY}&language=en-US`
      ).then((res) => res.json()),

      fetch(
        `${process.env.API_URL}tv/${idSeason}?api_key=${process.env.API_KEY}&language=en-US`
      ).then((res) => res.json()),
    ])

  const link = [
    tvId,
    (name || original_name)?.split(' ').join('-').replace(re, '').toLowerCase(),
  ].join('-')

  return {
    props: {
      season,
      id,
      seasons,
      link,
    },
  }
}
