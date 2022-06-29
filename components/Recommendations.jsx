import { Recommendation } from './'

const Recommendations = ({ recommendations }) => {
  return (
    <div className="mb-5 flex flex-col gap-5">
      <h1 className="text-base text-white sm:text-xl">Recommendations</h1>

      <div className="flex flex-row flex-nowrap gap-4 overflow-scroll scrollbar-hide">
        {recommendations?.map((rec) => (
          <Recommendation key={rec.id} recommendation={rec} />
        ))}
      </div>
    </div>
  )
}

export default Recommendations
