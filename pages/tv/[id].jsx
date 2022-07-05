import { useRecoilValue } from 'recoil'

import { modalState } from '../../atoms/modalAtom'

import { Poster, MovieBody, Modal } from '../../components'

const Movie = ({
  tvDetails,
  casts,
  externalLinks,
  keywords,
  recommendations,
  video,
  lastSeason,
}) => {
  const showModal = useRecoilValue(modalState)

  return (
    <div className="flex flex-col gap-y-3">
      <Poster movieDetails={tvDetails} video={video} />

      <MovieBody
        links={externalLinks}
        keywords={keywords}
        movieDetails={tvDetails}
        casts={casts}
        movieName={
          tvDetails.title ||
          tvDetails.original_title ||
          tvDetails?.name ||
          tvDetails?.original_name
        }
        recommendations={recommendations}
        lastSeason={lastSeason}
      />

      {showModal && <Modal />}
    </div>
  )
}

export default Movie

export const getServerSideProps = async (ctx) => {
  var { id } = ctx.query

  id = id?.split('-')[0]

  const tvDetails = await fetch(
    `${process.env.API_URL}tv/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos,keywords,external_ids,recommendations,credits`
  ).then((res) => res.json())

  const index = tvDetails?.videos?.results?.findIndex(
    (v) => v.type.toLowerCase() === 'trailer'
  )

  const trailer = tvDetails?.videos?.results[index]?.key || 'juxTC7hYGTE'

  const lastSeason = tvDetails?.seasons?.filter((s) => s.air_date).slice(-1)[0]

  return {
    props: {
      tvDetails,
      casts: tvDetails?.credits,
      externalLinks: tvDetails?.external_ids,
      keywords: tvDetails?.keywords?.results,
      recommendations: tvDetails?.recommendations?.results,
      video: trailer,
      lastSeason,
    },
  }
}
