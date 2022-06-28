import Image from 'next/image'
import prettyMilliseconds from 'pretty-ms'

const Poster = ({ movieDetails }) => {
  return (
    <div className="items-center justify-center lg:flex">
      <div className="relative flex w-full flex-col items-center justify-center">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${movieDetails?.backdrop_path}`}
          className="-z-50 h-52 w-full object-cover lg:h-[500px] lg:opacity-10"
          loading="lazy"
        />

        <div className="absolute left-4 z-50 lg:inset-auto xl:px-3">
          <div className="flex items-center justify-center gap-5">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${movieDetails?.poster_path}`}
              className="h-32 w-auto rounded-md object-contain shadow-md md:h-48 lg:h-[400px]"
              loading="lazy"
            />

            <div className="mx-auto hidden flex-col gap-3 lg:flex lg:max-w-2xl xl:max-w-5xl">
              <h3 className="text-3xl font-semibold text-white">
                {movieDetails?.original_title || movieDetails?.title} (
                {movieDetails?.release_date?.substring(0, 4)})
              </h3>

              <p className="flex items-center gap-1">
                {movieDetails?.release_date} (
                {movieDetails?.production_countries[0]?.iso_3166_1}) •{' '}
                {movieDetails?.genres?.map((g) => g.name).join(', ')} •{' '}
                {movieDetails?.runtime
                  ? prettyMilliseconds(movieDetails?.runtime * 60 * 1000)
                  : null}
              </p>

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
            {movieDetails?.original_title || movieDetails?.title} (
            {movieDetails?.release_date?.substring(0, 4)})
          </h3>

          <div className="flex flex-col items-center justify-center">
            <p>
              {movieDetails?.release_date} (
              {movieDetails?.production_countries[0].iso_3166_1}) •{' '}
              {movieDetails?.runtime
                ? prettyMilliseconds(movieDetails?.runtime * 60 * 1000)
                : null}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-1">
              {movieDetails?.genres?.map((g) => g.name).join(', ')}
            </div>
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
