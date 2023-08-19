const Tag = ({ name }) => {
  const communName = name?.split(' ')?.join('-')

  return (
    <p className="rounded-md bg-slate-100 px-3 py-1 text-center text-sm text-black">
      {name}
    </p>
  )
}

export default Tag
