import Image from 'next/image'

import person from '../../public/person.jpg'

const LeftPerson = ({
  person: {
    also_known_as,
    birthday,
    deathday,
    known_for_department,
    place_of_birth,
    profile_path,
    gender,
    name,
  },
}) => {
  const age =
    (deathday ? new Date(deathday) : new Date()).getFullYear() -
    new Date(birthday).getFullYear()

  const Info = ({ show, text, data, isArray }) =>
    data?.length > 0 &&
    data && (
      <div className={`${show && 'hidden lg:flex lg:flex-col'}`}>
        <p className="font-medium text-white"> {text} </p>
        {!isArray ? (
          <p> {data} </p>
        ) : (
          data?.map((d) => (
            <p key={`key-${d}`} className="py-1">
              {d}
            </p>
          ))
        )}
      </div>
    )

  return (
    <div className="flex flex-col gap-5">
      <div className="relative">
        <Image
          src={
            profile_path
              ? `${process.env.NEXT_PUBLIC_BASE_URL}${profile_path}`
              : person
          }
          layout="responsive"
          blurDataURL={
            profile_path
              ? `${process.env.NEXT_PUBLIC_BASE_URL}${profile_path}`
              : person
          }
          width={100}
          height={150}
          // width={350}
          // height={500}
          objectFit="cover"
          className="rounded-full sm:rounded-lg"
        />
      </div>

      <h1 className="my-3 text-center text-3xl font-semibold text-white lg:hidden">
        {name}
      </h1>

      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-white">Personal Info</h3>

        <Info text="Know For" data={known_for_department} />
        <Info text="Gender" data={gender === 1 ? 'Female' : 'Male'} />
        <Info text="Birthday" data={`${birthday} (${age} years old)`} />
        {deathday && <Info text="Deathday" data={deathday} />}
        <Info text="Place of Birth" data={place_of_birth} />
        <Info show text="Also known As" isArray data={also_known_as} />
      </div>
    </div>
  )
}

export default LeftPerson
