import { Recommendation } from './'

const Recommendations = ({ recommendations }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-base text-white sm:text-xl">Recommendations</h1>

      {recommendations && recommendations?.length > 0 ? (
        <div className="flex flex-row flex-nowrap gap-4 overflow-scroll pb-3 scrollbar-hide">
          {recommendations?.map((rec) => (
            <Recommendation key={rec.id} recommendation={rec} />
          ))}
        </div>
      ) : (
        <p>
          We don't have enough data to suggest any movies based on Blasted. You
          can help by rating movies you've seen.
        </p>
      )}
    </div>
  )
}

export default Recommendations
