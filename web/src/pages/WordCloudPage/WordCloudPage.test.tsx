import { render } from '@redwoodjs/testing/web'

import WordCloudPage from './WordCloudPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WordCloudPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WordCloudPage />)
    }).not.toThrow()
  })
})
