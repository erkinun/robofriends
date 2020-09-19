import { takeEvery, put, call } from 'redux-saga/effects'

const FETCH_ROBOTS_PENDING = 'FETCH_ROBOTS_PENDING'
const FETCH_ROBOTS_SUCCEEDED = 'FETCH_ROBOTS_SUCCEEDED'
const FETCH_ROBOTS_FAILED = 'FETCH_ROBOTS_FAILED'

export const fetchRobotsStart = () => ({
  type: FETCH_ROBOTS_PENDING,
})

export const fetchRobotsSucceeded = (robots) => ({
  type: FETCH_ROBOTS_SUCCEEDED,
  payload: robots,
})

const fetchRobotsFailed = (error) => ({
  type: FETCH_ROBOTS_FAILED,
  payload: error,
})

const initialState = {
  robots: [],
}

// TODO handle the error somewhere? in errors reducer maybe?
export const fetchRobotsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ROBOTS_PENDING:
      return {
        ...state,
        isPending: true,
      }
    case FETCH_ROBOTS_SUCCEEDED:
      return {
        robots: action.payload,
        isPending: false,
      }
    default:
      return state
  }
}

export function* fetchRobots() {
  try {
    const result = yield fetch('https://jsonplaceholder.typicode.com/users')
    const robots = yield result.json()
    yield put(fetchRobotsSucceeded(robots))
  } catch (error) {
    yield put(fetchRobotsFailed(error))
  }
}

export function* robotsSagas() {
  yield put(fetchRobotsStart())
  yield call(fetchRobots)
  yield takeEvery(FETCH_ROBOTS_PENDING, fetchRobots)
}
