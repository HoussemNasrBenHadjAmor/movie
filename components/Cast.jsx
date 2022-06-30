import Link from 'next/link'

import defaultPerson from '../public/person.jpg'

const Cast = ({
  cast: { character, profile_path, name, original_name, id },
  nbEp,
}) => {
  const personUrl = [
    id,
    (name || original_name)?.split(' ')?.join('-').toLowerCase(),
  ].join('-')

  return (
    <div className="flex min-w-[128px] max-w-[128px] flex-col gap-3 rounded-lg bg-white pb-3 shadow-md sm:min-w-[150px] sm:max-w-[150px]">
      <Link href={`/person/${personUrl}`}>
        <a>
          <img
            src={
              profile_path
                ? `${process.env.NEXT_PUBLIC_BASE_URL}${profile_path}`
                : defaultPerson.src
            }
            className="h-32 w-full rounded-t-lg object-cover sm:h-[180px]"
          />
        </a>
      </Link>

      <div className="flex flex-col px-2 text-sm text-gray-700">
        <Link href={`/person/${personUrl}`}>
          <a className="font-bold text-black hover:text-gray-500">
            {name || original_name}
          </a>
        </Link>

        <p>{character}</p>
        {nbEp && <p className="text-xs text-gray-400">{nbEp} Episodes</p>}
      </div>
    </div>
  )
}

export default Cast
