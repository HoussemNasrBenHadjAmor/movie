import Link from 'next/link'

import { Cast } from '.'

import { ArrowSmRightIcon } from '@heroicons/react/outline'

const Casts = ({ casts, movieName }) => {
  const re = /[^a-zA-Z1-9-]/g

  const urlCasts = [
    casts?.id,
    movieName?.split(' ').join('-').replace(re, '').toLowerCase(),
  ].join('-')

  return (
    <div className="mb-5 flex flex-col gap-5 px-10">
      <h1 className="text-base text-white sm:text-xl">Top Billed Cast</h1>

      <div className="flex flex-row flex-nowrap gap-4 overflow-scroll scrollbar-hide">
        {casts?.cast?.slice(0, 9)?.map((cast) => (
          <Cast key={cast.id} cast={cast} />
        ))}

        <div className="flex min-w-[128px] items-center justify-center text-white">
          <Link href={`/movie/${urlCasts}/cast`}>
            <a className="flex items-center justify-center gap-1">
              <h1>View More</h1>

              <ArrowSmRightIcon className="h-5 w-5" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Casts
