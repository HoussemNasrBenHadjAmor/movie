import Link from 'next/link'

import { Cast } from '.'

import { ArrowSmRightIcon } from '@heroicons/react/outline'

const Casts = ({ casts, movieName, id, nbEp }) => {
  const re = /[^a-zA-Z1-9-]/g

  const urlCasts = [
    id,
    movieName?.split(' ').join('-').replace(re, '').toLowerCase(),
  ].join('-')

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-base text-white sm:text-xl">Top Billed Cast</h1>

      <div className="flex flex-row flex-nowrap gap-4 overflow-scroll pb-3 scrollbar-hide">
        {casts?.cast?.slice(0, 9)?.map((cast) => (
          <Cast key={cast.id} cast={cast} nbEp={nbEp} />
        ))}

        <div className="flex min-w-[128px] items-center justify-center text-white">
          <Link href={`/${nbEp ? 'tv' : 'movie'}/${urlCasts}/cast`}>
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
