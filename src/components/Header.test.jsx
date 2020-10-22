import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

it('successfully renders Header', () => {
  expect(shallow(<Header />)).toMatchSnapshot()
})
