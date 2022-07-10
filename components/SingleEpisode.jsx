import Image from 'next/image'
import moment from 'moment'
import prettyMilliseconds from 'pretty-ms'

import movie from '../public/movie.png'

const SingleEpisode = ({
  episode: { episode_number, name, overview, runtime, still_path, air_date },
}) => {
  return (
    <div className="flex h-full flex-col gap-3 pb-3 sm:max-h-[175px] sm:flex-row sm:items-center sm:pb-0">
      <div className="relative flex w-full sm:w-[25%]">
        <Image
          src={
            still_path
              ? `${process.env.NEXT_PUBLIC_BASE_URL}${still_path}`
              : movie
          }
          layout="fixed"
          width={540}
          height={175}
          blurDataURL={
            still_path
              ? `${process.env.NEXT_PUBLIC_BASE_URL}${still_path}`
              : movie
          }
          placeholder="blur"
          objectFit="cover"
          className="rounded-tr-md rounded-tl-md sm:rounded-bl-md sm:rounded-tr-none"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-2 sm:py-3">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h1 className="font-medium text-white">
            {' '}
            {episode_number} {name}{' '}
          </h1>
          <div className="flex flex-col gap-1 text-xs text-gray-400 sm:text-sm">
            {air_date && <p>{moment(air_date).format('MMMM D, YYYY')}</p>}
            {runtime && <p>{prettyMilliseconds(runtime * 60 * 1000)}</p>}
          </div>
        </div>

        <p className="sm:max-h-20 sm:overflow-y-auto">
          {overview
            ? overview
            : 'Sorry we have no overview for this episode! Help us to improve our docs.'}
        </p>
      </div>
    </div>
  )
}

export default SingleEpisode
