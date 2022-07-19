import { Credit } from './'

const Credits = ({ data, crew, bg, all, text }) => {
  const dataToMap = all ? data : crew ? data?.slice(0, 8) : data?.slice(0, 12)

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-xl font-semibold text-white">
        {text} {crew ? 'Crew' : 'Cast'}
      </h1>

      <div
        className={`grid grid-cols-1 gap-5 ${
          bg && 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        }`}
      >
        {dataToMap?.map((d) => (
          <Credit credit={d} key={d?.id} bg={bg} />
        ))}
      </div>

      {bg && <div className="mt-3 border-b-[1px] opacity-40" />}
    </div>
  )
}

export default Credits
