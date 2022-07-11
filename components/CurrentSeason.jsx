import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'

import movie from '../public/movie.png'

const CurrentSeason = ({
  season: {
    name,
    air_date,
    episode_count,
    overview,
    poster_path,
    season_number,
    title,
    original_title,
    release_date,
    id,
  },
  movieName,
  movieId,
}) => {
  const re = /[^a-zA-Z0-9-]/g

  const movieLink = [
    movieId || id,
    (movieName || title || original_title)
      ?.split(' ')
      .join('-')
      .replace(re, '')
      .toLowerCase(),
  ].join('-')

  const isMovie = title || original_title || release_date

  return (
    <div className="flex flex-col gap-5">
      {!isMovie && <h1 className="text-white sm:text-xl">Last Season</h1>}
      <div className="flex flex-col rounded-md bg-white p-3 py-5 shadow-md shadow-zinc-800/70 sm:flex-row sm:items-center sm:gap-3 sm:p-0">
        <div className="relative hidden sm:flex">
          <Link
            href={
              !isMovie
                ? `/tv/${movieLink}/season/${season_number}`
                : `/movie/${movieLink}`
            }
          >
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
                height={210}
                width={150}
                objectFit="cover"
                className="rounded-tl-md rounded-bl-md"
              />
            </a>
          </Link>
        </div>

        <div className="flex flex-col gap-5 sm:p-3">
          <div className="font-semibold text-black">
            <Link
              href={
                !isMovie
                  ? `/tv/${movieLink}/season/${season_number}`
                  : `/movie/${movieLink}`
              }
            >
              <a className="text-2xl hover:text-black/70">
                {name || title || original_title}
              </a>
            </Link>

            <p>
              {isMovie && release_date
                ? moment(release_date).format('MMMM D, YYYY')
                : !isMovie
                ? `${air_date?.slice(0, 4) || '-'} | ${episode_count} Episodes`
                : null}
            </p>
          </div>

          <p className="text-black/80 sm:max-h-20 sm:overflow-y-auto">
            {overview
              ? overview
              : !overview && !isMovie
              ? `Season ${season_number} of ${movieName} premiered on ${moment(
                  air_date
                ).format('MMMM D[,] YYYY')}.`
              : 'Sorry, we have no overview for this movie.'}
          </p>
        </div>
      </div>

      {!isMovie && (
        <Link href={`/tv/${movieLink}/seasons`}>
          <a className="max-w-fit hover:opacity-75">View All Seasons</a>
        </Link>
      )}
    </div>
  )
}

export default CurrentSeason
