import { Credit } from './'

const Credits = ({ data, crew }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-xl font-semibold text-white">
        Featured {crew ? 'Crew' : 'Cast'}
      </h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {crew
          ? data?.slice(0, 8)?.map((d) => <Credit credit={d} key={d?.id} bg />)
          : data
              ?.slice(0, 12)
              ?.map((d) => <Credit credit={d} key={d?.id} bg />)}
      </div>

      <div className="mt-3 border-b-[1px] opacity-40" />
    </div>
  )
}

export default Credits
