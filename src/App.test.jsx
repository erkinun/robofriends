import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'
import Card from './components/Card'
import reducer from './store/reducers'

describe('<App /> unit test or integration test?', () => {
  const mockStore = createStore(reducer, {
    fetchRobotsReducer: {
      robots: [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
        },
      ],
    },
  })
  const getWrapper = () =>
    mount(
      <Provider store={mockStore}>
        <App />
      </Provider>
    )
  it('renders application', () => {
    expect(getWrapper()).toMatchSnapshot()
  })

  it('renders some robots', () => {
    expect(getWrapper().find(Card).length).toBe(3)
  })
})
