import { render } from '@redwoodjs/testing/web'

import ViewTextEntry from './ViewTextEntry'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ViewTextEntry', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ViewTextEntry />)
    }).not.toThrow()
  })
})
