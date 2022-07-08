import Link from 'next/link'
import Image from 'next/image'

import { NextPrevSeason } from './'
import movie from '../public/movie.png'
import { ArrowSmLeftIcon } from '@heroicons/react/outline'

const TopSeason = ({ season, id, allSeasons, link }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-x-3 sm:gap-x-5">
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
            <h1 className="text-white">{season?.name || '-'}</h1>
            {season?.air_date && `(${season?.air_date?.slice(0, 4)})`}
          </div>

          <Link href={`/tv/${id}/seasons`}>
            <a className="flex items-center gap-x-1 font-medium hover:opacity-75 sm:text-xl">
              <ArrowSmLeftIcon className="h-5" />
              Back to season list
            </a>
          </Link>
        </div>
      </div>

      <NextPrevSeason season={season} allSeasons={allSeasons} link={link} />
    </div>
  )
}

export default TopSeason
