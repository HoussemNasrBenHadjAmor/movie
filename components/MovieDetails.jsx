import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa'

import { LinkIcon } from '@heroicons/react/outline'

const MovieDetails = ({ links, keywords, movieDetails }) => {
  const SocialMedia = ({ media, Icon, href }) => (
    <a href={`${href}/${media}`} target="_blank">
      <Icon className="h-5 w-5" />
    </a>
  )

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex items-center gap-x-3">
        <SocialMedia
          href="https://www.facebook.com"
          Icon={FaFacebookSquare}
          media={links.facebook_id}
        />
        <SocialMedia
          href="https://www.twitter.com"
          Icon={FaTwitter}
          media={links.facebook_id}
        />
        <SocialMedia
          href="https://www.instagram.com"
          Icon={FaInstagram}
          media={links.facebook_id}
        />

        <hr className="h-7 border-[0.5px] border-slate-200" />

        <SocialMedia href={movieDetails?.homepage} Icon={LinkIcon} media="" />
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <p className="font-semibold">Status</p>
          <p className="font-light">{movieDetails?.status}</p>
        </div>

        <div>
          <p className="font-semibold">Original Language</p>
          <p className="font-light">
            {movieDetails?.spoken_languages[0]?.name}

            {/* {movieDetails?.spoken_languages?.filter(({ english_name }) =>
              english_name === 'English'
                ? english_name
                : movieDetails.spoken_languages[0]?.english_name
            )} */}
            {/* {movieDetails?.original_language} */}
          </p>
        </div>

        <div>
          <p className="font-semibold">Budget</p>
          <p className="font-light">
            {movieDetails?.budget > 0 ? `$${movieDetails?.budget}` : '-'}
          </p>
        </div>

        <div>
          <p className="font-semibold">Revenue</p>
          <p className="font-light">
            {movieDetails?.revenue > 0 ? `$${movieDetails?.revenue}` : '-'}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold">Keywords</p>

          <div className="flex flex-wrap gap-2">
            {keywords?.map(({ name, id }) => (
              <div
                key={id}
                className="rounded-md bg-slate-100 px-3 py-1 text-center text-sm text-black"
              >
                <p> {name} </p>
              </div>
            ))}

            {keywords?.length === 0 && <p>No keywords have been added.</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
