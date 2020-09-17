import { takeEvery, put } from 'redux-saga/effects'

const FETCH_ROBOTS_PENDING = 'FETCH_ROBOTS_PENDING'
const FETCH_ROBOTS_SUCCEEDED = 'FETCH_ROBOTS_SUCCEEDED'

export const fetchRobotsStart = () => ({
  type: FETCH_ROBOTS_PENDING,
})

export const fetchRobotsSucceeded = (robots) => ({
  type: FETCH_ROBOTS_SUCCEEDED,
  payload: robots,
})

const initialState = {
  robots: [],
}

export const fetchRobotsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'FETCH_ROBOTS_SUCCEEDED':
      return {
        robots: action.payload,
      }
    default:
      return state
  }
}

export function* fetchRobots() {
  try {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => fetchRobotsSucceeded(users))
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error })
  }
}

export function* robotsSagas() {
  yield takeEvery(FETCH_ROBOTS_PENDING, fetchRobots())
}
