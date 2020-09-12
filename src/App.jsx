import React, { useState, useEffect } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'

export default () => {
  const [rbts, setRobots] = useState([])
  const [filtered, filterRobots] = useState(rbts)

  const onSearchChange = (event) => {
    filterRobots(rbts.filter((r) => r.name.toLowerCase().includes(event.target.value)))
  }

  useEffect(() => {
    const fetchData = async () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => {
          setRobots(users)
          filterRobots(users)
        })
    }

    fetchData()
  }, [])

  // TODO might want to fix the two states by just saving the search field state
  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox onSearch={onSearchChange} />
      <Scroll>
        <CardList robots={filtered} />
      </Scroll>
    </div>
  )
}
