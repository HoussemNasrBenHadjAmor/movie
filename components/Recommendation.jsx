import Image from 'next/image'
import Link from 'next/link'

import movie from '../public/movie.png'

const Recommendation = ({
  recommendation: {
    id,
    backdrop_path,
    original_title,
    title,
    vote_average,
    name,
    original_name,
  },
}) => {
  const re = /[^a-zA-Z1-9-]/g

  const movieLink = [
    id,
    (title || original_title || name || original_name)
      ?.split(' ')
      .join('-')
      .replace(re, '')
      .toLowerCase(),
  ].join('-')

  return (
    <div className="flex min-w-[75%] flex-col gap-3 rounded-lg border-none bg-white pb-3 shadow-md sm:min-w-[25%]">
      <Link href={`/${name ? 'tv' : 'movie'}/${movieLink}`}>
        <a className="relative">
          {/* <img
            src={
              backdrop_path
                ? `${process.env.NEXT_PUBLIC_BASE_URL}${backdrop_path}`
                : movie.src
            }
            className="h-[150px] w-full rounded-t-lg object-cover"
          /> */}

          <Image
            src={
              backdrop_path
                ? `${process.env.NEXT_PUBLIC_BASE_URL}${backdrop_path}`
                : movie.src
            }
            layout="responsive"
            placeholder="blur"
            blurDataURL={`${process.env.NEXT_PUBLIC_BASE_URL}${backdrop_path}`}
            height={150}
            width={275}
            objectFit="cover"
            className="rounded-t-lg border-none"
          />
        </a>
      </Link>

      <div className="flex items-center justify-between px-2 text-sm text-gray-700 transition-all duration-300">
        <p className="truncate">
          {title || original_title || name || original_name}
        </p>
        <p className="font-semibold">{(vote_average * 10).toFixed(0)}%</p>
      </div>
    </div>
  )
}

export default Recommendation
