import { render } from '@redwoodjs/testing/web'

import PinnedPage from './PinnedPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PinnedPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PinnedPage />)
    }).not.toThrow()
  })
})
