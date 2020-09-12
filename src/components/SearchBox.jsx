import React from 'react'

export default ({ onSearch }) => (
  <div>
    <input
      onChange={onSearch}
      className='pa3 ba b--green bg-lightest-blue'
      type='search'
      placeholder='Search for robots'
    />
  </div>
)
