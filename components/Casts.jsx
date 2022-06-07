import { Cast } from '.'

import { ArrowSmRightIcon } from '@heroicons/react/outline'

const Casts = ({ casts }) => {
  return (
    <div className="mb-5 flex flex-col gap-5 px-10">
      <h1 className="text-base text-white sm:text-xl">Top Billed Cast</h1>
      <div className="flex flex-row flex-nowrap gap-4 overflow-scroll scrollbar-hide">
        {casts?.slice(0, 9)?.map((cast) => (
          <Cast key={cast.id} cast={cast} />
        ))}
        <div className="flex min-w-[128px] items-center justify-center gap-1 text-white">
          <h1>View More</h1>
          <ArrowSmRightIcon className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}

export default Casts
