import React from 'react'
import { shallow } from 'enzyme'
import CardList from './CardList'

it('successfully renders Header', () => {
  expect(shallow(<CardList robots={[]} />)).toMatchSnapshot()
})
