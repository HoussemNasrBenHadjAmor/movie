import { useState, useEffect } from 'react'

const Pagination = ({ info: { currentPage, totalPages } }) => {
  const array = []

  for (let i = 0; i < totalPages; i++) {
    array.push(i)
  }

  const mapedArray =
    array?.length > 9
      ? `${array?.slice(0, 3)}...${array?.slice(
          array?.length - 1,
          array?.length
        )}`
      : array

  console.log('mapedArray', mapedArray)

  const Modal = ({ i }) => (
    <div
      className={`flex items-center justify-center rounded-full bg-zinc-900 p-1 px-2 ${
        currentPage === i && 'bg-gray-50 text-black'
      }`}
    >
      <p> {i} </p>
    </div>
  )

  return (
    <div className="flex gap-2">
      {array?.map((i) => (
        <Modal i={i + 1} />
      ))}
    </div>
  )
}

export default Pagination
