import { LeftPerson, RightSide } from '../../components'

const Person = ({ person }) => {
  return (
    <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-5 pb-10 lg:flex-row">
      <div className="w-full lg:w-1/4">
        <LeftPerson person={person} />
      </div>

      <div className="w-full lg:w-3/4">
        <RightSide
          name={person?.name}
          bio={
            person?.biography ||
            `We don't have a biography for ${person?.name}.`
          }
          credits={person?.credits}
        />
      </div>
    </div>
  )
}

export default Person

export const getServerSideProps = async (ctx) => {
  const id = ctx.query?.id?.split('-')[0]

  const person = await fetch(
    `${process.env.API_URL}person/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=credits`
  ).then((res) => res.json())

  return {
    props: {
      person,
    },
  }
}
