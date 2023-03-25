import { render } from '@redwoodjs/testing/web'

import NewVoiceEntryPage from './NewVoiceEntryPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewVoiceEntryPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewVoiceEntryPage />)
    }).not.toThrow()
  })
})
