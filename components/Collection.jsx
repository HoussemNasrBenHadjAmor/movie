import Link from 'next/link'

const imageURL = process.env.NEXT_PUBLIC_BASE_URL

const Collection = ({ collectionName, collectionDetails }) => {
  const link = [
    collectionName?.id,
    collectionName?.name?.split(' ').join('-').toLowerCase(),
  ].join('-')

  return (
    <div className="relative -mx-5 flex flex-col justify-center sm:mx-0">
      <div>
        <img
          src={
            `${imageURL}${collectionName?.backdrop_path}` ||
            `${imageURL}${collectionName?.poster_path}`
          }
          alt="collection-back"
          className="-z-50 h-[250px] w-screen object-cover opacity-20 sm:rounded-md"
        />
      </div>

      <div className="absolute z-50 flex flex-col gap-3 px-5">
        <div>
          <h3 className="text-lg font-semibold text-white sm:text-3xl">
            Part of the {collectionName?.name}
          </h3>

          <p className="text-xs sm:text-xl">
            Includes{' '}
            {collectionDetails
              ?.slice(0, 3)
              ?.map(({ title, original_title }) => title || original_title)
              .join(', ')}
          </p>
        </div>

        <Link href={`/collection/${link}`}>
          <a className="max-w-[250px] rounded-lg bg-slate-900 p-2 text-center font-medium uppercase transition-all duration-300 ease-in-out hover:bg-gray-900">
            View The Collection
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Collection
