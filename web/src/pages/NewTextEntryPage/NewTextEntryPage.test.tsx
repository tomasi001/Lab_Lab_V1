import { render } from '@redwoodjs/testing/web'

import NewTextEntryPage from './NewTextEntryPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewTextEntryPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewTextEntryPage />)
    }).not.toThrow()
  })
})
