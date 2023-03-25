import { render } from '@redwoodjs/testing/web'

import NarrativesPage from './NarrativesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NarrativesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NarrativesPage />)
    }).not.toThrow()
  })
})
