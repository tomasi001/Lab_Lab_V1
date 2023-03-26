import { render } from '@redwoodjs/testing/web'

import EasePageLayout from './EasePageLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EasePageLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EasePageLayout />)
    }).not.toThrow()
  })
})
