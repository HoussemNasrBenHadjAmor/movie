import Link from 'next/link'

import { Tag } from './'

import currencyFormatter from 'currency-formatter'

import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa'

import { LinkIcon } from '@heroicons/react/outline'

const fbLink = 'https://www.facebook.com'
const twitterLink = 'https://www.twitter.com'
const instLink = 'https://www.instagram.com'

const MovieDetails = ({ links, keywords, movieDetails }) => {
  const originalLanguage = movieDetails?.spoken_languages?.filter(
    ({ english_name }) => english_name === 'English'
  )[0]

  const SocialMedia = ({ media, Icon, href }) =>
    media !== null && (
      <a href={`${href}/${media}`} target="_blank">
        <Icon className="h-5 w-5" />
      </a>
    )

  return (
    <div className="flex flex-col gap-3">
      <div className="mb-3 flex items-center gap-x-3">
        <SocialMedia
          href={fbLink}
          Icon={FaFacebookSquare}
          media={links.facebook_id}
        />
        <SocialMedia
          href={twitterLink}
          Icon={FaTwitter}
          media={links.twitter_id}
        />
        <SocialMedia
          href={instLink}
          Icon={FaInstagram}
          media={links.instagram_id}
        />

        {!links?.instagram_id &&
        !links?.facebook_id &&
        !links?.twitter_id ? null : (
          <hr className="h-7 border-[0.5px] border-slate-200" />
        )}
        <SocialMedia href={movieDetails?.homepage} Icon={LinkIcon} media="" />
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <p className="font-semibold">Status</p>
          <p className="font-light">{movieDetails?.status}</p>
        </div>

        {movieDetails?.networks && (
          <div className="font-semibold">
            <p>Network</p>
            <div className="mt-2 flex flex-row flex-wrap items-center gap-4">
              {movieDetails?.networks?.map(({ id, logo_path }) => (
                <Link href={`/network/${id}`} key={id}>
                  <a>
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${logo_path}`}
                      alt="network"
                      className="w-[80px] object-contain"
                    />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}

        {movieDetails?.type && (
          <div className="font-semibold">
            <p>Type</p>
            <p className="font-light">{movieDetails?.type}</p>
          </div>
        )}

        <div className="font-semibold">
          <p>Original Language</p>
          <p className="font-light">
            {originalLanguage
              ? originalLanguage?.english_name
              : movieDetails?.spoken_languages[0]?.english_name}
          </p>
        </div>

        {movieDetails?.budget >= 0 && (
          <div className="font-semibold">
            <p>Budget</p>
            <p className="font-light">
              {movieDetails?.budget > 0
                ? currencyFormatter.format(movieDetails?.budget, {
                    code: 'USD',
                  })
                : '-'}
            </p>
          </div>
        )}

        {movieDetails?.revenue >= 0 && (
          <div className="font-semibold">
            <p>Revenue</p>
            <p className="font-light">
              {movieDetails?.revenue > 0
                ? currencyFormatter.format(movieDetails?.revenue, {
                    code: 'USD',
                  })
                : '-'}
            </p>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <p className="font-semibold">Keywords</p>

          <div className="flex flex-wrap gap-2">
            {keywords?.map(({ name, id }) => (
              <Tag key={id} name={name} id={id} />
            ))}

            {keywords?.length === 0 && <p>No keywords have been added.</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
