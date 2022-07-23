import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import movie from '../public/movie.png'
import Link from 'next/link'

const SearchModel = ({
  bg,
  data: {
    poster_path,
    backdrop_path,
    id,
    title,
    original_title,
    name,
    original_name,
    media_type,
    release_date,
    first_air_date,
    vote_average,
    profile_path,
    known_for_department,
    known_for,
  },
}) => {
  const re = /[^a-zA-Z0-9-]/g
  const displayName = title || original_title || name || original_name
  const imageSrc = poster_path || backdrop_path || profile_path
  var date = (release_date || first_air_date)?.slice(0, 4) || '-'
  const link = [
    id,
    displayName?.split(' ').join('-').replace(re, '').toLowerCase(),
  ].join('-')
  const getName = (name) => {
    return (
      name?.title || name?.original_title || name?.name || name?.original_name
    )
  }

  return (
    <Link href={`/${media_type}/${link}`}>
      <a className={`group flex gap-2 ${bg && '-mx-2 bg-zinc-900 p-2 py-3'}`}>
        <div className="relative block w-1/6">
          <Image
            src={
              imageSrc
                ? `${process.env.NEXT_PUBLIC_BASE_URL}${imageSrc}`
                : movie.src
            }
            layout="responsive"
            width={70}
            height={85}
            placeholder="blur"
            blurDataURL={
              imageSrc
                ? `${process.env.NEXT_PUBLIC_BASE_URL}${imageSrc}`
                : movie.src
            }
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        <div className="flex flex-1 flex-col gap-1">
          <h3 className="font-semibold transition-all duration-300 ease-in-out group-hover:text-blue-500/95">
            {displayName}
          </h3>
          {!known_for_department ? (
            <div className="flex flex-wrap items-center gap-2 text-sm opacity-60 transition-all delay-200 duration-300 ease-in-out group-hover:text-white group-hover:opacity-100">
              <div className="flex items-center gap-1 text-sm">
                <StarIcon className="h-3 w-3" />
                <p>{vote_average || '-'}</p>
              </div>
              <span className="text-base">•</span>
              <p>{date}</p>
              <span className="hidden text-base md:flex">•</span>
              <div className="hidden rounded-md border-[1px] border-slate-50/30 p-[3px] md:flex">
                <p className="text-xs">
                  {media_type === 'tv' ? 'TV' : 'Movie'}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-sm opacity-60 transition-all delay-200 duration-300 ease-in-out group-hover:text-white group-hover:opacity-100">
              {known_for?.length > 1 &&
                known_for?.map((item) => getName(item))?.join(', ')}
            </div>
          )}
        </div>
      </a>
    </Link>
  )
}

export default SearchModel
