import { LeftPerson, RightSide } from '../../components'

const Person = ({ personDetails, personCredits }) => {
  return (
    <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-5 pb-10 lg:flex-row">
      <div className="w-full lg:w-1/4">
        <LeftPerson person={personDetails} />
      </div>

      <div className="w-full lg:w-3/4">
        <RightSide
          name={personDetails?.name}
          bio={
            personDetails?.biography ||
            `We don't have a biography for ${personDetails?.name}.`
          }
          credits={personCredits}
        />
      </div>
    </div>
  )
}

export default Person

export const getServerSideProps = async (ctx) => {
  const id = ctx.query?.id?.split('-')[0]

  const [personDetails, personCredits] = await Promise.all([
    fetch(
      `${process.env.API_URL}person/${id}?api_key=${process.env.API_KEY}&language=en-US`
    ).then((res) => res.json()),
    fetch(
      `${process.env.API_URL}person/${id}/combined_credits?api_key=${process.env.API_KEY}&language=en-US`
    ).then((res) => res.json()),
  ])

  return {
    props: {
      personDetails,
      personCredits,
    },
  }
}
