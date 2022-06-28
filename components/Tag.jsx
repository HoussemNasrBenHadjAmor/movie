import Link from 'next/link'

const Tag = ({ id, name }) => {
  const communName = name?.split(' ')?.join('-')

  const link = [id, communName].join('-')

  return (
    <Link href={`/keyword/${link}/movie`}>
      <a className="rounded-md bg-slate-100 px-3 py-1 text-center text-sm text-black">
        {name}
      </a>
    </Link>
  )
}

export default Tag
