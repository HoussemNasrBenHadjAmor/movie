import { useState } from 'react'

import { CreditModal } from '../../'

const RightSide = ({ credits, bio, name }) => {
  const [more, setMore] = useState(false)

  const OpenCloseButton = ({ text }) => (
    <button
      className="ml-2 text-xs text-blue-400 duration-200 ease-in-out hover:text-blue-600"
      onClick={() => setMore((prev) => !prev)}
    >
      {text}
    </button>
  )

  return (
    <div className="flex flex-col gap-8">
      <h1 className="hidden text-2xl font-bold text-white lg:flex lg:text-3xl">
        {name}
      </h1>

      <div className="flex flex-col gap-3 text-sm sm:text-base">
        <h3 className="text-xl font-medium text-white">Biography</h3>

        {bio?.length > 650 ? (
          more ? (
            <p className="transition-all duration-300 ease-in-out">
              {bio}
              <OpenCloseButton text="Read Less" />
            </p>
          ) : (
            <p className="transition-all duration-300 ease-in-out">
              {bio?.slice(0, 650) + '...'}
              <OpenCloseButton text="Read More" />
            </p>
          )
        ) : (
          <p>{bio}</p>
        )}
      </div>

      {/**
       *TODO --- KNOW FOR Component !!
       */}

      {credits?.cast && <CreditModal data={credits?.cast} name="Acting" />}

      {credits?.crew && <CreditModal data={credits?.crew} name="Production" />}
    </div>
  )
}

export default RightSide
