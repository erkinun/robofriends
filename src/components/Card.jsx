import React from 'react'

const card = ({ id, name, username, email }) => {
  const url = `https://robohash.org/${id}`
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robot' src={url} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default card
