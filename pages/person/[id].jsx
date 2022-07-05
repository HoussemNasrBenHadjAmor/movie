const Person = () => {
  return <div>person</div>
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

  console.log('personDetails', personDetails)

  
  // console.log('personCredits', personCredits)

  return {
    props: {
      personDetails,
      personCredits,
    },
  }
}
