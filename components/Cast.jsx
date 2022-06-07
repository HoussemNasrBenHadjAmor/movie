const Cast = ({ cast: { character, profile_path, name, original_name } }) => {
  return (
    <div className="flex min-w-[128px] max-w-[128px] flex-col gap-3 rounded-lg bg-white pb-3 shadow-md sm:min-w-[150px] sm:max-w-[150px]">
      <img
        src={`${process.env.NEXT_PUBLIC_BASE_URL}${profile_path}`}
        className="h-32 w-full rounded-t-lg object-cover sm:h-[180px]"
      />

      <div className="flex max-w-[150px] flex-col px-3">
        <p className="cursor-pointer text-sm font-bold text-black hover:text-gray-500">
          {name || original_name}
        </p>

        <p className="text-sm text-gray-700">{character}</p>
      </div>
    </div>
  )
}

export default Cast
