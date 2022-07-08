import Link from 'next/link'

import { SingleSeason } from '../../../components'
import { ArrowSmLeftIcon } from '@heroicons/react/outline'

const Seasons = ({ seasons, link, movieName }) => {
  return (
    <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-5 pb-10">
      <Link href={`/tv/${link}`}>
        <a className="flex items-center gap-x-3 text-xl hover:opacity-75">
          <ArrowSmLeftIcon className="h-7 w-7" />
          Back to main
        </a>
      </Link>

      <div className="flex flex-col gap-8">
        {seasons?.map((season) => (
          <>
            <SingleSeason
              key={season.id}
              season={season}
              link={link}
              movieName={movieName}
            />
            <div className="border-b-[1px]" />
          </>
        ))}
      </div>
    </div>
  )
}

export default Seasons

export const getServerSideProps = async (ctx) => {
  const movieId = ctx.query?.id?.split('-')[0]
  const re = /[^a-zA-Z0-9-]/g

  const { seasons, name, original_name, id } = await fetch(
    `${process.env.API_URL}tv/${movieId}?api_key=${process.env.API_KEY}&language=en-US`
  ).then((res) => res.json())

  const link = [
    id,
    (name || original_name)?.split(' ').join('-').replace(re, '').toLowerCase(),
  ].join('-')

  const movieName = name || original_name

  return {
    props: { seasons, link, movieName },
  }
}
