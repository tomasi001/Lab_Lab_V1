import { render } from '@redwoodjs/testing/web'

import ViewVoiceEntryPage from './ViewVoiceEntryPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ViewVoiceEntryPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ViewVoiceEntryPage />)
    }).not.toThrow()
  })
})
