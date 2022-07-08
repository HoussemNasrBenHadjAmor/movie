import Link from 'next/link'
import { ArrowSmLeftIcon, ArrowSmRightIcon } from '@heroicons/react/outline'

const NextPrevSeason = ({ season, allSeasons, link }) => {
  const isFirst = allSeasons[0]?.id === season?.id

  const isLast = allSeasons[allSeasons?.length - 1]?.id === season?.id

  const Move = ({ name, direction, next }) => (
    <Link href={`/tv/${link}/season/${next}`}>
      <a>
        {direction === 'right' ? (
          <p className="flex items-center gap-x-1 hover:opacity-75">
            {name} <ArrowSmRightIcon className="w-5" />
          </p>
        ) : (
          <p className="flex items-center gap-x-1 hover:opacity-75">
            <ArrowSmLeftIcon className="w-5" />
            {name}
          </p>
        )}
      </a>
    </Link>
  )

  return (
    <div
      className={`flex items-center ${
        isFirst ? 'justify-end' : isLast ? 'justify-start' : 'justify-between'
      } border-b-[1px] py-3`}
    >
      {!isFirst && (
        <Move
          direction="left"
          name={`Season ${season?.season_number - 1}`}
          next={`${season?.season_number - 1}`}
        />
      )}

      {!isLast && (
        <Move
          direction="right"
          name={`Season ${season?.season_number + 1}`}
          next={`${season?.season_number + 1}`}
        />
      )}
    </div>
  )
}

export default NextPrevSeason
