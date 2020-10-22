import React from 'react'
import { shallow } from 'enzyme'
import SearchBox from './SearchBox'

it('successfully renders Header', () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot()
})
