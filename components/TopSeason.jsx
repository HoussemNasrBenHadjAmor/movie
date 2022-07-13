import Link from 'next/link'
import Image from 'next/image'

import { NextPrevSeason } from './'
import { ArrowSmLeftIcon } from '@heroicons/react/outline'
import movie from '../public/movie.png'

const TopSeason = ({ season, link, allSeasons, text, type }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-x-3 sm:items-center sm:gap-x-5">
        <div className="relative">
          <Image
            src={
              season?.poster_path
                ? `${process.env.NEXT_PUBLIC_BASE_URL}${season?.poster_path}`
                : movie
            }
            layout="fixed"
            blurDataURL={
              season?.poster_path
                ? `${process.env.NEXT_PUBLIC_BASE_URL}${season?.poster_path}`
                : movie
            }
            width={65}
            height={90}
            className="rounded-md"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-x-1 text-2xl font-semibold">
            <h1 className="text-white">
              {season?.name || season?.title || season?.original_title || '-'}
            </h1>
            {(season?.air_date ||
              season?.release_date ||
              season?.first_air_date) &&
              `(${(
                season?.air_date ||
                season?.release_date ||
                season?.first_air_date
              )?.slice(0, 4)})`}
          </div>

          <Link
            href={allSeasons ? `/${type}/${link}/seasons` : `/${type}/${link}`}
          >
            <a className="flex items-center gap-x-1 font-medium hover:opacity-75 sm:text-xl">
              <ArrowSmLeftIcon className="h-5" />
              {text}
            </a>
          </Link>
        </div>
      </div>

      {allSeasons && (
        <NextPrevSeason season={season} allSeasons={allSeasons} link={link} />
      )}
    </div>
  )
}

export default TopSeason
