import Link from 'next/link'
import Image from 'next/image'
import person from '../public/person.jpg'

const Credit = ({
  credit: {
    id,
    known_for_department,
    name,
    original_name,
    character,
    profile_path,
  },
  bg,
}) => {
  const link = [
    id,
    (name || original_name)?.split(' ')?.join('-')?.toLowerCase(),
  ].join('-')

  return (
    <div
      className={`flex items-center gap-3 ${
        bg && 'rounded-md bg-zinc-800 shadow-md shadow-zinc-800/70'
      }`}
    >
      <Link href={`/person/${link}`}>
        <a className="relative flex">
          <Image
            src={
              profile_path
                ? `${process.env.NEXT_PUBLIC_BASE_URL}${profile_path}`
                : person.src
            }
            layout="fixed"
            height={65}
            width={65}
            objectFit="cover"
            placeholder="blur"
            blurDataURL={
              profile_path
                ? `${process.env.NEXT_PUBLIC_BASE_URL}${profile_path}`
                : person.src
            }
            className={`rounded-tl-md rounded-bl-md ${!bg && 'rounded-md'}`}
          />
        </a>
      </Link>

      <div>
        <Link href={`/person/${link}`}>
          <a className="font-medium text-white hover:opacity-90">
            {name || original_name}
          </a>
        </Link>

        <p
          className={`text-sm ${
            bg && 'max-w-[150px] truncate sm:max-w-[175px] md:max-w-[200px]'
          }`}
        >
          {(character ? character : known_for_department) || null}
        </p>
      </div>
    </div>
  )
}

export default Credit
