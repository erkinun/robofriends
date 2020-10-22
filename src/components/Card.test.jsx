import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

it('renders cards successfully', () => {
  expect(shallow(<Card />)).toMatchSnapshot()
})
