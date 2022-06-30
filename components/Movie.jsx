import Link from 'next/link'
import Image from 'next/image'

import { ThumbUpIcon } from '@heroicons/react/outline'

const Movie = ({ data }) => {
  const re = /[^a-zA-Z0-9-]/g

  const movieLink = [
    data?.id,
    (data?.title || data?.original_title || data?.name || data?.original_name)
      ?.split(' ')
      .join('-')
      .replace(re, '')
      .toLowerCase(),
  ].join('-')

  return (
    <Link
      href={`/${
        data?.first_air_date || data?.name ? 'tv' : 'movie'
      }/${movieLink}`}
    >
      <a className="group flex transform flex-col gap-3 transition duration-300 ease-in-out sm:hover:z-40 sm:hover:scale-105">
        <Image
          layout="responsive"
          height={1080}
          width={1920}
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${
            data?.backdrop_path || data?.poster_path
          }`}
          className="rounded-md"
        />

        <div className="px-1">
          <p className="max-w-md truncate">{data.overview}</p>

          <h2 className="text-2xl text-white transition-all duration-200 ease-in-out group-hover:font-semibold">
            {data?.title ||
              data?.name ||
              data?.original_title ||
              data?.original_name}
          </h2>

          <p className="flex items-center gap-1 opacity-0 group-hover:opacity-100">
            {data?.release_date || data?.first_air_date} •{' '}
            <ThumbUpIcon className="w-5" /> {data?.vote_count}
          </p>
        </div>
      </a>
    </Link>
  )
}

export default Movie
