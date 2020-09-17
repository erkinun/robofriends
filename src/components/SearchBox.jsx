import React from 'react'

export default ({ onSearch, searchField }) => (
  <div>
    <p>You search for: {searchField}</p>
    <input
      onChange={onSearch}
      className='pa3 ba b--green bg-lightest-blue'
      type='search'
      placeholder='Search for robots'
      value={searchField}
    />
  </div>
)
