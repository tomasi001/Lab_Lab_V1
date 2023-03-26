import { render } from '@redwoodjs/testing/web'

import ViewVoiceEntry from './ViewVoiceEntry'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ViewVoiceEntry', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ViewVoiceEntry />)
    }).not.toThrow()
  })
})
