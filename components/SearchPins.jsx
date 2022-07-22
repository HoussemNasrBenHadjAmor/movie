import { SearchPin } from './'

const SearchPins = ({ data }) => {
  return (
    <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 2xl:grid-cols-8 3xl:grid-cols-10">
      {data?.map((pin) => (
        <SearchPin pin={pin} key={pin?.id} />
      ))}
    </div>
  )
}

export default SearchPins
