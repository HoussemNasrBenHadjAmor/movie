import React from 'react'

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-zinc-900 p-5">
      <p className="">© All Rights Reserved {new Date().getFullYear()} </p>
    </div>
  )
}

export default Footer
