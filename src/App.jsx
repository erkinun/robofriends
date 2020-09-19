import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardList from './components/CardList'
import SearchBox from './components/SearchBox'
import Scroll from './components/Scroll'
import ErrorBoundary from './components/ErrorBoundary'
import { setSearchField } from './store/search'

export default () => {
  const robots = useSelector((state) => state.fetchRobotsReducer.robots)
  const isPending = useSelector((state) => state.fetchRobotsReducer.isPending)
  const searchField = useSelector((state) => state.searchRobotsReducer.searchField)
  const dispatch = useDispatch()

  const filtered = robots.filter((r) => r.name.toLowerCase().includes(searchField))

  // TODO might want to fix the two states by just saving the search field state
  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox onSearch={(e) => dispatch(setSearchField(e.target.value))} searchField={searchField} />
      <Scroll>
        <ErrorBoundary>
          {isPending && <h2>Robots are coming!</h2>}
          <CardList robots={filtered} />
        </ErrorBoundary>
      </Scroll>
    </div>
  )
}
