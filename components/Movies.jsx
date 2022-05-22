import { Movie } from '.'
const Movies = ({ data }) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-4 3xl:flex 3xl:flex-grow 3xl:items-center">
      {data?.map((d) => (
        <Movie data={d} key={d.id} />
      ))}
    </div>
  )
}

export default Movies
