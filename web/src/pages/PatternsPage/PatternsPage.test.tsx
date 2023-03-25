import { render } from '@redwoodjs/testing/web'

import PatternsPage from './PatternsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PatternsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PatternsPage />)
    }).not.toThrow()
  })
})
