import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ info: { currentPage, totalPages } }) => {
  const communStyle = 'px-2 p-1 rounded-full'
  const items = []
  for (let i = 1; i <= totalPages; i++) {
    items.push(i)
  }
  const { pathname, query } = useRouter()
  const routerPath = pathname.slice(8, pathname.length) || ''
  const itemsPerPage = 1
  const pageCount = Math.ceil(items.length / itemsPerPage)
  const [searchQuery, setSearchQuery] = useState('')

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    router.push(
      `/search/${routerPath}?query=${searchQuery}&page=${newOffset + 1}`
    )
  }

  useEffect(() => {
    setSearchQuery(query || '')
  }, [pageCount])

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={4}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
      activeClassName={`${communStyle} bg-gray-50 text-black`}
      className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3"
      nextClassName={`${communStyle} text-white bg-zinc-900`}
      previousClassName={`${communStyle} text-white bg-zinc-900`}
      disabledClassName="bg-gray-100/20 cursor-not-allowed"
      disabledLinkClassName="cursor-not-allowed"
      pageClassName={communStyle}
      forcePage={currentPage - 1}
    />
  )
}

export default Pagination
