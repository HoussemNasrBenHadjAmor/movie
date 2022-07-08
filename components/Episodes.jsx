import { SingleEpisode } from './'

const Episodes = ({ season }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-medium text-white">
        Episodes{' '}
        <span className="font-normal opacity-75">
          {season?.episodes?.length}
        </span>
      </h1>

      <div className="flex flex-col gap-10">
        {season?.episodes?.map((episode) => (
          <div className="rounded-md bg-zinc-800 shadow-lg shadow-zinc-800/30">
            <SingleEpisode episode={episode} />
          </div>
        ))}

        {season?.episodes?.length < 1 && (
          <p>Sorry, there are no episodes added to this season. </p>
        )}
      </div>
    </div>
  )
}

export default Episodes
