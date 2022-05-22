import { Movie } from '.'
const Movies = ({ data }) => {
  return (
    <div className="mt-10 flex-wrap gap-5 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:flex">
      {data?.map((d) => (
        <Movie data={d} key={d.id} />
      ))}
    </div>
  )
}

export default Movies
