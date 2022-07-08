import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'

import movie from '../public/movie.png'

const SingleSeason = ({
  season: {
    poster_path,
    season_number,
    name,
    episode_count,
    air_date,
    overview,
  },
  link,
  movieName,
}) => {
  return (
    <div className="flex gap-3 sm:items-center sm:p-0">
      <div className="relative">
        <Link href={`/tv/${link}/season/${season_number}`}>
          <a className="flex">
            <Image
              src={
                poster_path
                  ? `${process.env.NEXT_PUBLIC_BASE_URL}${poster_path}`
                  : movie
              }
              layout="fixed"
              placeholder="blur"
              blurDataURL={`${process.env.NEXT_PUBLIC_BASE_URL}${poster_path}`}
              height={150}
              width={100}
              objectFit="cover"
              className="rounded-md"
            />
          </a>
        </Link>
      </div>

      <div className="flex flex-col gap-3 p-1 sm:p-3">
        <div className="flex flex-col gap-2 text-sm sm:gap-1 sm:text-base">
          <div className="flex flex-col gap-1 font-semibold text-white sm:flex-row sm:items-center sm:gap-3">
            <Link href={`/tv/${link}/season/${season_number}`}>
              <a className="text-xl hover:opacity-75 sm:text-2xl">{name}</a>
            </Link>

            <p>
              {air_date?.slice(0, 4) || '-'} {' | '} {episode_count} Episodes
            </p>
          </div>

          <p>
            {air_date
              ? `Season ${season_number} of ${movieName} premiered on ${moment(
                  air_date
                ).format('MMMM D[,] YYYY')}.`
              : "We don't have an overview translated in English. Help us expand our database by adding one."}
          </p>
        </div>

        <p className="max-h-40 overflow-y-auto scrollbar-hide sm:max-h-20 sm:scrollbar-default">
          {overview && overview}
        </p>
      </div>
    </div>
  )
}

export default SingleSeason
