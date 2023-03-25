import { render } from '@redwoodjs/testing/web'

import ViewTextEntryPage from './ViewTextEntryPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ViewTextEntryPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ViewTextEntryPage />)
    }).not.toThrow()
  })
})
