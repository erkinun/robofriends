import React from 'react'

const card = ({ name }) => {
  const url = `https://robohash.org/${name}`
  return (
    <div>
      <img alt='photo' src={url} />
      <div>
        <h2>{name}</h2>
        <p>jane.doe@gmail.com</p>
      </div>
    </div>
  )
}

export default card
