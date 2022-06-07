import React from 'react'

const TvShow = ({ id }) => {
  return <div>the id : {id}</div>
}

export default TvShow

export const getServerSiderProps = (ctx) => {
  const { id } = ctx.query

  return {
    props: {
      id,
    },
  }
}
