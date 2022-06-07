import { useState } from 'react'

import { Movies } from '.'

import { PlayIcon, FilmIcon } from '@heroicons/react/outline'

const communButton =
  'flex items-center gap-2 rounded-md p-1 px-2 justify-center transition-all duration-300 ease-in-out'

const MovieModel = ({ tvTrending, movieTrending, isTrending, title, data }) => {
  const [movies, setMovies] = useState(true)

  return (
    <div className="mb-7">
      <div className="flex items-center gap-5">
        <h1 className="text-2xl">{title}</h1>

        {isTrending && (
          <div className="flex items-center gap-2">
            <button
              className={`${communButton} ${
                movies
                  ? 'bg-cyan-600 text-white'
                  : 'bg-zinc-600 hover:bg-zinc-700'
              }`}
              onClick={() => setMovies(!movies)}
            >
              <PlayIcon className="h-5 w-5" />
              Movies
            </button>

            <button
              className={`${communButton} ${
                !movies
                  ? 'bg-cyan-600 text-white'
                  : 'bg-zinc-600 hover:bg-zinc-700'
              }`}
              onClick={() => setMovies(!movies)}
            >
              <FilmIcon className="h-5 w-5" />
              TV Shows
            </button>
          </div>
        )}
      </div>

      <hr className="border-t-1 mt-2 w-9 opacity-20" />

      {isTrending ? (
        movies ? (
          <Movies data={movieTrending} />
        ) : (
          <Movies data={tvTrending} />
        )
      ) : (
        <Movies data={data} />
      )}
    </div>
  )
}

export default MovieModel
