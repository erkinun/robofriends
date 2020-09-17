import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardList from './components/CardList'
import SearchBox from './components/SearchBox'
import Scroll from './components/Scroll'
import ErrorBoundary from './components/ErrorBoundary'
import { setSearchField } from './store/search'

export default () => {
  const [rbts, setRobots] = useState([])
  const [filtered, filterRobots] = useState(rbts)
  const searchField = useSelector((state) => state.searchField)
  const dispatch = useDispatch()

  const onSearchChange = (event) => {
    filterRobots(rbts.filter((r) => r.name.toLowerCase().includes(event.target.value)))
    dispatch(setSearchField(event.target.value))
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
      <SearchBox onSearch={onSearchChange} searchField={searchField} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filtered} />
        </ErrorBoundary>
      </Scroll>
    </div>
  )
}
