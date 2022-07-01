import { useRecoilState } from 'recoil'
import { modalState, trailerState } from '../atoms/modalAtom'

import prettyMilliseconds from 'pretty-ms'

import { PlayIcon } from '@heroicons/react/solid'

const Poster = ({ movieDetails, video }) => {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [trailer, setTrailer] = useRecoilState(trailerState)

  return (
    <div className="items-center justify-center lg:flex">
      <div className="relative flex w-full flex-col items-center justify-center">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${movieDetails?.backdrop_path}`}
          className="-z-50 h-52 w-full object-cover lg:h-[500px] lg:opacity-10"
        />

        <div className="absolute left-4 z-50 mx-auto max-w-[1400px] sm:px-5 lg:inset-auto">
          <div className="flex items-center justify-center gap-5">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${movieDetails?.poster_path}`}
              className="h-36 w-auto rounded-md object-contain shadow-md md:h-48 lg:h-[450px]"
            />

            <div className="mx-auto hidden flex-col gap-3 lg:flex">
              <h3 className="text-3xl font-semibold text-white">
                {movieDetails?.title ||
                  movieDetails?.original_title ||
                  movieDetails?.name ||
                  movieDetails?.original_name}{' '}
                (
                {movieDetails?.release_date?.substring(0, 4) ||
                  movieDetails?.first_air_date?.substring(0, 4)}
                )
              </h3>

              <p className="flex items-center gap-1">
                {movieDetails?.release_date || movieDetails?.first_air_date} (
                {movieDetails?.production_countries?.length
                  ? movieDetails?.production_countries[0]?.iso_3166_1
                  : movieDetails?.original_language?.toUpperCase()}
                ) • {movieDetails?.genres?.map((g) => g.name).join(', ')} •{' '}
                {movieDetails?.runtime
                  ? prettyMilliseconds(movieDetails?.runtime * 60 * 1000)
                  : movieDetails?.episode_run_time
                  ? prettyMilliseconds(
                      movieDetails?.episode_run_time[0] * 60 * 1000
                    )
                  : null}
              </p>

              {video && (
                <button
                  onClick={() => {
                    setTrailer(video)
                    setShowModal(true)
                  }}
                  className="flex max-w-[140px] items-center justify-center gap-1 rounded-md bg-slate-700 p-2 transition-all duration-300 ease-in-out hover:bg-slate-900 hover:text-white"
                >
                  <PlayIcon className="h-5 w-5" />
                  Play Trailer
                </button>
              )}

              <p className="text-lg font-medium text-gray-400">
                {movieDetails?.tagline}
              </p>

              <div className="flex flex-col gap-2">
                <p className="text-2xl">Overview</p>
                <p>
                  {movieDetails?.overview
                    ? movieDetails?.overview
                    : "We don't have an overview translated in English. Help us expand our movieDetailsbase by adding one."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2 lg:hidden">
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-center text-lg font-semibold text-white">
            {movieDetails?.title ||
              movieDetails?.original_title ||
              movieDetails?.name ||
              movieDetails?.original_name}{' '}
            (
            {movieDetails?.release_date?.substring(0, 4) ||
              movieDetails?.first_air_date?.substring(0, 4)}
            )
          </h3>

          <div className="flex flex-col items-center justify-center">
            <p>
              {movieDetails?.release_date || movieDetails?.first_air_date} (
              {movieDetails?.production_countries?.length
                ? movieDetails?.production_countries[0]?.iso_3166_1
                : movieDetails?.original_language?.toUpperCase()}
              ) •{' '}
              {movieDetails?.runtime
                ? prettyMilliseconds(movieDetails?.runtime * 60 * 1000)
                : movieDetails?.episode_run_time
                ? prettyMilliseconds(
                    movieDetails?.episode_run_time[0] * 60 * 1000
                  )
                : null}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-1">
              {movieDetails?.genres?.map((g) => g.name).join(', ')}
            </div>

            {video && (
              <button
                onClick={() => {
                  setTrailer(video)
                  setShowModal(true)
                }}
                className="mt-4 flex max-w-[140px] items-center justify-center gap-1 rounded-md bg-slate-700 p-2 text-sm transition-all duration-300 ease-in-out hover:bg-slate-900 hover:text-white"
              >
                <PlayIcon className="h-5 w-5" />
                Play Trailer
              </button>
            )}
          </div>
        </div>

        <div className="mt-3 px-5">
          <p className="text-sm text-gray-400">{movieDetails?.tagline}</p>

          <div className="flex flex-col gap-2">
            <p className="text-2xl">Overview</p>

            <p>
              {movieDetails?.overview
                ? movieDetails?.overview
                : "We don't have an overview translated in English. Help us expand our database by adding one."}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Poster
