import Link from 'next/link'

const PersonCredit = ({
  info: {
    title,
    original_title,
    character,
    job,
    name,
    original_name,
    first_air_date,
    episode_count,
    media_type,
    release_date,
    id,
  },
}) => {
  const re = /[^a-zA-Z0-9-]/g

  const url = [
    id,
    (title || original_title || name || original_name)
      ?.split(' ')
      .join('-')
      .replace(re, '')
      .toLowerCase(),
  ].join('-')

  const date = (first_air_date || release_date)?.slice(0, 4) || '-'

  const nbEpisodes = episode_count
    ? episode_count > 1
      ? `(${episode_count} episodes)`
      : `(${episode_count} episode)`
    : ''

  return (
    <div className="flex gap-x-3 py-2">
      <p className="flex w-10 justify-center">{date}</p>

      <div className="flex flex-1 flex-wrap items-center gap-x-1 text-gray-200">
        <Link href={`/${media_type === 'tv' ? 'tv' : 'movie'}/${url}`}>
          <a className="text-white hover:text-blue-400 sm:font-medium">
            {title || original_title || name || original_name}
          </a>
        </Link>

        <p className="text-sm">{nbEpisodes}</p>

        {(character || job) && (
          <p>
            <span className="text-gray-300/70">as</span> {character || job}
          </p>
        )}
      </div>
    </div>
  )
}

export default PersonCredit
