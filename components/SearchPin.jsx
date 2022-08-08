import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import movie from '../public/movie.png'
import person from '../public/person.jpg'
import { StarIcon } from '@heroicons/react/solid'

const SearchPin = ({
  pin: {
    id,
    original_title,
    title,
    name,
    orignal_name,
    poster_path,
    backdrop_path,
    release_date,
    first_air_date,
    profile_path,
    vote_average,
  },
}) => {
  const re = /[^a-zA-Z0-9-]/g
  const router = useRouter()
  const routerPath = router.pathname.slice(8, router.pathname.length) || 'movie'

  const movieLink = [
    id,
    (title || original_title || name || orignal_name)
      ?.split(' ')
      .join('-')
      .replace(re, '')
      .toLowerCase(),
  ].join('-')

  const href = `/${routerPath}/${movieLink}`

  const srcImage =
    poster_path || backdrop_path || profile_path
      ? `${process.env.NEXT_PUBLIC_BASE_URL}${
          poster_path || backdrop_path || profile_path
        }`
      : routerPath === 'person' && !profile_path
      ? person.src
      : routerPath !== 'person' && !poster_path && !backdrop_path
      ? movie.src
      : movie.src

  const namePin = title || original_title || name || orignal_name

  const date =
    release_date || first_air_date
      ? (release_date || first_air_date)?.slice(0, 4)
      : null

  return (
    <Link href={href}>
      <a className="group flex flex-col gap-2 transition-all duration-[400ms] ease-in-out hover:scale-95">
        <div>
          <Image
            src={srcImage}
            layout="responsive"
            placeholder="blur"
            blurDataURL={srcImage}
            width={640}
            height={850}
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        <div className="flex flex-col gap-1 transition-all delay-200 ease-in-out group-hover:text-white">
          <h3 className="max-w-md truncate text-sm"> {namePin} </h3>
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center gap-2 text-xs">
              <p> {date} </p>
              {(routerPath === 'tv' || routerPath === 'movie') && (
                <p className="flex items-center gap-[1px]">
                  <StarIcon className="h-3 w-3" /> {vote_average || '-'}
                </p>
              )}
            </div>

            {/* <div
              className={`items-center justify-center rounded-md border-[1px] border-slate-50/30 p-[3px] text-xs ${
                media_type !== 'tv' ? 'capitalize' : 'uppercase'
              }`}
            >
              <p>{media_type}</p>
            </div> */}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default SearchPin
