import { PersonCredit } from './'

const CreditModal = ({ name, data }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-lg font-medium text-white"> {name} </h1>

      <div className="rounded-md bg-zinc-800 p-3 shadow-md shadow-zinc-800">
        {data?.map((d) => (
          <PersonCredit info={d} key={d?.id} />
        ))}
      </div>
    </div>
  )
}

export default CreditModal
