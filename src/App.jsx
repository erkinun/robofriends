import React, { useState, useEffect } from 'react'
import CardList from './components/CardList'
import SearchBox from './components/SearchBox'
import Scroll from './components/Scroll'
import ErrorBoundary from './components/ErrorBoundary'

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
        <ErrorBoundary>
          <CardList robots={filtered} />
        </ErrorBoundary>
      </Scroll>
    </div>
  )
}
